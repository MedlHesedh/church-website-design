import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'About Us — Truth and Life Christian Church',
  description: 'The story, mission, and convictions of Truth and Life Christian Church in Macon, Georgia.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Truth and Life Christian Church"
          title="About Our Church"
          subtitle="A congregation of sinners saved by sovereign grace, gathered around the Word, and sent into Macon, Georgia with the gospel."
        />

        {/* Our Story */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Our Story</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-snug">
                  Planted by Grace
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-5">
                <p className="text-[15px] text-foreground/75 leading-[1.75]">
                  Truth and Life Christian Church was planted in 2008 by a small group of believers in Macon, Georgia who were united by a shared conviction: that the ordinary means of grace — preaching, prayer, and the Lord's Supper — are sufficient for the health and growth of the local church.
                </p>
                <p className="text-[15px] text-foreground/75 leading-[1.75]">
                  Beginning with fifteen members in a rented school gymnasium, the congregation covenanted together under the Second London Baptist Confession of Faith, committed to week-by-week exposition of Scripture and the pastoral model of plural elder leadership described in the New Testament.
                </p>
                <p className="text-[15px] text-foreground/75 leading-[1.75]">
                  In 2015, the church called Rev. James Whitfield as its second senior pastor. Under his ministry the congregation has grown steadily, welcomed dozens of new members through baptism and transfer, and established several ministry partnerships with IMB missionaries overseas. In 2019 the church moved to its current location on Covenant Way.
                </p>
                <p className="text-[15px] text-foreground/75 leading-[1.75]">
                  We are a plain church. We do not aspire to be large, famous, or culturally relevant. We aspire to be faithful — to preach the whole counsel of God, to love one another in deed and in truth, and to commend the gospel of Christ to every person God sovereignly brings across our path.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border mb-0">
              <div className="bg-card border-b md:border-b-0 md:border-r border-border p-9">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">Mission</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Why We Exist</h3>
                <p className="text-[15px] text-foreground/70 leading-relaxed">
                  To glorify God by proclaiming the whole counsel of Scripture, making disciples of Jesus Christ, and equipping believers to live as faithful witnesses in Macon and to the ends of the earth.
                </p>
              </div>
              <div className="bg-card p-9">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">Vision</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Where We&rsquo;re Headed</h3>
                <p className="text-[15px] text-foreground/70 leading-relaxed">
                  A doctrinally grounded, multigenerational congregation deeply embedded in the city of Macon — known for rigorous biblical teaching, genuine gospel love, and the consistent proclamation of Christ to our neighbors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Our Commitments</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              What Shapes Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              {[
                {
                  label: 'Expository Preaching',
                  body: 'Scripture is sufficient. We do not supplement the Word with cultural relevance, personality, or novelty. Every sermon is a careful, verse-by-verse exposition of a biblical text — letting the text set the agenda, the structure, and the application.',
                },
                {
                  label: 'Reformed Theology',
                  body: 'We confess the doctrines of grace: unconditional election, particular atonement, effectual calling, and the perseverance of the saints. We hold these doctrines not as party distinctives but as the plain teaching of Scripture that magnifies the glory of God in salvation.',
                },
                {
                  label: 'Gospel-Centered Community',
                  body: 'Church membership is a covenant. We practice meaningful membership, church discipline, mutual accountability, and the regular administration of the Lord\'s Supper. We believe the local church — not the parachurch or the podcast — is God\'s primary instrument for making disciples.',
                },
                {
                  label: 'Biblical Worship',
                  body: 'Worship is regulated by Scripture. We sing psalms and hymns, observe baptism and the Lord\'s Supper, hear the Word preached, and pray — not because we find these things culturally compelling, but because God has appointed them as the means by which he meets his people.',
                },
                {
                  label: 'Pastoral Care',
                  body: 'The elders are shepherds, not executives. They know their people by name, visit the sick, instruct the inquiring, counsel the troubled, and confront the wayward. Care of souls is not delegated to a department; it is the work of the whole body under the oversight of the elders.',
                },
                {
                  label: 'Missions & Evangelism',
                  body: 'We are a sending church. We support missionaries, pray for unreached peoples, and work to reach our own neighborhood in Macon with the gospel. We want every member to know how to share their faith and to understand the global context of the Great Commission.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border-b md:border-r border-border p-7">
                  <div className="w-5 h-0.5 bg-accent mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.label}</h3>
                  <p className="text-[14px] text-foreground/65 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Church Covenant */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Membership</p>
                <h2 className="font-serif text-3xl font-light text-foreground leading-snug">
                  Our Church Covenant
                </h2>
              </div>
              <div className="lg:col-span-2 border-l-2 border-accent pl-8">
                <p className="font-serif text-[16px] text-foreground/80 leading-[1.8] italic">
                  Having been led, as we believe, by the Spirit of God, to receive the Lord Jesus Christ as our Savior, and on the profession of our faith, having been baptized in the name of the Father, and of the Son, and of the Holy Spirit, we do now in the presence of God, angels and this assembly, most solemnly and joyfully enter into covenant with one another as one body in Christ.
                </p>
                <p className="mt-5 font-serif text-[16px] text-foreground/80 leading-[1.8] italic">
                  We engage, therefore, by the aid of the Holy Spirit, to walk together in Christian love; to strive for the advancement of this church in knowledge, holiness and comfort; to promote its prosperity and spirituality; to sustain its worship, ordinances, discipline and doctrines; to give it a sacred preeminence over all institutions of human origin...
                </p>
                <p className="mt-5 text-[12px] text-muted-foreground">
                  — Adapted from the 1833 New Hampshire Baptist Church Covenant
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">Learn More</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-10 max-w-md leading-snug">
              Continue Exploring
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {[
                { href: '/leadership', label: 'Leadership', title: 'Meet Our Pastors & Elders', body: 'Get to know the men who shepherd the congregation.' },
                { href: '/faith', label: 'Doctrine', title: 'Our Statement of Faith', body: 'Read our doctrinal commitments article by article.' },
                { href: '/messages', label: 'Sermons', title: 'Listen to Messages', body: 'Hear the Word preached through our full sermon archive.' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group bg-card border-b md:border-b-0 md:border-r border-border p-7 hover:bg-secondary transition-colors flex flex-col"
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-3">{item.label}</p>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-foreground/60 leading-relaxed flex-1">{item.body}</p>
                  <span className="mt-5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
