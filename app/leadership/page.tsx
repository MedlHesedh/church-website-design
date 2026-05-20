import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Leadership — Truth and Life Christian Church',
  description: 'Meet the pastors, elders, and deacons of Truth and Life Christian Church.',
}

const elders = [
  {
    name: 'Rev. Minandro Masangcap',
    title: 'Senior/Theological Pastor',
    credentials: 'MDiv · Southern Baptist Theological Seminary',
    email: 'minandromasangcap@truthandlifechurch.org',
    bio: 'Minandro Masangcap has served as Senior Pastor of Truth and Life since 2015. He received his Master of Divinity from Southern Seminary and was ordained to gospel ministry in 2003. James and his wife Sarah have four children. He is committed to careful expository preaching, pastoral counseling, and the theological training of the next generation of church leaders.',
  },
  {
    name: 'Ptr. Jonathan Vitug',
    title: 'Administrative Pastor',
    credentials: 'ThM · Reformed Theological Seminary',
    email: 'jonathanvitug@truthandlifechurch.org',
    bio: 'Jonathan Vitug served as a high school principal for twenty-two years before receiving his ThM from Reformed Theological Seminary and being confirmed as a Teaching Elder in 2018. He teaches the adult Sunday School class and assists with preaching on regular rotation. Thomas and his wife Patricia have three grown children and several grandchildren.',
  },
  {
    name: 'Ptr. Roderick Pernito',
    title: 'Ministrial Pastor',
    credentials: 'MA in Biblical Studies · Southeastern Seminary',
    email: 'roderickpernito@truthandlifechurch.org',
    bio: 'Roderick Pernito is a business owner in Macon who received his MA in Biblical Studies from Southeastern Seminary before being confirmed as a Pastoral Elder in 2020. He oversees the Men\'s Covenant Group, assists in visitation, and serves on the pastoral care rotation. Marcus and his wife Diane have two children.',
  },
]

const deacons = [
  {
    name: 'William Stanton',
    title: 'Deacon of Finance',
    email: 'finance@truthandlifechurch.org',
    bio: 'William is a Certified Public Accountant and has been a member of the congregation for twenty years. He oversees the church\'s financial records, administers the ministry budget, and leads the stewardship committee. He and his wife Connie have been married for thirty-one years.',
  },
  {
    name: 'Robert Kimball',
    title: 'Deacon of Benevolence',
    email: 'benevolence@truthandlifechurch.org',
    bio: 'Robert is a licensed social worker who coordinates the church\'s care ministry and community outreach. He administers the benevolence fund, oversees the Children\'s Ministry, and connects members with practical assistance in times of need. He and his wife Angela have three children.',
  },
  {
    name: 'Samuel Okafor',
    title: 'Deacon of Hospitality',
    email: 'hospitality@truthandlifechurch.org',
    bio: 'Samuel coordinates Sunday morning hospitality, new visitor follow-up, and the Lord\'s Supper preparation. He came to faith through the ministry of the church in 2014 and was confirmed as a deacon in 2021. He and his wife Grace are members of the morning worship team.',
  },
  {
    name: 'David Hartley',
    title: 'Deacon of Facilities',
    email: 'facilities@truthandlifechurch.org',
    bio: 'David is a general contractor who oversees the maintenance and stewardship of the church\'s property. He coordinates work crews for building projects, manages vendor relationships, and ensures the physical environment is prepared well for worship and ministry. He and his wife Rachel have four children.',
  },
]

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-muted-foreground/30 fill-current" aria-hidden="true">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  )
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Shepherd and Serve"
          title="Our Leadership"
          subtitle="Truth and Life is governed by a plurality of elders who shepherd the flock, supported by deacons who serve the practical and spiritual needs of the congregation."
        />

        {/* Polity Note */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7">
            <p className="text-[13px] text-foreground/65 leading-relaxed max-w-3xl">
              We hold to congregational polity with plural elder leadership — a pattern we believe is clearly established in the New Testament. Elders bear responsibility for the spiritual oversight of the congregation. Deacons serve the physical and practical needs of the body, freeing the elders for prayer and ministry of the Word (Acts 6:1–7).
            </p>
          </div>
        </div>

        {/* Elders */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Pastoral Staff</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Elders &amp; Pastors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {elders.map((person, i) => (
                <div key={i} className="bg-card border-b md:border-b-0 md:border-r border-border last:border-0 flex flex-col">
                  {/* Photo Placeholder */}
                  <div className="aspect-[4/3] bg-secondary border-b border-border flex items-center justify-center">
                    <PersonIcon />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-0.5">{person.name}</h3>
                      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-1">{person.title}</p>
                      <p className="text-[11px] text-muted-foreground mb-4">{person.credentials}</p>
                      <p className="text-[14px] text-foreground/65 leading-relaxed">{person.bio}</p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-border">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-[13px] font-medium text-primary hover:text-accent transition-colors"
                      >
                        {person.email} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deacons */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Service</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Deacons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              {deacons.map((person, i) => (
                <div key={i} className="bg-card border-b md:border-r border-border p-7 last:border-0">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted-foreground/30 fill-current">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-0.5">{person.name}</h3>
                      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">{person.title}</p>
                      <p className="text-[14px] text-foreground/65 leading-relaxed mb-4">{person.bio}</p>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-[12px] font-medium text-primary hover:text-accent transition-colors"
                      >
                        {person.email} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-4">Interested in Ministry?</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug mb-4">
                Serve the body of Christ.
              </h2>
              <p className="text-base font-light text-primary-foreground/70 leading-relaxed">
                The New Testament calls every believer to use their gifts for the building up of the church. If you would like to explore how you might serve, speak with one of our pastors.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/ministries"
                className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
              >
                Our Ministries
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
