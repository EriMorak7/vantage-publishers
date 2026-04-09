import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-screen-2xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-headline text-2xl font-bold italic mb-4">
              Vantage Publishers
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Elevating educational standards through premium publishing and
              curated content for the modern scholar.
            </p>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-400 hover:text-brand-amber transition-colors cursor-pointer">
                language
              </span>
              <span className="material-symbols-outlined text-slate-400 hover:text-brand-amber transition-colors cursor-pointer">
                mail
              </span>
              <span className="material-symbols-outlined text-slate-400 hover:text-brand-amber transition-colors cursor-pointer">
                share
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-widest text-brand-amber mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Catalogue', href: '/shop' },
                { label: 'Our Authors', href: '/editorial' },
                { label: 'Teacher Resources', href: '#' },
                { label: 'Academic Blog', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-bebas text-lg tracking-widest text-brand-amber mb-6">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-3">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Shipping Info',
              ].map((text) => (
                <li key={text}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bebas text-lg tracking-widest text-brand-amber mb-6">
              NEWSLETTER
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to receive updates on new titles and educational research.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 border-none rounded-l-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-amber"
                id="footer-newsletter-email"
              />
              <button className="bg-brand-amber text-deep-navy px-4 rounded-r-lg hover:bg-amber-400 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 Vantage Publishers. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-xs">
            <span>Lagos, Nigeria</span>
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
