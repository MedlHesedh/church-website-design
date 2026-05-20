'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // [TODO: Integrate with email service (SendGrid, Resend, etc.) or backend API]
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              Have a question or prayer request? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="bg-secondary rounded p-8 border border-border text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Location
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Church Name]<br />
                  [TODO: Street Address]<br />
                  [TODO: City, State ZIP]
                </p>
              </div>

              {/* Phone */}
              <div className="bg-secondary rounded p-8 border border-border text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Phone
                </h3>
                <a
                  href="tel:[TODO: Phone]"
                  className="text-primary font-bold text-lg hover:text-primary/80 transition-colors"
                >
                  [TODO: Phone Number]
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  [TODO: Office hours]
                </p>
              </div>

              {/* Email */}
              <div className="bg-secondary rounded p-8 border border-border text-center">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Email
                </h3>
                <a
                  href="mailto:[TODO: Email]"
                  className="text-primary font-bold text-lg hover:text-primary/80 transition-colors break-all"
                >
                  [TODO: Email Address]
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-primary/10 rounded h-80 flex items-center justify-center border border-border mb-12">
              <div className="text-center">
                <div className="text-6xl text-primary/30 mb-4">🗺️</div>
                <p className="text-muted-foreground">
                  [TODO: Embed Google Map here using Google Maps Embed API]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
                <p className="font-bold">Thank you!</p>
                <p>Your message has been sent successfully. We&apos;ll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded p-8 border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Planning to Visit</option>
                    <option value="membership">Church Membership</option>
                    <option value="volunteer">Volunteer Interest</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 border border-border rounded focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-foreground">
                  I agree to have my information used to respond to my inquiry. [TODO: Add privacy policy link]
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Prayer Requests */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Prayer Requests
            </h2>

            <div className="bg-secondary rounded p-8 border border-border mb-8">
              <p className="text-foreground leading-relaxed mb-6">
                If you have a prayer request, please use the form above and select "Prayer Request" as your subject. Our pastoral staff and prayer team will include your request in our prayers.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                [TODO: Explain your church&apos;s prayer ministry. How often do you meet? How are prayer requests handled?]
              </p>
              <p className="text-foreground leading-relaxed">
                [TODO: You can also pray with someone immediately by calling [TODO: phone] during office hours.]
              </p>
            </div>

            <div className="bg-primary text-primary-foreground rounded p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                24/7 Prayer Line
              </h3>
              <p className="opacity-95 mb-4">
                [TODO: If you have a prayer line or prayer hotline, include the number and describe how it works]
              </p>
              <a
                href="tel:[TODO: Prayer Line]"
                className="inline-flex items-center justify-center px-8 py-2 bg-accent text-accent-foreground rounded font-bold hover:opacity-90 transition-opacity"
              >
                Call to Pray
              </a>
            </div>
          </div>
        </section>

        {/* Connect on Social */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
              Follow Us Online
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.youtube.com/@[TODO-CHANNEL-ID]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full border border-border hover:shadow-lg transition-shadow text-red-600 text-2xl"
              >
                ▶
              </a>
              <a
                href="https://www.facebook.com/[TODO-CHURCH-PAGE]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full border border-border hover:shadow-lg transition-shadow text-blue-600 text-2xl font-bold"
              >
                f
              </a>
              <a
                href="https://instagram.com/[TODO-INSTAGRAM]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full border border-border hover:shadow-lg transition-shadow text-pink-600 text-2xl"
              >
                📷
              </a>
              <a
                href="https://twitter.com/[TODO-TWITTER]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full border border-border hover:shadow-lg transition-shadow text-blue-400 text-2xl font-bold"
              >
                𝕏
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
