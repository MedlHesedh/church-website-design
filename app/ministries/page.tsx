import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Ministries — Truth and Life Christian Church',
  description: 'Ministry areas and opportunities to serve at Truth and Life Christian Church.',
}

const ministries = [
  {
    category: 'Lord\'s Day Worship',
    name: 'Adult Sunday School',
    schedule: 'Sundays · 9:15 AM',
    contact: 'Elder Thomas Garrett',
    description:
      'Systematic, teacher-led exposition of Scripture by book. Adults of all ages gather in separate classes to study the Bible carefully and discuss its implications for daily life and doctrine.',
  },
  {
    category: 'Family',
    name: 'Children\'s Ministry',
    schedule: 'Sundays · 8:00 AM',
    contact: 'Deacon Robert Kimball',
    description:
      'Gospel-centered instruction for children from birth through Grade 5. Nursery care is provided for infants and toddlers. Older children receive age-appropriate Bible teaching during the morning worship service.',
  },
  {
    category: 'Youth',
    name: 'Youth Group',
    schedule: 'Thursdays · 6:30 PM',
    contact: 'Elder Marcus Webb',
    description:
      'Expository Bible study and discipleship for students in Grades 6–12. We aim to ground young people in the great doctrines of the faith, equip them to defend the gospel, and call them to a life of active discipleship.',
  },
  {
    category: 'Lord\'s Day Worship',
    name: 'Congregational Worship',
    schedule: 'All Sunday Services',
    contact: 'Pastor James Whitfield',
    description:
      'Worship at Truth and Life is shaped by the Regulative Principle — we worship as Scripture directs. We sing psalms, hymns, and spiritual songs, with particular attention given to corporate Psalm-singing and the Great Commission Hymnal.',
  },
  {
    category: 'Outreach',
    name: 'Community Benevolence',
    schedule: 'Ongoing',
    contact: 'Deacon Robert Kimball',
    description:
      'Practical care for members of the congregation and neighbors in the Macon area who face material hardship. The deacons oversee a benevolence fund used to assist families with emergency needs in the name of Christ.',
  },
  {
    category: 'Outreach',
    name: 'International Missions',
    schedule: 'Ongoing',
    contact: 'Pastor James Whitfield',
    description:
      'We support IMB missionary partners laboring in East Africa and Southeast Asia. The congregation prays for them regularly, gives financially, and sends short-term teams to assist in the work when possible.',
  },
  {
    category: 'Men',
    name: 'Men\'s Covenant Group',
    schedule: 'Tuesdays · 6:30 AM',
    contact: 'Elder Marcus Webb',
    description:
      'Men gather early on Tuesday mornings for Bible study, prayer, and mutual accountability. Breakfast is provided. This is a place for iron to sharpen iron — where brothers speak the truth in love and pursue holiness together.',
  },
  // {
  //   category: 'Women',
  //   name: 'Women\'s Bible Study',
  //   schedule: 'Wednesdays · 10:00 AM',
  //   contact: 'Sarah Whitfield',
  //   description:
  //     'Inductive Bible study and discipleship for women of all ages. We work through books of the Bible with attention to careful interpretation and application. A companion evening session is planned for women who work during the day.',
  // },
  {
    category: 'Pastoral Care',
    name: 'Biblical Counseling',
    schedule: 'By Appointment',
    contact: 'Pastor James Whitfield',
    description:
      'Certified biblical counselors are available to walk with members and attenders through seasons of grief, conflict, anxiety, marriage difficulty, and other trials. All counseling is anchored in Scripture and the grace of the gospel.',
  },
]

const categories = ['Lord\'s Day Worship', 'Family', 'Youth', 'Men', 'Women', 'Outreach', 'Pastoral Care']

export default function MinistriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Serving Together"
          title="Ministries"
          subtitle="Every believer has been given gifts to build up the body of Christ. We believe ministry is not a program but a people — saints equipping saints for the work of the kingdom."
        />

        {/* Philosophy */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Our Philosophy</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-snug mb-6">
                  Ministry from the Inside Out
                </h2>
                <p className="text-[15px] text-foreground/75 leading-relaxed mb-5">
                  We resist building a program-driven church. Instead of filling slots in a ministry machine, we seek to identify and deploy the genuine gifts of every member — rooted in an understanding of their union with Christ and the calling of the local church.
                </p>
                <p className="text-[15px] text-foreground/75 leading-relaxed mb-8">
                  Our aim is to make disciples who know the Word, love the church, and serve their neighbors — not to produce busy church workers. Every ministry at Truth and Life exists to build up the body and extend the gospel.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Talk to a Pastor
                </Link>
              </div>

              <blockquote className="border-l-2 border-accent pl-8 py-2">
                <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-5">
                  &ldquo;And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.&rdquo;
                </p>
                <cite className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent not-italic">
                  Ephesians 4:11–12
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Ministry Grid */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">All Areas</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Our Ministry Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
              {ministries.map((ministry, i) => (
                <div key={i} className="bg-card border-b md:border-r border-border p-7 flex flex-col">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent mb-1">{ministry.category}</p>
                    <div className="w-6 h-0.5 bg-accent mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{ministry.name}</h3>
                    <p className="text-[12px] font-medium text-muted-foreground mb-4">{ministry.schedule}</p>
                    <p className="text-[14px] text-foreground/65 leading-relaxed flex-1">
                      {ministry.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <p className="text-[12px] text-muted-foreground">
                      Contact: <span className="text-foreground/75 font-medium">{ministry.contact}</span>
                    </p>
                    <Link
                      href="/contact"
                      className="text-[12px] font-medium text-primary hover:text-accent transition-colors"
                    >
                      Inquire &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-4">Ready to Serve?</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] mb-6">
                  Use Your Gifts<br />
                  <span className="italic">for God&rsquo;s Glory.</span>
                </h2>
                <p className="text-base font-light text-primary-foreground/70 leading-relaxed mb-8 max-w-md">
                  Every member of the body has a place. If you are not yet serving and would like to discover where your gifts might fit, we encourage you to speak with one of our elders or deacons.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>
              <div className="border border-primary-foreground/15 p-8">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-5">Membership &amp; Serving</h3>
                <p className="text-[14px] text-primary-foreground/65 leading-relaxed mb-5">
                  While all are welcome to attend our services, formal ministry leadership roles are reserved for covenant members of the church. We encourage those who regularly attend to pursue membership as the natural next step.
                </p>
                <Link
                  href="/about"
                  className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Learn About Membership &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
