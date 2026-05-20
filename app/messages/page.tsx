import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Messages — Truth and Life Christian Church',
  description: 'Expository sermons from Truth and Life Christian Church in Macon, Georgia.',
}

const sermons = [
  {
    id: 1,
    date: 'May 18, 2025',
    series: 'Gospel of John',
    title: 'The Eternal Word Made Flesh',
    preacher: 'Pastor James Whitfield',
    passage: 'John 1:1–18',
    description:
      "In the majestic prologue of John's Gospel, the apostle declares the eternal pre-existence of the Son and the mystery of the incarnation. This sermon examines the Logos doctrine, the tabernacling of God among men, and what it means that grace and truth came through Jesus Christ.",
    youtubeId: '',
  },
  {
    id: 2,
    date: 'May 11, 2025',
    series: 'Romans',
    title: 'Justified by Faith Alone',
    preacher: 'Pastor James Whitfield',
    passage: 'Romans 3:21–26',
    description:
      "Paul's great declaration in Romans 3 is the hinge of the Reformation and the heart of the gospel: a righteousness from God, apart from the law, received through faith in Jesus Christ. This sermon explains justification, propitiation, and why sola fide is not a fine point but the very core of Christianity.",
    youtubeId: '',
  },
  {
    id: 3,
    date: 'May 4, 2025',
    series: 'Ephesians',
    title: 'Elected in Love Before the Foundation of the World',
    preacher: 'Elder Thomas Garrett',
    passage: 'Ephesians 1:3–14',
    description:
      'The opening doxology of Ephesians traces every spiritual blessing back to its ultimate source: the sovereign, gracious electing love of the Father, who chose his people in Christ before creation. This sermon unfolds the doctrine of election and its pastoral fruits — assurance, humility, and doxology.',
    youtubeId: '',
  },
  {
    id: 4,
    date: 'April 27, 2025',
    series: 'Acts',
    title: 'The Means of Grace: Word, Prayer, and Fellowship',
    preacher: 'Pastor James Whitfield',
    passage: 'Acts 2:42–47',
    description:
      "The early church in Jerusalem devoted themselves to four marks: the apostles' teaching, fellowship, the breaking of bread, and prayer. This sermon calls us to recover a high view of the ordinary means of grace and to resist the age's addiction to novelty.",
    youtubeId: '',
  },
  {
    id: 5,
    date: 'April 20, 2025',
    series: 'Ephesians',
    title: 'Dead in Trespasses and Sins',
    preacher: 'Pastor James Whitfield',
    passage: 'Ephesians 2:1–3',
    description:
      'Before grace, Paul says, we were dead. Not sick, not wounded — dead. This sermon examines the doctrine of total depravity: what it means that human beings are spiritually dead in sin, enslaved to the world, the flesh, and the devil, and why this makes divine grace so astonishing.',
    youtubeId: '',
  },
  {
    id: 6,
    date: 'April 13, 2025',
    series: 'Hebrews',
    title: 'Christ Our Great High Priest',
    preacher: 'Elder Thomas Garrett',
    passage: 'Hebrews 4:14–16',
    description:
      "We have a great high priest who has passed through the heavens — one who sympathizes with our weaknesses because he was tempted in every way we are, yet without sin. This sermon draws believers to the throne of grace with confidence, rooted in the perfections of Christ's priestly work.",
    youtubeId: '',
  },
]

export default function MessagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="From the Pulpit"
          title="Messages & Sermons"
          subtitle="Verse-by-verse exposition of Scripture, available to watch or listen anytime. Every message is devoted to letting the text speak."
        />

        {/* Sermons List */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">

            {/* Search / Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <input
                type="search"
                placeholder="Search by title, passage, or preacher…"
                className="flex-1 px-4 py-2.5 border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <select className="px-4 py-2.5 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                <option>All Series</option>
                <option>Gospel of John</option>
                <option>Romans</option>
                <option>Ephesians</option>
                <option>Acts</option>
                <option>Hebrews</option>
              </select>
              <select className="px-4 py-2.5 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                <option>Most Recent</option>
                <option>Oldest First</option>
              </select>
            </div>

            {/* Sermon Cards */}
            <div className="space-y-0 border border-border">
              {sermons.map((sermon) => (
                <article key={sermon.id} className="group bg-card border-b border-border last:border-b-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Video Area */}
                    <div className="md:w-72 lg:w-80 flex-shrink-0 bg-secondary border-b md:border-b-0 md:border-r border-border">
                      {sermon.youtubeId ? (
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                            title={sermon.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video flex flex-col items-center justify-center text-center px-6">
                          <div className="w-12 h-12 bg-primary/8 border border-border flex items-center justify-center mb-3">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/40 fill-current">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="text-[12px] text-muted-foreground">Video coming soon</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1 px-7 py-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent border border-accent/25 px-2 py-0.5">
                            {sermon.series}
                          </span>
                          <span className="text-[12px] text-muted-foreground">{sermon.date}</span>
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                          {sermon.title}
                        </h2>
                        <p className="text-[13px] text-muted-foreground mb-4">
                          <span className="font-medium text-foreground/75">{sermon.preacher}</span>
                          {' · '}
                          <span className="italic">{sermon.passage}</span>
                        </p>
                        <p className="text-[14px] text-foreground/65 leading-relaxed">
                          {sermon.description}
                        </p>
                      </div>
                      <div className="px-7 py-5 border-t border-border flex flex-wrap gap-2">
                        <button className="px-5 py-2 bg-primary text-primary-foreground text-[13px] font-medium tracking-wide hover:bg-primary/90 transition-colors">
                          Watch Sermon
                        </button>
                        <button className="px-5 py-2 border border-border text-foreground text-[13px] font-medium hover:bg-secondary transition-colors">
                          Download Audio
                        </button>
                        <button className="px-5 py-2 border border-border text-foreground text-[13px] font-medium hover:bg-secondary transition-colors">
                          Sermon Notes
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-3 border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                Load More Sermons
              </button>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Stay Connected</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Never Miss a Sermon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border bg-card">
              {[
                {
                  label: 'YouTube',
                  title: 'Subscribe on YouTube',
                  body: 'Every sermon is uploaded to our YouTube channel. Subscribe for notifications when new messages go live.',
                  cta: 'Go to Channel',
                  href: '#',
                },
                {
                  label: 'Podcast',
                  title: 'Audio Podcast',
                  body: 'Listen wherever you get your podcasts — Apple Podcasts, Spotify, and other major platforms.',
                  cta: 'Find on Podcast Apps',
                  href: '#',
                },
                {
                  label: 'Archive',
                  title: 'Full Sermon Archive',
                  body: 'Browse our complete library of messages organized by series, book of the Bible, or preacher.',
                  cta: 'Browse Archive',
                  href: '#',
                },
              ].map((item, i) => (
                <div key={i} className="p-7 border-b md:border-b-0 md:border-r border-border last:border-0">
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">{item.label}</p>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-[14px] text-foreground/65 leading-relaxed mb-6">{item.body}</p>
                  <a href={item.href} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    {item.cta} &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
