import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Committed to{' '}
                <span className="text-accent">Biblical Preaching</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-8 opacity-95">
                We are a Reformed Southern Baptist church dedicated to expository preaching of God&apos;s Word, biblical discipleship, and gospel-centered community in [TODO: City, State].
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/messages"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-medium rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Watch Sermons
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                When We Gather
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us for worship, prayer, and the study of God&apos;s Word. All are welcome.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sunday Morning */}
              <div className="bg-secondary rounded p-8 text-center">
                <div className="text-accent text-4xl font-serif font-bold mb-4">⛪</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Sunday Morning Worship
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span className="text-lg font-bold text-primary">[TODO: Time]</span>
                  <br />
                  Main Service
                </p>
                <p className="text-sm text-muted-foreground">
                  Our primary gathering for expository preaching and congregational worship.
                </p>
              </div>

              {/* Sunday Evening */}
              <div className="bg-secondary rounded p-8 text-center">
                <div className="text-accent text-4xl font-serif font-bold mb-4">📖</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Sunday Evening
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span className="text-lg font-bold text-primary">[TODO: Time]</span>
                  <br />
                  Bible Study & Prayer
                </p>
                <p className="text-sm text-muted-foreground">
                  Deeper study of God&apos;s Word and corporate prayer.
                </p>
              </div>

              {/* Wednesday Evening */}
              <div className="bg-secondary rounded p-8 text-center">
                <div className="text-accent text-4xl font-serif font-bold mb-4">🙏</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Wednesday Evening
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span className="text-lg font-bold text-primary">[TODO: Time]</span>
                  <br />
                  Prayer Service
                </p>
                <p className="text-sm text-muted-foreground">
                  A time of prayer, devotion, and spiritual encouragement.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8 border border-accent border-opacity-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    [TODO: Church Name]<br />
                    [TODO: Street Address]<br />
                    [TODO: City, State ZIP]
                  </p>
                </div>
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our identity is rooted in biblical conviction and gospel hope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Expository Preaching
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Replace with your church's emphasis on expository preaching. Describe your commitment to verse-by-verse exposition of Scripture and systematic theology.]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Gospel-Centered Community
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Replace with your church's vision for community life. Describe discipleship, accountability, care, and the practice of New Testament church life.]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Reformed Theology
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Replace with a summary of your doctrinal commitments. Link to your Statement of Faith page for details.]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Missions & Outreach
                </h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Replace with your church's missions focus. Describe local outreach, church planting, and global mission partnerships.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Sermons Preview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent Messages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expository sermons from God&apos;s Word, available to watch or listen anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-secondary rounded overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 h-48 flex items-center justify-center">
                    <div className="text-6xl text-primary/30">▶</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-accent font-medium mb-2">[TODO: Date]</p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      [TODO: Sermon Title]
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      [TODO: Preacher Name] • [TODO: Passage]
                    </p>
                    <Link
                      href="/messages"
                      className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                    >
                      Watch Sermon →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/messages"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                View All Sermons
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Experience the Gospel
            </h2>
            <p className="text-lg font-light mb-8 opacity-95">
              We believe that Jesus Christ is Lord and Savior. Through faith in Him and His resurrection, we receive the gift of eternal life. If you&apos;d like to speak with someone about the gospel or have questions, please don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-medium rounded hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
