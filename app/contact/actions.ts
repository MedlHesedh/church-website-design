'use server'

import { Resend } from 'resend'
import { headers } from 'next/headers'
import { contactSchema, type ContactFormValues } from '@/lib/contact-schema'
import { isRateLimited } from '@/lib/rate-limiter'

export type { ContactFormValues }

const resend = new Resend(process.env.RESEND_API_KEY)

const SUBJECT_LABELS: Record<string, string> = {
  general: 'General Inquiry',
  prayer: 'Prayer Request',
  visit: 'Planning to Visit',
  membership: 'Church Membership',
  counseling: 'Biblical Counseling',
  volunteer: 'Serving & Volunteering',
  other: 'Other',
}

function buildEmailHtml(
  name: string,
  email: string,
  phone: string | undefined,
  subject: string,
  message: string
): string {
  const rows = [
    ['Name', name],
    ['Email', `<a href="mailto:${email}" style="color:#1B2D40;">${email}</a>`],
    ['Phone', phone || '—'],
    ['Subject', SUBJECT_LABELS[subject] ?? subject],
  ]
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0ece4;width:110px;vertical-align:top;">
          <span style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#999;font-family:Arial,sans-serif;">${label}</span>
        </td>
        <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f0ece4;font-size:15px;color:#1B2D40;">${value}</td>
      </tr>`
    )
    .join('')

  const sent = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  })

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-top:4px solid #9C7730;">
        <tr>
          <td style="padding:28px 36px 24px;border-bottom:1px solid #e8e4dc;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9C7730;font-family:Arial,sans-serif;">Contact Form</p>
            <h1 style="margin:0;font-size:22px;font-weight:600;color:#1B2D40;font-family:Georgia,serif;">New Message Received</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#888;font-family:Arial,sans-serif;">Truth and Life Christian Church &middot; Macon, Georgia</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows}
              <tr>
                <td colspan="2" style="padding:20px 0 8px;">
                  <span style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#999;font-family:Arial,sans-serif;">Message</span>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="font-size:15px;color:#1B2D40;line-height:1.75;white-space:pre-wrap;padding-bottom:8px;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 36px;background:#f9f7f3;border-top:1px solid #e8e4dc;">
            <p style="margin:0;font-size:12px;color:#aaa;font-family:Arial,sans-serif;">
              Received ${sent} via the Truth and Life Christian Church website contact form.<br>
              Reply directly to this email to respond to ${name}.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string> }

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactActionResult> {
  const headersList = await headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip, { limit: 5, windowMs: 60_000 })) {
    return {
      success: false,
      error: 'Too many requests. Please wait a moment and try again.',
    }
  }

  const parsed = contactSchema.safeParse(values)
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const err of parsed.error.errors) {
      const key = String(err.path[0])
      if (!fieldErrors[key]) fieldErrors[key] = err.message
    }
    return { success: false, error: 'Please fix the errors below.', fieldErrors }
  }

  const { name, email, phone, subject, message } = parsed.data

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    console.error('CONTACT_EMAIL is not set')
    return { success: false, error: 'Server configuration error. Please try again later.' }
  }

  // Use a verified domain address in production via RESEND_FROM_ADDRESS
  // e.g. "Truth and Life <noreply@yourchurchdomain.org>"
  // onboarding@resend.dev is Resend's shared test domain — for development only
  const fromAddress =
    process.env.RESEND_FROM_ADDRESS ?? 'Truth and Life Contact Form <onboarding@resend.dev>'

  const idempotencyKey = `contact-form/${ip}-${Date.now()}`

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: contactEmail,
    replyTo: email,
    subject: `[Contact] ${SUBJECT_LABELS[subject] ?? subject} — ${name}`,
    html: buildEmailHtml(name, email, phone, subject, message),
    idempotencyKey,
  })

  if (error) {
    console.error('Resend error:', error)
    return { success: false, error: 'Failed to deliver your message. Please try again later.' }
  }

  console.log('Email sent:', data?.id)
  return { success: true }
}
