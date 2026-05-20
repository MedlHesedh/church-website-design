import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Statement of Faith - [TODO: Church Name]',
  description: 'Our doctrinal statement and the biblical truths we embrace as a congregation.',
}

export default function FaithPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Statement of Faith
            </h1>
            <p className="text-lg font-light opacity-95 max-w-2xl">
              We are committed to the doctrines of grace and the truthfulness of Scripture.
            </p>
          </div>
        </section>

        {/* Statement Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-sm max-w-none text-foreground mb-12">
              <h2 className="font-serif text-3xl font-bold mb-6">The Holy Scriptures</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Replace with your church&apos;s doctrine on Scripture. Address inspiration, inerrancy, infallibility, authority, and sufficiency. Example: "We believe that the Bible, in the original languages, is the infallible and inerrant Word of God, fully authoritative in all matters of faith and practice."]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">God</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Articulate your understanding of God&apos;s nature, attributes, and character. Include: The Trinity, God&apos;s sovereignty, omniscience, omnipotence, and other relevant attributes. Example: "We believe in one God eternally existing in three persons: God the Father, God the Son, and God the Holy Spirit."]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">God the Father</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Explain your doctrine of God the Father, His work in creation and providence.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">God the Son - Jesus Christ</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Present your Christology. Address: Incarnation, virgin birth, sinlessness, death, resurrection, ascension, current ministry, and return. Example: "We believe Jesus Christ is the eternal Son of God, born of a virgin, died for our sins, rose bodily from the dead, and ascended to the right hand of the Father."]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">God the Holy Spirit</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Explain the nature and work of the Holy Spirit, including regeneration, indwelling, sanctification, and empowerment for ministry.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Creation and Humanity</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Address your understanding of creation, the imago Dei, and man&apos;s purpose. Include your view on origins if relevant to your theology.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Sin and the Fall</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Explain your doctrine of sin. Address: Original sin, the universal nature of sin, the consequences of sin, and depravity.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Salvation and Redemption</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Present your soteriology comprehensively. Address: Atonement, substitution, justification, imputation, sanctification, glorification, grace, and faith. Clarify your position on predestination/election if relevant.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">The Church</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Define the church. Address: Universal vs. local church, membership, discipline, ordinances (baptism and the Lord&apos;s Supper), spiritual gifts, and the mission of the church.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Baptism and the Lord's Supper</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Explain your practice of and theology regarding the ordinances. For Baptist churches: believer&apos;s baptism, baptism by immersion, appropriate recipients, and significance.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Christian Life and Conduct</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Address sanctification, the role of the law, Christian ethics, and how believers should live in light of the gospel.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Last Things (Eschatology)</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: State your eschatological position clearly. Address: The rapture (if relevant), tribulation (view held), millennium (premillennial, amillennial, or postmillennial?), second coming, final judgment, heaven, and hell.]
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-10">Religious Liberty</h2>
              <p className="mb-6 leading-relaxed">
                [TODO: Address your church&apos;s stance on religious liberty, freedom of conscience, and separation of church and state if relevant.]
              </p>
            </div>

            <div className="bg-secondary rounded p-8 border border-border mt-12">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Traditional Confessions
              </h3>
              <p className="text-foreground mb-4 leading-relaxed">
                [TODO: Mention if your church affirms any traditional confessions or summaries of faith, such as:
                - The Nicene Creed
                - The Apostles' Creed
                - The Second London Baptist Confession (1689)
                - The Heidelberg Catechism
                - Westminster Shorter/Larger Catechism
                - Or any other documents your church formally endorses.]
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Questions About Our Faith?
            </h2>
            <p className="text-lg font-light opacity-95 mb-8 max-w-2xl mx-auto">
              We&apos;d love to discuss our beliefs with you. Please reach out to speak with one of our pastoral staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-medium rounded hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
