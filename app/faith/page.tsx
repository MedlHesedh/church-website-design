import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'What We Believe — Truth and Life Christian Church',
  description: 'The doctrinal convictions of Truth and Life Christian Church, a Reformed Southern Baptist congregation in Macon, Georgia.',
}

const articles = [
  {
    number: 'I',
    title: 'The Holy Scriptures',
    reference: '2 Tim. 3:16–17 · 2 Pet. 1:19–21',
    body: 'We believe the Holy Scriptures of the Old and New Testaments are the verbally inspired, inerrant, and infallible Word of God — the supreme and final authority in all matters of faith and practice. The Bible, in the sixty-six canonical books, was written by human authors under the superintending work of the Holy Spirit such that the words themselves are the very words of God. Scripture alone (sola Scriptura) is the rule for faith and life.',
  },
  {
    number: 'II',
    title: 'The Triune God',
    reference: 'Deut. 6:4 · Matt. 28:19 · 2 Cor. 13:14',
    body: 'We believe in one God, eternally existing in three co-equal, co-eternal persons — Father, Son, and Holy Spirit — each fully God, sharing one divine nature. God is infinite in holiness, knowledge, power, and love. He is the Creator and Sustainer of all things, and he governs all of history according to the counsel of his own will for his own glory.',
  },
  {
    number: 'III',
    title: 'God the Son — Jesus Christ',
    reference: 'John 1:1–18 · Phil. 2:6–11 · Heb. 1:1–3',
    body: 'We believe that Jesus Christ is the eternal Son of God, who took on human flesh through the virgin birth, lived a perfectly sinless life, accomplished redemption through his substitutionary death on the cross, rose bodily from the dead on the third day, ascended to the right hand of the Father, and will return visibly and bodily to judge the living and the dead. He is the only Mediator between God and man.',
  },
  {
    number: 'IV',
    title: 'The Holy Spirit',
    reference: 'John 14–16 · Rom. 8:1–27 · 1 Cor. 12',
    body: 'We believe the Holy Spirit is the third person of the Trinity who convicts the world of sin, regenerates the dead, applies redemption to the elect, indwells every believer, progressively sanctifies God\'s people, and empowers the church for ministry and witness. The Spirit who inspired Scripture does not speak new revelation beyond Scripture but illumines believers to understand and apply the Word of God.',
  },
  {
    number: 'V',
    title: 'Creation and Humanity',
    reference: 'Gen. 1–2 · Ps. 8 · Acts 17:24–28',
    body: 'We believe God created the heavens and the earth in the beginning, directly and supernaturally, according to the plain narrative of Genesis. Human beings — male and female — were made uniquely in the image of God (imago Dei), endowed with dignity, rationality, and moral responsibility. Marriage is the covenant union of one man and one woman, established by God at creation.',
  },
  {
    number: 'VI',
    title: 'Sin and Total Depravity',
    reference: 'Gen. 3 · Rom. 3:9–20 · Eph. 2:1–3',
    body: "We believe that in Adam's fall, the entire human race fell with him — inheriting both the guilt of Adam's sin and a corrupted nature that is wholly inclined away from God. Apart from sovereign grace, human beings are spiritually dead, unable to understand or choose the things of God. We affirm total depravity: every faculty of fallen humanity is affected by sin, and no one can come to God by his own will or merit.",
  },
  {
    number: 'VII',
    title: 'Salvation and the Doctrines of Grace',
    reference: 'John 6:37–44 · Rom. 8:28–30 · Eph. 1:3–14',
    body: 'We believe that salvation is by grace alone, through faith alone, in Christ alone — to the glory of God alone. We affirm the doctrines historically summarized as the "five points of Calvinism": Total Depravity, Unconditional Election, Particular Redemption, Effectual Calling, and the Perseverance of the Saints. God, according to his sovereign mercy and for his own glory, chose an innumerable company in Christ before the foundation of the world; Christ died as a propitiatory substitute for the elect; the Spirit infallibly regenerates and calls the elect to faith; and God preserves all the redeemed to final salvation.',
  },
  {
    number: 'VIII',
    title: 'Justification and Sanctification',
    reference: 'Rom. 3:21–26 · Gal. 2:16 · 2 Cor. 3:18',
    body: 'We believe that justification is entirely a forensic act in which God declares the believing sinner righteous on the basis of Christ\'s imputed righteousness, received through faith alone, apart from any works. Justification is not progressive; it is complete and permanent. We also believe that sanctification — the ongoing transformation of the believer into the likeness of Christ — is the necessary fruit of justification, accomplished by the Spirit through the means of grace.',
  },
  {
    number: 'IX',
    title: 'The Church',
    reference: 'Matt. 16:18 · Acts 2 · Eph. 4:1–16',
    body: 'We believe in the universal church — the whole company of the redeemed throughout history — and in the local church as a visible, covenant assembly of baptized believers who meet together regularly under the preaching of the Word, the administration of the ordinances, and the practice of church discipline. We hold to congregational polity with plural elder leadership and the office of deacon.',
  },
  {
    number: 'X',
    title: 'Baptism and the Lord\'s Supper',
    reference: 'Matt. 28:19 · 1 Cor. 11:23–26 · Rom. 6:3–4',
    body: 'We believe that baptism by immersion of professing believers is an ordinance of Christ, commanded to be observed by all who repent and believe the gospel. It is a public declaration of union with Christ and entrance into the covenant community of the church. The Lord\'s Supper is an ordinance to be observed by the local church as a memorial and proclamation of Christ\'s death until he comes, received by those who have examined themselves and are in good standing with a local church.',
  },
  {
    number: 'XI',
    title: 'Last Things',
    reference: 'John 5:28–29 · 1 Cor. 15 · Rev. 20–22',
    body: 'We believe in the bodily resurrection of all the dead — the redeemed to eternal life, and the unbelieving to eternal judgment. Jesus Christ will return bodily and visibly to establish his final kingdom, raise the dead, and judge all people. We affirm the eternal conscious blessedness of the redeemed in the new heavens and new earth, and the eternal conscious punishment of the impenitent. We hold a historic premillennial position with humility toward brothers of different eschatological conviction.',
  },
]

