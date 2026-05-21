import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Scripture Banner */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <blockquote>
            <p className="font-serif text-lg md:text-xl font-light text-primary-foreground/80 italic leading-relaxed max-w-2xl">
              &ldquo;For I decided to know nothing among you except Jesus Christ and him crucified.&rdquo;
            </p>
            <cite className="mt-2 block text-[11px] font-medium tracking-[0.12em] uppercase text-accent not-italic">
              1 Corinthians 2:2
            </cite>
          </blockquote>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Church Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Truth and Life Christian Church.png"
                alt="Truth and Life Christian Church"
                width={48}
                height={48}
                className="rounded-full ring-2 ring-primary-foreground/20"
              />
              <span className="text-sm font-semibold font-serif text-primary-foreground tracking-tight">
                Truth &amp; Life<br />
                <span className="text-[11px] font-normal tracking-[0.08em] text-primary-foreground/60">Christian Church</span>
              </span>
            </div>
            <p className="text-[13px] text-primary-foreground/60 leading-relaxed mb-5">
              A Reformed Southern Baptist congregation gathered around the Word and sent into the world with the gospel of Jesus Christ.
            </p>
            <address className="not-italic text-[13px] text-primary-foreground/60 leading-relaxed">
              4821 Covenant Way<br />
              Orion, Bataan 31201
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Messages', href: '/messages' },
                { label: 'About Us', href: '/about' },
                { label: 'Ministries', href: '/ministries' },
                { label: 'Events', href: '/events' },
                { label: 'Leadership', href: '/leadership' },
                { label: 'What We Believe', href: '/faith' },
                { label: 'Plan Your Visit', href: '/visit' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">Lord&rsquo;s Day</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[13px] font-medium text-primary-foreground/80">Sunday Service</p>
                <p className="text-[13px] text-primary-foreground/55">8:00 AM</p>
              </li>
              <li>
                <p className="text-[13px] font-medium text-primary-foreground/80">Sunday School</p>
                <p className="text-[13px] text-primary-foreground/55">After Worship</p>
              </li>
              <li>
                <p className="text-[13px] font-medium text-primary-foreground/80">Prayer Meeting</p>
                <p className="text-[13px] text-primary-foreground/55">6:00 PM - 7:30 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14785550193" className="text-[13px] text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
                  (478) 555-0193
                </a>
              </li>
              <li>
                <a href="mailto:office@truthandlifechurch.org" className="text-[13px] text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors break-all">
                  office@truthandlifechurch.org
                </a>
              </li>
              <li className="pt-1">
                <p className="text-[12px] text-primary-foreground/45 leading-relaxed">
                  Office hours: Mon–Fri<br />9:00 AM – 4:00 PM
                </p>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="YouTube" className="w-8 h-8 border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground/80 hover:border-primary-foreground/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground/80 hover:border-primary-foreground/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Truth and Life Christian Church. All rights reserved.
          </p>
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary-foreground/30">
            Soli Deo Gloria
          </p>
        </div>
      </div>

    </footer>
  )
}
