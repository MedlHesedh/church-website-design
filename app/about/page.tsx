import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Us - [TODO: Church Name]',
  description: 'Learn about our church, our mission, and what we believe.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              About [TODO: Church Name]
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              We&apos;re a Reformed Southern Baptist church committed to biblical fidelity, expository preaching, and gospel-centered community.
            </p>
          </div>
        </section>

        {/* Church History */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-sm max-w-none text-foreground">
              <p className="mb-6 leading-relaxed">
                [TODO: Replace with your church's history. Share the founding story, key milestones, and how God has led your congregation. Be specific about the year founded, the founding pastor or elders, and significant events in the church's development.]
              </p>
              <p className="mb-6 leading-relaxed">
                [TODO: Add more details about your church's journey, transitions in leadership, growth, or strategic decisions that have shaped who you are today. Connect this narrative to your theological convictions and mission.]
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Mission & Vision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: State your church&apos;s mission clearly. What is your primary purpose? Example: "To glorify God by preaching His Word faithfully and equipping believers for kingdom service."]
                </p>
              </div>

              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-foreground leading-relaxed">
                  [TODO: Describe your vision for the future. Where do you want to be in 5-10 years? How do you want to impact your community?]
                </p>
              </div>
            </div>

            <div className="bg-white rounded p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">Our Values</h3>
              <ul className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="font-bold text-accent min-w-8">✓</span>
                  <span><strong>Expository Preaching:</strong> [TODO: Explain your commitment to verse-by-verse exposition and systematic theology.]</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent min-w-8">✓</span>
                  <span><strong>Biblical Discipleship:</strong> [TODO: Describe how you equip believers to grow in Christ and follow Him.]</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent min-w-8">✓</span>
                  <span><strong>Gospel Centrality:</strong> [TODO: Explain how the gospel shapes all you do.]</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent min-w-8">✓</span>
                  <span><strong>Community & Care:</strong> [TODO: Describe your commitment to congregational life and member care.]</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent min-w-8">✓</span>
                  <span><strong>Missions & Outreach:</strong> [TODO: Share your heart for reaching the lost locally and globally.]</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beliefs and Doctrine */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What We Believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary rounded p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">The Authority of Scripture</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  [TODO: Explain your church&apos;s view on the authority, reliability, and sufficiency of Scripture.]
                </p>
              </div>

              <div className="bg-secondary rounded p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Salvation Through Christ</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  [TODO: Articulate your understanding of salvation, grace, and faith. How do you understand justification and sanctification?]
                </p>
              </div>

              <div className="bg-secondary rounded p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">The Church</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  [TODO: Explain your ecclesiology. How do you understand the nature, purpose, and structure of the church?]
                </p>
              </div>

              <div className="bg-secondary rounded p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">End Times</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  [TODO: State your eschatological position and how it influences your ministry.]
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/faith"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Full Statement of Faith
              </Link>
            </div>
          </div>
        </section>

        {/* Church Covenant */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
              Church Covenant
            </h2>
            <div className="bg-primary-foreground/10 rounded p-8 border border-primary-foreground border-opacity-20">
              <p className="leading-relaxed mb-4 font-light">
                [TODO: Include your church covenant or a statement describing the commitment members make to one another. This might include promises about faithful attendance, prayer, financial support, doctrinal fidelity, and care for one another.]
              </p>
              <p className="leading-relaxed font-light">
                [TODO: Expand on specific commitments that members agree to as part of your church family.]
              </p>
            </div>
          </div>
        </section>

        {/* More Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Get to Know Us Better
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/leadership"
                className="p-8 rounded border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary mb-4">👥</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Leadership</h3>
                <p className="text-muted-foreground">
                  Meet our elders and pastoral team.
                </p>
              </Link>

              <Link
                href="/ministries"
                className="p-8 rounded border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary mb-4">🤝</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Ministries</h3>
                <p className="text-muted-foreground">
                  Learn about our various ministry areas.
                </p>
              </Link>

              <Link
                href="/messages"
                className="p-8 rounded border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-primary mb-4">📖</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Messages</h3>
                <p className="text-muted-foreground">
                  Listen to our sermons anytime.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
