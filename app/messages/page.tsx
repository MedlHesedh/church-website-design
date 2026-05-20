import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const sermons = [
  {
    id: 1,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
  {
    id: 2,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
  {
    id: 3,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
  {
    id: 4,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
  {
    id: 5,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
  {
    id: 6,
    title: '[TODO: Sermon Title]',
    date: '[TODO: Date]',
    preacher: '[TODO: Preacher Name]',
    passage: '[TODO: Bible Passage]',
    description: '[TODO: Sermon description and key points]',
    youtubeId: '[TODO: YouTube Video ID]',
  },
]

export const metadata = {
  title: 'Messages - [TODO: Church Name]',
  description: 'Watch and listen to expository sermons from [TODO: Church Name].',
}

export default function MessagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Messages & Sermons
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              Expository sermons devoted to the careful, book-by-book study of God&apos;s Word. All messages are available to watch online and can be listened to anytime.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by sermon title or passage..."
                  className="flex-1 px-4 py-3 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  className="px-4 py-3 border border-border rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="recent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </div>

            {/* Sermons Grid */}
            <div className="space-y-8">
              {sermons.map((sermon) => (
                <div key={sermon.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Video Placeholder */}
                    <div className="md:col-span-2 bg-primary/10 aspect-video md:aspect-auto flex items-center justify-center min-h-64 md:min-h-auto">
                      {sermon.youtubeId !== '[TODO: YouTube Video ID]' ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                          title={sermon.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      ) : (
                        <div className="text-center">
                          <div className="text-6xl text-primary/30 mb-4">▶</div>
                          <p className="text-muted-foreground">[TODO: Add YouTube Video ID]</p>
                        </div>
                      )}
                    </div>

                    {/* Sermon Info */}
                    <div className="p-8 flex flex-col justify-between bg-secondary">
                      <div>
                        <p className="text-sm text-accent font-medium mb-2">{sermon.date}</p>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                          {sermon.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium text-foreground block mb-1">
                            {sermon.preacher}
                          </span>
                          {sermon.passage}
                        </p>
                        <p className="text-foreground leading-relaxed text-sm">
                          {sermon.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-2 pt-6 border-t border-border">
                        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                          Watch Full Sermon
                        </button>
                        <button className="w-full px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                          Download Audio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Load More Sermons
              </button>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Sermon Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Subscribe */}
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Subscribe
                </h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our YouTube channel to get notified when new sermons are uploaded.
                </p>
                <a
                  href="https://www.youtube.com/@[TODO-CHANNEL-ID]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
                >
                  Subscribe on YouTube
                </a>
              </div>

              {/* Podcast */}
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Podcast
                </h3>
                <p className="text-muted-foreground mb-6">
                  Listen to our sermons on your favorite podcast platform.
                </p>
                <div className="space-y-2">
                  <a
                    href="[TODO: Apple Podcasts Link]"
                    className="block px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center text-sm"
                  >
                    Apple Podcasts
                  </a>
                  <a
                    href="[TODO: Spotify Link]"
                    className="block px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center text-sm"
                  >
                    Spotify
                  </a>
                </div>
              </div>

              {/* Series */}
              <div className="bg-white rounded p-8 border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Sermon Series
                </h3>
                <p className="text-muted-foreground mb-6">
                  Browse our expository sermon series through books of the Bible.
                </p>
                <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity">
                  View Series
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
