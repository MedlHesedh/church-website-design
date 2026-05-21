'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { TurnstileWidget, type TurnstileHandle } from '@/components/turnstile-widget'
import { clientContactSchema, type ContactFormInput } from '@/lib/contact-schema'
import { submitContactForm } from './actions'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(clientContactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '', consent: false },
  })

  const [submitted, setSubmitted] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef<TurnstileHandle>(null)

  const onSubmit = async (data: ContactFormInput) => {
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      toast.error('Please complete the security check before submitting.')
      return
    }

    const result = await submitContactForm({ ...data, turnstileToken })

    if (result.success) {
      setSubmitted(true)
      reset()
      setTurnstileToken('')
      turnstileRef.current?.reset()
      setTimeout(() => setSubmitted(false), 10_000)
    } else {
      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          setError(field as keyof ContactFormInput, { message })
        }
      }
      toast.error(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors'

  const fieldError = (msg?: string) =>
    msg ? <p className="mt-1.5 text-[12px] text-red-500">{msg}</p> : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Reach Out"
          title="Contact Us"
          subtitle="We would love to hear from you — whether you have a question about our church, want to talk with a pastor, or simply want to let us know you are coming."
        />

        {/* Contact Info */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-10">
              {[
                {
                  label: 'Address',
                  value: '4821 Covenant Way\nMacon, Georgia 31201',
                  link: null,
                  sublabel: 'Directions available via Google Maps',
                },
                {
                  label: 'Phone',
                  value: '(478) 555-0193',
                  link: 'tel:+14785550193',
                  sublabel: 'Office: Mon–Fri, 9:00 AM – 4:00 PM',
                },
                {
                  label: 'Email',
                  value: 'office@truthandlifechurch.org',
                  link: 'mailto:office@truthandlifechurch.org',
                  sublabel: 'We respond within one business day',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card border-b md:border-b-0 md:border-r border-border last:border-0 p-7"
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors block mb-1 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-serif text-lg font-semibold text-foreground mb-1 whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                  <p className="text-[12px] text-muted-foreground">{item.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary border border-border h-64 flex items-center justify-center mb-10">
              <div className="text-center">
                <p className="text-[13px] text-muted-foreground mb-2">
                  Map · 4821 Covenant Way, Macon, GA 31201
                </p>
                <a
                  href="https://maps.google.com/?q=4821+Covenant+Way+Macon+GA+31201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">
              Write to Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 leading-snug">
              Send a Message
            </h2>

            {submitted && (
              <div className="mb-8 border border-accent/30 bg-accent/5 p-5">
                <p className="font-medium text-foreground text-sm">Message received — thank you.</p>
                <p className="text-[13px] text-foreground/65 mt-1">
                  Thank you for contacting Truth and Life Christian Church. Our team will respond as
                  soon as possible.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-card border border-border p-8 md:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/70 mb-2"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    className={inputClass}
                    {...register('name')}
                  />
                  {fieldError(errors.name?.message)}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/70 mb-2"
                  >
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className={inputClass}
                    {...register('email')}
                  />
                  {fieldError(errors.email?.message)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/70 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(555) 123-4567"
                    className={inputClass}
                    {...register('phone')}
                  />
                  {fieldError(errors.phone?.message)}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/70 mb-2"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <select id="subject" className={inputClass} {...register('subject')}>
                    <option value="">Select a topic…</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Planning to Visit</option>
                    <option value="membership">Church Membership</option>
                    <option value="counseling">Biblical Counseling</option>
                    <option value="volunteer">Serving &amp; Volunteering</option>
                    <option value="other">Other</option>
                  </select>
                  {fieldError(errors.subject?.message)}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] font-medium tracking-[0.08em] uppercase text-foreground/70 mb-2"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="How can we help you?"
                  className={`${inputClass} resize-none`}
                  {...register('message')}
                />
                {fieldError(errors.message?.message)}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-0.5 w-4 h-4 border border-border accent-primary"
                  {...register('consent')}
                />
                <div>
                  <label
                    htmlFor="privacy"
                    className="text-[13px] text-foreground/60 leading-relaxed"
                  >
                    I understand that this information will be used to respond to my inquiry and may
                    be shared with the pastoral staff of Truth and Life Christian Church.
                  </label>
                  {fieldError(errors.consent?.message)}
                </div>
              </div>

              {TURNSTILE_SITE_KEY && (
                <div>
                  <TurnstileWidget
                    ref={turnstileRef}
                    siteKey={TURNSTILE_SITE_KEY}
                    onVerify={setTurnstileToken}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => setTurnstileToken('')}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Prayer Requests */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              <div className="bg-card border-b md:border-b-0 md:border-r border-border p-8 md:p-10">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">
                  Prayer
                </p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Submit a Prayer Request
                </h3>
                <p className="text-[14px] text-foreground/65 leading-relaxed mb-5">
                  Use the contact form above and select &ldquo;Prayer Request&rdquo; as your
                  subject. Our elders and pastoral care team will bring your request before the Lord
                  in prayer and may follow up if you request it.
                </p>
                <p className="text-[14px] text-foreground/65 leading-relaxed">
                  Prayer requests shared with the pastoral team are held in strict confidence unless
                  you indicate otherwise.
                </p>
              </div>
              <div className="bg-primary text-primary-foreground p-8 md:p-10">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">
                  Pastoral Care
                </p>
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
                  Speak with a Pastor
                </h3>
                <p className="text-[14px] text-primary-foreground/65 leading-relaxed mb-5">
                  If you are walking through a season of grief, crisis, or spiritual struggle and
                  would like to speak with one of our pastors, please call the church office or send
                  a message. We are here to help.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 mt-6">
                  <p className="text-[13px] text-primary-foreground/55 italic leading-relaxed">
                    &ldquo;Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him
                    sing praise. Is anyone among you sick? Let him call for the elders of the
                    church.&rdquo;
                  </p>
                  <cite className="text-[10px] font-medium tracking-[0.1em] uppercase text-accent not-italic block mt-2">
                    James 5:13–14
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
