import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Plan Your Visit - [TODO: Church Name]',
  description: 'Plan your first visit to our church. Find service times, location, what to expect, and more.',
}

export default function VisitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Plan Your Visit
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              We&apos;d love to have you join us. Everything you need to know before your first visit.
            </p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Location */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Location & Address
                </h2>
                <div className="bg-secondary rounded p-8 border border-border mb-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    [TODO: Church Name]
                  </h3>
                  <p className="text-lg text-foreground font-medium mb-2">
                    [TODO: Street Address]
                  </p>
                  <p className="text-lg text-foreground font-medium mb-6">
                    [TODO: City, State ZIP]
                  </p>
                  <a
                    href="https://maps.google.com/?q=[TODO: Church Name Address]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Get Directions
                  </a>
                </div>

                {/* Parking */}
                <div className="bg-primary/5 rounded p-6 border border-accent border-opacity-20">
                  <h4 className="font-bold text-foreground mb-2">Parking</h4>
                  <p className="text-foreground text-sm">
                    [TODO: Describe parking options available. Include: number of spots, accessibility information, and directions to parking areas.]
                  </p>
                </div>
              </div>

              {/* Service Times */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Service Times
                </h2>

                <div className="space-y-6">
                  <div className="bg-secondary rounded p-8 border border-border">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Sunday Morning Worship
                    </h3>
                    <p className="text-primary font-bold text-lg mb-3">
                      [TODO: Time]
                    </p>
                    <p className="text-foreground text-sm mb-4">
                      [TODO: Duration and description]
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ⏱️ Arrive 10-15 minutes early to find a seat and settle in.
                    </p>
                  </div>

                  <div className="bg-secondary rounded p-8 border border-border">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Sunday Evening Service
                    </h3>
                    <p className="text-primary font-bold text-lg mb-3">
                      [TODO: Time]
                    </p>
                    <p className="text-foreground text-sm">
                      [TODO: Description]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  The Atmosphere
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Describe the physical environment and atmosphere. What is the building like? What should visitors expect in terms of formality, warmth, and setting?]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  The Worship
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Describe your worship style. What kind of music? How long does worship last? Is it contemporary, traditional, hymn-based? What role does music play in your service?]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  The Message
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Explain your preaching style. Is it expository? Topical? How long are sermons? What can first-time visitors expect from the teaching?]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Children & Nursery
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Describe childcare and children's services. Are there: nursery services, children's church, Sunday school? What age groups are accommodated?]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* First Time Visitor */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              First Time Visitor Guide
            </h2>

            <div className="space-y-6">
              <div className="bg-secondary rounded p-8 border border-border">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Arrive Early</h3>
                    <p className="text-foreground">
                      Plan to arrive 10-15 minutes before the service starts. This allows time to find parking, locate the sanctuary, and settle in without feeling rushed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded p-8 border border-border">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Check In</h3>
                    <p className="text-foreground">
                      [TODO: Explain your first-time visitor process. Do you have: a welcome table, an information booth, or a visitor check-in area? What should first-timers do?]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded p-8 border border-border">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Find a Seat</h3>
                    <p className="text-foreground">
                      [TODO: Provide guidance on seating. Is it open seating? Reserved? Are there pews or chairs? Any special sections?]
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded p-8 border border-border">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Stay Relaxed</h3>
                    <p className="text-foreground">
                      You&apos;re in a place where people are gathering to worship Jesus. Feel free to participate as much or as little as you&apos;re comfortable with. There's no expectation or judgment—everyone is on their own spiritual journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded p-8 border border-border">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Connect Afterward</h3>
                    <p className="text-foreground">
                      [TODO: Explain what happens after the service. Is there: fellowship time, coffee, a greeting line? Do you give out visitor information? How can people connect with the church?]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Accessibility
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-bold text-foreground text-lg mb-3">🚗 Parking</h3>
                <p className="text-foreground text-sm mb-4">
                  [TODO: Describe accessible parking availability]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-bold text-foreground text-lg mb-3">♿ Wheelchair Access</h3>
                <p className="text-foreground text-sm mb-4">
                  [TODO: Describe wheelchair accessibility throughout the building]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-bold text-foreground text-lg mb-3">👂 Hearing Assistance</h3>
                <p className="text-foreground text-sm mb-4">
                  [TODO: Describe hearing assistance technology or services available]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-bold text-foreground text-lg mb-3">🧑‍🦽 Other Accommodations</h3>
                <p className="text-foreground text-sm mb-4">
                  [TODO: List any other accessibility features or accommodations available]
                </p>
              </div>
            </div>

            <div className="mt-8 bg-primary text-primary-foreground rounded p-6 text-center">
              <p className="mb-4">
                Do you need a specific accommodation? Please contact us in advance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-accent text-accent-foreground rounded font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-secondary rounded p-6 border border-border group">
                <summary className="font-bold text-foreground cursor-pointer flex items-center justify-between">
                  What should I wear?
                  <span className="ml-auto">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground mt-4 leading-relaxed">
                  [TODO: Answer: Casual dress is perfectly fine. People wear everything from jeans to business casual to formal attire.]
                </p>
              </details>

              <details className="bg-secondary rounded p-6 border border-border group">
                <summary className="font-bold text-foreground cursor-pointer flex items-center justify-between">
                  Do I have to be a member to attend?
                  <span className="ml-auto">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground mt-4 leading-relaxed">
                  [TODO: Answer: No, our church is open to everyone. All are welcome to attend worship regardless of membership status.]
                </p>
              </details>

              <details className="bg-secondary rounded p-6 border border-border group">
                <summary className="font-bold text-foreground cursor-pointer flex items-center justify-between">
                  Will someone pressure me to join?
                  <span className="ml-auto">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground mt-4 leading-relaxed">
                  [TODO: Answer: No. We welcome people at any stage of their spiritual journey. We hope you'll return and that you'll eventually make a public commitment to Christ, but there's no pressure.]
                </p>
              </details>

              <details className="bg-secondary rounded p-6 border border-border group">
                <summary className="font-bold text-foreground cursor-pointer flex items-center justify-between">
                  Where do I give an offering?
                  <span className="ml-auto">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground mt-4 leading-relaxed">
                  [TODO: Answer: We pass offering plates during the service, but giving is optional. Visitors are not expected to give. You can also give online at [link] or mail contributions to our address.]
                </p>
              </details>

              <details className="bg-secondary rounded p-6 border border-border group">
                <summary className="font-bold text-foreground cursor-pointer flex items-center justify-between">
                  What if I have more questions?
                  <span className="ml-auto">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground mt-4 leading-relaxed">
                  Feel free to reach out to us before your visit. Our pastoral staff would love to answer any questions you might have.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              We&apos;re Excited to Meet You!
            </h2>
            <p className="text-lg font-light opacity-95 mb-8 max-w-2xl mx-auto">
              We look forward to worshipping with you. If you have any questions before your visit or want to know more about our church, please don&apos;t hesitate to reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
