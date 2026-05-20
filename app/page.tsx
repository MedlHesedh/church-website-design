import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const recentSermons = [
  {
    date: 'May 18, 2025',
    series: 'Gospel of John',
    title: 'The Eternal Word Made Flesh',
    preacher: 'Pastor James Whitfield',
    passage: 'John 1:1–18',
  },
  {
    date: 'May 11, 2025',
    series: 'Romans',
    title: 'Justified by Faith Alone',
    preacher: 'Pastor James Whitfield',
    passage: 'Romans 3:21–26',
  },
  {
    date: 'May 4, 2025',
    series: 'Ephesians',
    title: 'Elected in Love Before the Foundation of the World',
    preacher: 'Elder Thomas Garrett',
    passage: 'Ephesians 1:3–14',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-36">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-accent mb-6">
              Truth &amp; Life Christian Church · Macon, Georgia
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] mb-8 max-w-4xl">
              Gathered Around the Word.{' '}
              <span className="italic">Sent Into the World.</span>
            </h1>
            <p className="text-base md:text-lg font-light text-primary-foreground/70 max-w-xl leading-relaxed mb-5">
              A Reformed Southern Baptist congregation devoted to the expository preaching of Scripture, biblical discipleship, and gospel-centered community.
            </p>
            <blockquote className="border-l-2 border-accent pl-4 mb-10">
              <p className="text-sm text-primary-foreground/55 italic">
                &ldquo;For I decided to know nothing among you except Jesus Christ and him crucified.&rdquo; — 1 Corinthians 2:2
              </p>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/messages"
                className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
              >
                Listen to Sermons
              </Link>
            </div>
          </div>
        </section>

        {/* ── Service Times ────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-xs mb-10">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Lord&rsquo;s Day</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-snug">
                When We Gather
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-card">
              {[
                { label: 'Sunday School', time: '9:15', period: 'AM', note: 'All ages · Classrooms' },
                { label: 'Morning Worship', time: '8:00', period: 'AM', note: 'Main Service · Sanctuary' },
                { label: 'Prayer Meeting', time: '6:00', period: 'PM', note: 'Bible Study & Prayer' },
                // { label: 'Wednesday Prayer', time: '7:00', period: 'PM', note: 'Corporate Prayer Meeting' },
              ].map((service, i) => (
                <div key={i} className="p-8 border-b sm:border-b-0 sm:border-r border-border last:border-0">
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">{service.label}</p>
                  <p className="font-serif text-4xl font-light text-foreground mb-1">
                    {service.time} <span className="text-xl text-muted-foreground font-normal">{service.period}</span>
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-2">{service.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card border border-border px-7 py-5">
              <div>
                <p className="text-sm font-medium text-foreground">4821 Covenant Way, Macon, Georgia 31201</p>
                <p className="text-[13px] text-muted-foreground mt-0.5">Arrive 10–15 minutes early to find your seat.</p>
              </div>
              <Link
                href="/visit"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap"
              >
                Get Directions &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Who We Are ───────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Our Convictions</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-snug mb-6">
                  Rooted in Scripture.<br />Reformed in Doctrine.
                </h2>
                <p className="text-[15px] text-foreground/75 leading-relaxed mb-5">
                  Truth and Life Christian Church is a congregation of sinners saved by sovereign grace. We hold to the historic Baptist confessional tradition, affirming the Second London Baptist Confession of 1689 as a faithful summary of our beliefs.
                </p>
                <p className="text-[15px] text-foreground/75 leading-relaxed mb-8">
                  Our worship is ordered by Scripture, our preaching is expository, and our discipleship is modeled after the pattern of the New Testament church. We believe the gospel is the power of God for salvation, and we make no apology for preaching it plainly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    About Our Church
                  </Link>
                  <Link
                    href="/faith"
                    className="inline-flex items-center justify-center px-6 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    What We Believe
                  </Link>
                </div>
              </div>

              <div className="space-y-0 border border-border">
                {[
                  {
                    label: 'Expository Preaching',
                    body: 'Every sermon is a careful, verse-by-verse exposition of a biblical text. We believe Scripture interprets Scripture, and that faithful preaching lets the text drive the message.',
                  },
                  {
                    label: 'Reformed Theology',
                    body: 'We confess the doctrines of grace — the sovereignty of God in election, particular atonement, effectual calling, and the perseverance of the saints — as taught throughout Scripture.',
                  },
                  {
                    label: 'Gospel-Centered Community',
                    body: 'Church membership is a covenant relationship. We practice mutual accountability, corporate prayer, and the care of one another\'s souls in the pattern of the New Testament.',
                  },
                  {
                    label: 'Missions & Outreach',
                    body: 'We give, send, and go. We support international missionaries through the IMB and labor to reach our own neighbors in Macon with the saving message of Christ.',
                  },
                ].map((item, i) => (
                  <div key={i} className="px-7 py-6 border-b border-border last:border-b-0">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                    <p className="text-[14px] text-foreground/65 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent Sermons ────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">From the Pulpit</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-snug">
                  Recent Messages
                </h2>
              </div>
              <Link href="/messages" className="text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap">
                View All Sermons &rarr;
              </Link>
            </div>

            <div className="space-y-0 border border-border bg-card">
              {recentSermons.map((sermon, i) => (
                <article key={i} className="group border-b border-border last:border-b-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Date + Series marker */}
                    <div className="sm:w-48 px-7 py-6 border-b sm:border-b-0 sm:border-r border-border bg-secondary/60 flex sm:flex-col justify-between sm:justify-start gap-2 flex-shrink-0">
                      <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent">{sermon.series}</p>
                      <p className="text-[12px] text-muted-foreground">{sermon.date}</p>
                    </div>
                    {/* Content */}
                    <div className="flex-1 px-7 py-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                        {sermon.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground">
                        <span className="font-medium text-foreground/80">{sermon.preacher}</span>
                        {' · '}
                        {sermon.passage}
                      </p>
                    </div>
                    {/* Watch link */}
                    <div className="px-7 py-6 flex items-center justify-start sm:justify-end flex-shrink-0">
                      <Link href="/messages" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-accent transition-colors">
                        <span className="w-6 h-6 bg-primary/10 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-primary fill-current">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                        Watch
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gospel CTA ───────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-5">New to the Church?</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] mb-6">
                We&rsquo;d love to<br />
                <span className="italic">welcome you.</span>
              </h2>
              <p className="text-base font-light text-primary-foreground/70 leading-relaxed mb-4 max-w-xl">
                Whether you are a longtime believer, a seeker with honest questions, or someone curious about the Reformed Baptist tradition — there is a place for you at Truth and Life.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mb-10">
                <p className="text-[13px] text-primary-foreground/50 italic">
                  &ldquo;So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God.&rdquo; — Ephesians 2:19
                </p>
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
                >
                  Plan Your First Visit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
                >
                  Ask Us a Question
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
