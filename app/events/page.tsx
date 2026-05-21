import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Events — Truth and Life Christian Church',
  description: 'Upcoming services, events, and fellowship opportunities at Truth and Life Christian Church.',
}

const regularServices = [
  { day: 'Sunday', time: '9:15 AM', title: 'Sunday School', location: 'Classrooms' },
  { day: 'Sunday', time: '10:30 AM', title: 'Morning Worship', location: 'Sanctuary' },
  { day: 'Sunday', time: '6:00 PM', title: 'Prayer Meeting / Evening Service', location: 'Sanctuary' },
  { day: 'Wednesday', time: '7:00 PM', title: 'Prayer Meeting', location: 'Fellowship Hall' },
]

const upcomingEvents = [
  {
    id: 1,
    month: 'Jun',
    day: '1',
    dayOfWeek: 'Sun',
    time: '6:00 PM',
    type: 'Church Government',
    title: 'Annual Members\' Meeting',
    location: 'Fellowship Hall',
    description:
      'The annual congregational meeting for all covenant members. We will review ministry reports from elders and deacons, discuss the ministry budget, and seek the Lord together in prayer for the year ahead. Members are strongly encouraged to attend.',
  },
  {
    id: 2,
    month: 'Jun',
    day: '16',
    dayOfWeek: 'Mon',
    time: '9:00 AM – 12:00 PM',
    type: 'Children\'s Ministry',
    title: 'Vacation Bible School',
    location: 'Sanctuary & Classrooms',
    description:
      'Five mornings of gospel-centered Bible school for children ages 4–12. Children will study key narratives of Scripture through story, song, craft, and memory work. Register your children at the welcome table on any Sunday in May.',
  },
  {
    id: 3,
    month: 'Jun',
    day: '22',
    dayOfWeek: 'Sun',
    time: 'After Morning Worship',
    type: 'Fellowship',
    title: 'Church Picnic & Family Day',
    location: 'Church Grounds',
    description:
      'Our annual outdoor fellowship following the morning service. Bring a dish to share and plan to spend the afternoon with your church family. Games for children will be organized. All are welcome — members, regular attenders, and guests.',
  },
  {
    id: 4,
    month: 'Jul',
    day: '12',
    dayOfWeek: 'Sat',
    time: '9:15 AM',
    type: 'Membership',
    title: 'Membership Class — Session One',
    location: 'Room 104',
    description:
      'The first of two Saturday sessions for those interested in church membership. We will cover the church\'s history, our doctrinal standards, church polity, and the expectations and privileges of membership. Session two meets July 19.',
  },
  {
    id: 5,
    month: 'Aug',
    day: '9',
    dayOfWeek: 'Sat',
    time: '9:00 AM – 4:00 PM',
    type: 'Women\'s Ministry',
    title: 'Women\'s Bible Conference',
    location: 'Main Sanctuary',
    description:
      'A full-day conference for women of all ages with two plenary sessions, workshop breakouts, and fellowship over lunch. This year\'s theme: "Rooted: Abiding in Christ Through Every Season." Speaker information will be announced in June.',
  },
  {
    id: 6,
    month: 'Aug',
    day: '24',
    dayOfWeek: 'Sun',
    time: '12:30 PM',
    type: 'Lord\'s Supper',
    title: 'Quarterly Communion Service',
    location: 'Sanctuary',
    description:
      'Our regular observance of the Lord\'s Supper following the morning service. The Table is open to all baptized believers who are in good standing with a local church and able to examine themselves. A brief service of scripture, prayer, and song will precede the ordinance.',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Calendar"
          title="Events &amp; Activities"
          subtitle="Regular services, fellowship gatherings, and special events at Truth and Life Christian Church."
        />

        {/* Regular Services */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Every Week</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Our Regular Gatherings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
              {regularServices.map((service, i) => (
                <div key={i} className="bg-card border-b sm:border-b-0 sm:border-r border-border last:border-0 p-7">
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">{service.day}</p>
                  <p className="font-serif text-3xl font-light text-foreground mb-1">{service.time.split(' ')[0]}</p>
                  <p className="text-sm text-muted-foreground mb-3">{service.time.split(' ')[1]}</p>
                  <p className="text-[15px] font-semibold text-foreground mb-1">{service.title}</p>
                  <p className="text-[13px] text-muted-foreground">{service.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Coming Up</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Upcoming Events
            </h2>

            <div className="space-y-0 border border-border">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-card border-b border-border last:border-b-0 flex">
                  {/* Date Column */}
                  <div className="w-20 md:w-24 bg-primary text-primary-foreground flex flex-col items-center justify-center py-8 flex-shrink-0 text-center">
                    <span className="text-[10px] font-medium tracking-widest uppercase text-primary-foreground/55">
                      {event.month}
                    </span>
                    <span className="font-serif text-3xl md:text-4xl font-light leading-none mt-1">
                      {event.day}
                    </span>
                    <span className="text-[10px] text-primary-foreground/55 mt-1">
                      {event.dayOfWeek}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-6 md:px-8 py-6">
                    <div className="flex flex-wrap items-start gap-2 mb-3">
                      <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent border border-accent/25 px-2 py-0.5">
                        {event.type}
                      </span>
                      <span className="text-[12px] text-muted-foreground self-center">
                        {event.time} · {event.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-[14px] text-foreground/65 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              <div className="bg-card border-b md:border-b-0 md:border-r border-border p-8 md:p-10">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">Stay Informed</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Weekly Newsletter</h3>
                <p className="text-[14px] text-foreground/65 leading-relaxed mb-6">
                  Receive the church bulletin, sermon summaries, and upcoming events in your inbox each week. We send one email per week — no more.
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="bg-card p-8 md:p-10">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">Questions?</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact the Office</h3>
                <p className="text-[14px] text-foreground/65 leading-relaxed mb-6">
                  For details about any upcoming event, to register for a class, or to request a room for a meeting, please reach out to the church office.
                </p>
                <div className="space-y-2">
                  <p className="text-[14px] text-foreground/75">
                    <span className="font-medium">Phone:</span> (478) 555-0193
                  </p>
                  <p className="text-[14px] text-foreground/75">
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:office@truthandlifechurch.org" className="text-primary hover:text-accent transition-colors">
                      office@truthandlifechurch.org
                    </a>
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-3">Office hours: Monday–Friday, 9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
