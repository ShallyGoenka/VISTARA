import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Ticket, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useRegistrations } from '../context/RegistrationsContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { registrationCount, openDrawer } = useRegistrations();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Handle scroll detection for background transition & active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      if (isHome) {
        const sections = ['about', 'categories', 'discover'];
        let current = '';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If top of section is near or above middle of screen
            if (rect.top <= 200) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Navigate & scroll helper
  const handleNavClick = (sectionId, focusSearch = false) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      // Delay slightly for route transition then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          if (focusSearch) {
            setTimeout(() => {
              const input = document.getElementById('event-search-input');
              input?.focus();
            }, 400);
          }
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (focusSearch) {
          setTimeout(() => {
            const input = document.getElementById('event-search-input');
            input?.focus();
          }, 350);
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-sand dark:border-white/10 shadow-soft-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: VISTARA Wordmark */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none"
            aria-label="Vistara Homepage"
          >
            <span className="font-display text-2xl sm:text-3xl tracking-[0.25em] text-charcoal dark:text-dark-text group-hover:text-burgundy dark:group-hover:text-burgundy-dark transition-colors duration-200">
              VISTARA
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-charcoal/50 dark:text-dark-muted font-sans -mt-0.5">
              Moments That Matter
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('discover')}
              className={`text-sm tracking-wide transition-colors duration-200 py-1 ${
                activeSection === 'discover'
                  ? 'text-burgundy dark:text-burgundy-dark font-medium border-b-2 border-burgundy dark:border-burgundy-dark'
                  : 'text-charcoal/80 dark:text-dark-text/80 hover:text-charcoal dark:hover:text-white'
              }`}
            >
              Discover
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className={`text-sm tracking-wide transition-colors duration-200 py-1 ${
                activeSection === 'categories'
                  ? 'text-burgundy dark:text-burgundy-dark font-medium border-b-2 border-burgundy dark:border-burgundy-dark'
                  : 'text-charcoal/80 dark:text-dark-text/80 hover:text-charcoal dark:hover:text-white'
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm tracking-wide transition-colors duration-200 py-1 ${
                activeSection === 'about'
                  ? 'text-burgundy dark:text-burgundy-dark font-medium border-b-2 border-burgundy dark:border-burgundy-dark'
                  : 'text-charcoal/80 dark:text-dark-text/80 hover:text-charcoal dark:hover:text-white'
              }`}
            >
              About
            </button>

            {/* Search Icon button */}
            <button
              type="button"
              onClick={() => handleNavClick('discover', true)}
              className="p-2 text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy rounded-lg"
              aria-label="Scroll to and focus event search"
              title="Search events"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-4">
            {/* My Registrations Button */}
            <button
              type="button"
              onClick={openDrawer}
              className="relative inline-flex items-center gap-2 px-3 py-2 text-sm text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy"
              aria-label={`My Registrations (${registrationCount})`}
            >
              <Ticket className="w-4 h-4" />
              <span>My Registrations</span>
              {registrationCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-burgundy rounded-full min-w-[18px]">
                  {registrationCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Explore Events CTA Button */}
            <button
              type="button"
              onClick={() => handleNavClick('discover')}
              className="btn-primary"
            >
              Explore Events
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 text-charcoal dark:text-dark-text rounded-lg border border-sand/60 dark:border-white/10 hover:bg-sand/30 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy flex items-center justify-center"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Width Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-sand dark:border-white/10 bg-ivory dark:bg-dark-bg transition-all duration-300 px-6 py-6 space-y-4 shadow-soft-md">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('discover')}
              className="text-left py-2 text-base font-medium text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark"
            >
              Discover Events
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className="text-left py-2 text-base font-medium text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark"
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 text-base font-medium text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark"
            >
              About Vistara
            </button>
            <button
              onClick={() => handleNavClick('discover', true)}
              className="text-left py-2 text-base font-medium text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Events</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openDrawer();
              }}
              className="text-left py-2 text-base font-medium text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                <span>My Registrations</span>
              </span>
              {registrationCount > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-white bg-burgundy rounded-full">
                  {registrationCount}
                </span>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-sand dark:border-white/10">
            <button
              type="button"
              onClick={() => handleNavClick('discover')}
              className="btn-primary w-full"
            >
              Explore Events
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

