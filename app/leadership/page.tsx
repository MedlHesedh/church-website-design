import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const leaders = [
  {
    id: 1,
    name: '[TODO: Name]',
    title: 'Senior Pastor',
    bio: '[TODO: Bio including ordination, education, ministry background, and family information]',
    email: '[TODO: Email]',
  },
  {
    id: 2,
    name: '[TODO: Name]',
    title: 'Associate Pastor',
    bio: '[TODO: Bio including area of focus, experience, and background]',
    email: '[TODO: Email]',
  },
  {
    id: 3,
    name: '[TODO: Name]',
    title: 'Elder',
    bio: '[TODO: Bio including profession and ministry background]',
    email: '[TODO: Email]',
  },
  {
    id: 4,
    name: '[TODO: Name]',
    title: 'Elder',
    bio: '[TODO: Bio including profession and ministry background]',
    email: '[TODO: Email]',
  },
  {
    id: 5,
    name: '[TODO: Name]',
    title: 'Deacon',
    bio: '[TODO: Bio and ministry focus]',
    email: '[TODO: Email]',
  },
  {
    id: 6,
    name: '[TODO: Name]',
    title: 'Deacon',
    bio: '[TODO: Bio and ministry focus]',
    email: '[TODO: Email]',
  },
]

export const metadata = {
  title: 'Leadership - [TODO: Church Name]',
  description: 'Meet the pastoral staff and leadership of our church.',
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Leadership
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              Meet the pastors and elders who shepherd our congregation and lead our church.
            </p>
          </div>
        </section>

        {/* Leadership Structure */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 bg-secondary rounded p-8 border border-border">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Leadership Structure
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                [TODO: Replace with your church&apos;s governance structure. Explain how decisions are made, the role of the pastoral team, elders, deacons, and congregational participation. For example: "We are led by a plurality of elders who shepherd the flock, supported by deacons who care for the physical and spiritual needs of the congregation."]
              </p>
              <p className="text-foreground leading-relaxed">
                [TODO: Add any additional information about your church&apos;s polity, membership process, or how people can serve.]
              </p>
            </div>
          </div>
        </section>

        {/* Pastoral Staff */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Pastoral Staff & Elders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.slice(0, 4).map((leader) => (
                <div key={leader.id} className="bg-white rounded p-8 border border-border hover:shadow-lg transition-shadow">
                  <div className="w-full aspect-square bg-primary/10 rounded mb-6 flex items-center justify-center">
                    <div className="text-6xl text-primary/30">👤</div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{leader.title}</p>
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                  >
                    Contact →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deacons */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Deacons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.slice(4).map((leader) => (
                <div key={leader.id} className="bg-secondary rounded p-8 border border-border">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl text-primary/30">👤</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-accent font-medium mb-3">{leader.title}</p>
                      <p className="text-foreground text-sm leading-relaxed mb-4">
                        {leader.bio}
                      </p>
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                      >
                        Contact →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Interested in Ministry?
            </h2>
            <p className="text-lg font-light opacity-95 mb-8 max-w-2xl mx-auto">
              We believe all believers are called to serve in God&apos;s kingdom. Discover how you can use your gifts to serve Christ and our congregation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ministries"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Explore Our Ministries
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-medium rounded hover:bg-accent hover:text-accent-foreground transition-colors"
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
