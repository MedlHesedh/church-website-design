import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const upcomingEvents = [
  {
    id: 1,
    title: '[TODO: Event Name]',
    date: '[TODO: Date]',
    time: '[TODO: Time]',
    location: '[TODO: Location]',
    description: '[TODO: Event description and details]',
    type: 'Special Event',
  },
  {
    id: 2,
    title: '[TODO: Event Name]',
    date: '[TODO: Date]',
    time: '[TODO: Time]',
    location: '[TODO: Location]',
    description: '[TODO: Event description and details]',
    type: 'Community Service',
  },
  {
    id: 3,
    title: '[TODO: Event Name]',
    date: '[TODO: Date]',
    time: '[TODO: Time]',
    location: '[TODO: Location]',
    description: '[TODO: Event description and details]',
    type: 'Fellowship',
  },
  {
    id: 4,
    title: '[TODO: Event Name]',
    date: '[TODO: Date]',
    time: '[TODO: Time]',
    location: '[TODO: Location]',
    description: '[TODO: Event description and details]',
    type: 'Training',
  },
]

const pastorals = [
  { day: 'Sunday', time: '10:00 AM', title: 'Worship Service' },
  { day: 'Sunday', time: '5:00 PM', title: 'Evening Service' },
  { day: 'Wednesday', time: '7:00 PM', title: 'Prayer Meeting' },
]

export const metadata = {
  title: 'Events - [TODO: Church Name]',
  description: 'Upcoming events and activities at [TODO: Church Name].',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Events & Activities
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              Stay informed about upcoming services, special events, and fellowship opportunities at our church.
            </p>
          </div>
        </section>

        {/* Regular Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Regular Meetings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastorals.map((service, index) => (
                <div key={index} className="bg-secondary rounded p-8 border border-border text-center">
                  <p className="text-accent font-medium text-sm mb-2 uppercase tracking-wide">
                    {service.day}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {service.time}
                  </h3>
                  <p className="text-foreground text-lg">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Upcoming Events
            </h2>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-accent font-medium text-sm mb-2">DATE</p>
                        <p className="font-serif text-xl font-bold text-foreground">
                          {event.date}
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          {event.time}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-accent font-medium text-sm mb-2">EVENT</p>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-foreground mb-3">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            {event.type}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-accent font-medium text-sm mb-2">LOCATION</p>
                        <p className="font-serif font-bold text-foreground mb-4">
                          {event.location}
                        </p>
                        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded p-8 text-center border border-border">
                <p className="text-muted-foreground text-lg">
                  [TODO: Add upcoming events to the calendar]
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Previous Highlights
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Here are some photos and highlights from recent church events and activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 aspect-video flex items-center justify-center">
                    <div className="text-5xl text-primary/30">📸</div>
                  </div>
                  <div className="bg-secondary p-6">
                    <p className="text-accent font-medium text-sm mb-2">[TODO: Date]</p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      [TODO: Event Name]
                    </h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      [TODO: Brief description of the event and its impact]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar & Newsletter */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Stay Updated
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  View Full Calendar
                </h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Check out our complete calendar of events, services, and ministry activities. You can add events to your personal calendar or set up notifications.
                </p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                  Open Calendar
                </button>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Get the latest news, sermon summaries, and upcoming events delivered to your inbox each week.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
