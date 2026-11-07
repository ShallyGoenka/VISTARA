import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Instagram,
  Linkedin,
  Youtube,
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Ticket
} from 'lucide-react';
import { validateEmail } from '../utils/validators';
import { useRegistrations } from '../context/RegistrationsContext';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const { openDrawer } = useRegistrations();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const result = validateEmail(newsletterEmail);
    if (!result.isValid) {
      setNewsletterError(result.error);
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="border-t border-sand dark:border-white/10 bg-white/70 dark:bg-dark-card/60 backdrop-blur-sm pt-16 pb-12 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-sand/50 dark:border-white/10">
          {/* Brand Col (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={() => {
                if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block group mb-3"
            >
              <span className="font-display text-2xl tracking-[0.25em] text-charcoal dark:text-dark-text group-hover:text-burgundy dark:group-hover:text-burgundy-dark transition-colors">
                VISTARA
              </span>
            </Link>
            <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed max-w-sm mb-6">
              Discover and book memorable events, live music, workshops, and gatherings across India.
            </p>

            {/* Social Icons with subtle hover */}
            <div className="flex items-center gap-3" aria-label="Social media channels">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-sand dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark hover:border-burgundy/40 transition-colors"
                aria-label="Vistara on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-sand dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark hover:border-burgundy/40 transition-colors"
                aria-label="Vistara on X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-sand dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark hover:border-burgundy/40 transition-colors"
                aria-label="Vistara on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-sand dark:border-white/10 flex items-center justify-center text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark hover:border-burgundy/40 transition-colors"
                aria-label="Vistara on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm uppercase tracking-wider text-charcoal dark:text-dark-text font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal/70 dark:text-dark-muted">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('discover')}
                  className="hover:text-burgundy dark:hover:text-burgundy-dark transition-colors"
                >
                  Discover Events
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('categories')}
                  className="hover:text-burgundy dark:hover:text-burgundy-dark transition-colors"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('how-it-works')}
                  className="hover:text-burgundy dark:hover:text-burgundy-dark transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className="hover:text-burgundy dark:hover:text-burgundy-dark transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openDrawer}
                  className="inline-flex items-center gap-1.5 hover:text-burgundy dark:hover:text-burgundy-dark transition-colors"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>My Registrations</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-charcoal dark:text-dark-text font-semibold mb-4">
              Contact & Help
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-charcoal/70 dark:text-dark-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-burgundy dark:text-burgundy-dark flex-shrink-0 mt-0.5" />
                <span>12th Main Road, Indiranagar, Bengaluru, KA 560038</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-burgundy dark:text-burgundy-dark flex-shrink-0" />
                <a href="mailto:concierge@vistara.events" className="hover:underline">
                  concierge@vistara.events
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-burgundy dark:text-burgundy-dark flex-shrink-0" />
                <span>+91 (80) 4920-8800</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Input (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-charcoal dark:text-dark-text font-semibold mb-2">
              Stay in the Loop
            </h4>
            <p className="text-xs text-charcoal/70 dark:text-dark-muted mb-4 leading-relaxed">
              Get a weekly email with handpicked events and upcoming workshops in your city.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thanks for subscribing! We'll keep you posted on great upcoming events.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Enter your email"
                    aria-label="Newsletter email address"
                    className="w-full px-3.5 py-2.5 pr-10 text-xs bg-ivory/50 dark:bg-dark-bg/60 border border-sand dark:border-white/10 rounded-lg text-charcoal dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-burgundy"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-burgundy dark:text-burgundy-dark hover:text-[#5F3037] focus:outline-none"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-red-600 dark:text-red-400">
                    {newsletterError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/60 dark:text-dark-muted">
          <p>© 2026 Vistara – Moments That Matter. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
