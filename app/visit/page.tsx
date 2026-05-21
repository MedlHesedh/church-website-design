import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Plan Your Visit — Truth and Life Christian Church',
  description: 'Everything you need to know before visiting Truth and Life Christian Church for the first time.',
}

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Come as you are. Members dress in a range from casual to business casual. There is no dress code and no judgment. What matters is that you are there.',
  },
  {
    q: 'Do I have to be a Christian to attend?',
    a: 'Absolutely not. All are welcome. Many people who visit us are seekers, skeptics, or those with questions about Christianity. You are welcome to observe, listen, and ask questions at your own pace.',
  },
  {
    q: 'Will someone pressure me to join or give money?',
    a: 'No. We will not single out visitors or ask for anything. During the service, an offering is received — but giving is an act of worship for members and you are not expected to participate.',
  },
  {
    q: 'How long is the service?',
    a: 'The Sunday morning service typically runs about 75–85 minutes. We begin with congregational singing, Scripture reading, and prayer, followed by the sermon — which is usually 40–45 minutes.',
  },
  {
    q: 'What happens with my children?',
    a: 'Nursery care is available for infants and toddlers. Children in Kindergarten through Grade 5 attend Children\'s Church at 10:30 AM. Older children are encouraged to remain in the service with their families.',
  },
  {
    q: 'How do I become a member?',
    a: 'We offer a two-session Membership Class (held quarterly on Saturday mornings) for those who wish to pursue membership. Contact the office or speak with any elder for more information.',
  },
]

export default function VisitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="We&apos;re Glad You&apos;re Coming"
          title="Plan Your Visit"
          subtitle="Everything you need to know before you arrive. We are a church of ordinary people shaped by an extraordinary gospel, and we would love to have you join us."
        />

        {/* Quick Info */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Location */}
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Find Us</p>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Location &amp; Directions</h2>

                <div className="border border-border bg-card p-7 mb-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Truth &amp; Life Christian Church
                  </h3>
                  <address className="not-italic text-[15px] text-foreground/75 leading-relaxed mb-5">
                    4821 Covenant Way<br />
                    Orion, Bataan 31201
                  </address>
                  <a
                    href="https://maps.google.com/?q=4821+Covenant+Way+Macon+GA+31201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div className="border border-border bg-secondary p-5">
                  <p className="text-[13px] font-medium text-foreground mb-1">Parking</p>
                  <p className="text-[13px] text-foreground/65 leading-relaxed">
                    Free parking is available in the main lot and the overflow lot across the street. Accessible spaces are clearly marked near the main entrance. Arrive 10–15 minutes early, especially on your first visit.
                  </p>
                </div>
              </div>

              {/* Service Times */}
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Schedule</p>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Service Times</h2>

                <div className="space-y-0 border border-border">
                  {[
                    { label: 'Sunday School', time: '9:15 AM', note: 'All ages · Classrooms' },
                    { label: 'Morning Worship', time: '10:30 AM', note: 'Main Service · Sanctuary (~80 min)' },
                    { label: 'Evening Service', time: '6:00 PM', note: 'Bible Study & Prayer · Sanctuary' },
                    { label: 'Wednesday Prayer', time: '7:00 PM', note: 'Corporate Prayer · Fellowship Hall' },
                  ].map((service, i) => (
                    <div key={i} className="bg-card border-b border-border last:border-b-0 px-6 py-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{service.label}</p>
                        <p className="text-[13px] text-muted-foreground">{service.note}</p>
                      </div>
                      <p className="font-serif text-xl font-light text-primary flex-shrink-0 ml-4">{service.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">First Visit</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              {[
                {
                  title: 'The Atmosphere',
                  body: 'Truth and Life is a warm but unhurried congregation. You will be greeted at the door and given a bulletin. The service begins on time with congregational singing. The building is a plain, historic space designed for hearing and worship — not performance.',
                },
                {
                  title: 'The Worship',
                  body: 'We sing psalms, traditional hymns, and confessionally sound contemporary songs — accompanied by piano and sometimes small ensemble. Worship is participatory and congregational. We do not have a worship team in the sense of a performance band; the congregation is the choir.',
                },
                {
                  title: 'The Preaching',
                  body: 'Every sermon is an exposition of a biblical text. The preacher works through the passage carefully, explains what it says, and applies it to the lives of people in the room. You can expect a thoughtful, Scripture-saturated message of approximately 40–45 minutes.',
                },
                {
                  title: 'After the Service',
                  body: 'We linger. Fellowship after the service — coffee in the foyer, conversations in the parking lot — is part of who we are. You will be warmly welcomed and invited to introduce yourself. A welcome bag with information about the church will be given to first-time guests.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border-b md:border-r border-border last:border-0 p-7">
                  <div className="w-5 h-0.5 bg-accent mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-[14px] text-foreground/65 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Your First Sunday</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              A Simple Guide
            </h2>

            <div className="space-y-0 border border-border">
              {[
                {
                  step: '01',
                  title: 'Arrive 10–15 Minutes Early',
                  body: 'Find parking, locate the sanctuary entrance, and allow yourself time to settle in before the service begins. Greeters will be at the doors.',
                },
                {
                  step: '02',
                  title: 'Check In Your Children',
                  body: 'If you have young children, nursery check-in is on the right as you enter the building. Staff will give you a pager and help you find your child\'s room. Children stay with you during Sunday School at 9:15.',
                },
                {
                  step: '03',
                  title: 'Find a Seat',
                  body: 'Seating is open throughout the sanctuary. An usher will offer you a bulletin and help you find a seat if the building is full. Family seating is available on both sides of the center aisle.',
                },
                {
                  step: '04',
                  title: 'Participate as You Are Comfortable',
                  body: 'Stand with us when we sing, follow along with the Scripture reading in the pew Bible or bulletin, and simply listen to the sermon. There is no pressure to do anything you are not yet comfortable with.',
                },
                {
                  step: '05',
                  title: 'Stay for Fellowship',
                  body: 'After the service, we invite you to stay for coffee and conversation. A pastor or elder will be happy to answer any questions, give you more information about the church, or simply talk.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border-b border-border last:border-b-0 flex items-start gap-6 px-7 py-6">
                  <span className="font-serif text-2xl font-light text-accent/50 flex-shrink-0 w-8">{item.step}</span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-[14px] text-foreground/65 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-border border border-border">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card">
                  <summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none font-semibold text-foreground text-[15px] hover:text-primary transition-colors">
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-7 pb-6 pt-1 text-[14px] text-foreground/65 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug mb-3">
                We hope to meet you Sunday.
              </h2>
              <p className="text-base font-light text-primary-foreground/65 leading-relaxed">
                If you have questions before your first visit, please do not hesitate to contact us. We are glad to answer them.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="https://maps.google.com/?q=4821+Covenant+Way+Macon+GA+31201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
