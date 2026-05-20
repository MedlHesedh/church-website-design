import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">[TODO: Church Name]</h3>
            <p className="text-sm opacity-90 mb-4">
              A church committed to expository preaching, biblical discipleship, and gospel-centered community.
            </p>
            <p className="text-sm opacity-90">
              <strong>Location:</strong> [TODO: Address]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/messages" className="hover:underline">
                  Messages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:underline">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-bold mb-4">Service Times</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <strong>Sunday Morning:</strong>
                <br />
                [TODO: Time]
              </li>
              <li>
                <strong>Sunday Evening:</strong>
                <br />
                [TODO: Time]
              </li>
              <li>
                <strong>Wednesday Evening:</strong>
                <br />
                [TODO: Time]
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <strong>Phone:</strong>
                <br />
                [TODO: Phone Number]
              </li>
              <li>
                <strong>Email:</strong>
                <br />
                [TODO: Email Address]
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} [TODO: Church Name]. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <a
              href="https://www.youtube.com/@[TODO-CHANNEL-ID]"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
