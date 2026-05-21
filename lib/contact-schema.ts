import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(200),
  phone: z.string().max(30, 'Phone number is too long').optional().or(z.literal('')),
  subject: z.string().min(1, 'Please select a subject'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(5000, 'Message is too long (max 5000 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy to continue',
  }),
})

export type ContactFormValues = z.infer<typeof contactSchema>
