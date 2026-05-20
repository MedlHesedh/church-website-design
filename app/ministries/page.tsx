import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const ministries = [
  {
    id: 1,
    name: 'Adult Sunday School',
    description: '[TODO: Describe this ministry. What does it do? Who leads it? When does it meet?]',
    contact: '[TODO: Contact person]',
    icon: '📚',
  },
  {
    id: 2,
    name: 'Children\'s Ministry',
    description: '[TODO: Describe your children\'s programming. Include age groups served, focus areas, and how parents can get involved.]',
    contact: '[TODO: Contact person]',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 3,
    name: 'Youth Ministry',
    description: '[TODO: Describe your youth group. What activities and discipleship do you provide? How often do you meet?]',
    contact: '[TODO: Contact person]',
    icon: '🎯',
  },
  {
    id: 4,
    name: 'Worship & Music',
    description: '[TODO: Explain your music ministry. Describe the style of worship, choir involvement, and how people can participate.]',
    contact: '[TODO: Contact person]',
    icon: '🎵',
  },
  {
    id: 5,
    name: 'Community Outreach',
    description: '[TODO: Describe local missions and community service. What needs do you address? How often do you serve?]',
    contact: '[TODO: Contact person]',
    icon: '🤝',
  },
  {
    id: 6,
    name: 'Missions & Global Outreach',
    description: '[TODO: Share your missions partnerships. Which organizations or regions do you support? How can members get involved?]',
    contact: '[TODO: Contact person]',
    icon: '🌍',
  },
  {
    id: 7,
    name: 'Men\'s Ministry',
    description: '[TODO: Describe your men\'s group. What studies, events, or service projects do you do together?]',
    contact: '[TODO: Contact person]',
    icon: '💪',
  },
  {
    id: 8,
    name: 'Women\'s Ministry',
    description: '[TODO: Describe your women\'s ministry. What discipleship and fellowship opportunities exist?]',
    contact: '[TODO: Contact person]',
    icon: '👩',
  },
  {
    id: 9,
    name: 'Care & Counseling',
    description: '[TODO: Explain how your church cares for those in crisis or struggling. What resources and support do you offer?]',
    contact: '[TODO: Contact person]',
    icon: '💝',
  },
]

export const metadata = {
  title: 'Ministries - [TODO: Church Name]',
  description: 'Learn about the various ministry areas and how you can get involved.',
}

export default function MinistriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Ministries
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              We have opportunities for every believer to use their gifts and grow in faith through various ministry areas.
            </p>
          </div>
        </section>

        {/* Ministry Philosophy */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Ministry Philosophy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              [TODO: Explain your church&apos;s approach to ministry. How do you understand the priesthood of all believers? How do you equip members to serve?]
            </p>
            <p className="text-foreground leading-relaxed">
              [TODO: Describe how members can discover their spiritual gifts and find their place in ministry.]
            </p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Ministry Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.map((ministry) => (
                <div key={ministry.id} className="bg-white rounded p-8 border border-border hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{ministry.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {ministry.name}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-6 text-sm">
                    {ministry.description}
                  </p>
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Contact:</strong> {ministry.contact}
                    </p>
                    <button className="text-primary font-medium hover:text-primary/80 transition-colors text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Volunteer Opportunities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  For Church Members
                </h3>
                <p className="text-foreground leading-relaxed mb-6">
                  If you are a member or regular attendee of [TODO: Church Name], we have many opportunities to serve. Our ministries depend on committed believers willing to use their gifts for God&apos;s glory.
                </p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                  Discover Your Ministry
                </button>
              </div>

              <div className="bg-secondary rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  For Visitors
                </h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Visiting us for the first time? We&apos;d love to have you join us for worship and get to know our church family. As you grow in your faith with us, opportunities to serve will naturally emerge.
                </p>
                <Link href="/visit" className="inline-block px-6 py-2 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Plan Your Visit
                </Link>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Ready to Serve?
              </h3>
              <p className="opacity-95 mb-6 max-w-2xl mx-auto">
                If you feel called to a specific ministry or would like to learn more about how you can serve, please reach out to our pastoral staff.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Spiritual Gifts */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Discovering Your Spiritual Gifts
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Every believer has been given spiritual gifts to build up the body of Christ. Through our ministries, you can discover and develop the gifts God has given you.
            </p>
            <p className="text-foreground leading-relaxed">
              [TODO: Explain how your church helps people identify and develop spiritual gifts. Do you use gift assessments? Mentoring? Training?]
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