export default function FaithPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHeader
          label="Doctrine"
          title="What We Believe"
          subtitle="We hold to the Second London Baptist Confession of 1689 as a faithful summary of our doctrine. The following articles offer a brief account of our convictions."
        />

        {/* Confessional Note */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className="text-[13px] text-foreground/65 leading-relaxed max-w-2xl">
                We subscribe to the <strong className="text-foreground/85 font-medium">Second London Baptist Confession of Faith (1689)</strong> as our formal doctrinal standard, along with the <strong className="text-foreground/85 font-medium">1689 Baptist Catechism</strong> for instruction.
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="https://www.1689.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border text-foreground text-[12px] font-medium hover:bg-muted transition-colors whitespace-nowrap"
                >
                  Read the 1689 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Articles of Faith */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="divide-y divide-border">
              {articles.map((article) => (
                <article key={article.number} className="py-12 first:pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
                    {/* Left: article number + title */}
                    <div className="lg:col-span-1">
                      <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-2">
                        Article {article.number}
                      </p>
                      <h2 className="font-serif text-xl font-semibold text-foreground leading-snug mb-3">
                        {article.title}
                      </h2>
                      <p className="text-[11px] text-muted-foreground font-medium leading-relaxed border border-border/60 px-2.5 py-1.5 inline-block">
                        {article.reference}
                      </p>
                    </div>
                    {/* Right: body */}
                    <div className="lg:col-span-3">
                      <p className="text-[15px] text-foreground/75 leading-[1.75]">
                        {article.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-4">Questions?</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] mb-6">
                We welcome<br />
                <span className="italic">honest inquiry.</span>
              </h2>
              <p className="text-base font-light text-primary-foreground/70 leading-relaxed mb-8 max-w-lg">
                Doctrine matters because truth matters. If you have questions about any of our beliefs — whether you are a skeptic, a seeker, or a believer seeking clarity — we would love to talk with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
                >
                  Contact a Pastor
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors"
                >
                  About Our Church
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
