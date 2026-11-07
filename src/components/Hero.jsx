import React from 'react';
import { ArrowDownRight, Calendar, MapPin } from 'lucide-react';
import { EVENTS } from '../data/events';
import Countdown from './Countdown';

export default function Hero() {
  // Find the earliest upcoming event
  const now = new Date().getTime();
  const sortedUpcoming = [...EVENTS]
    .filter(e => new Date(e.date).getTime() > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextEvent = sortedUpcoming[0] || EVENTS[0];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top headline area */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-sand dark:border-white/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-burgundy dark:bg-burgundy-dark" />
            <span className="text-xs uppercase tracking-meta font-medium text-charcoal/70 dark:text-dark-muted">
              Handpicked Local Events
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.08] tracking-tight text-charcoal dark:text-dark-text mb-6">
            Discover moments <br className="hidden sm:inline" />
            <span className="italic font-normal">that matter.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal/75 dark:text-dark-muted leading-[1.7] max-w-2xl mb-8">
            Find great events happening near you. Browse live music, workshops, tech meetups, and sports, then save your spot in a few clicks.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => handleScrollTo('discover')}
              className="btn-primary"
            >
              <span>Explore Events</span>
              <ArrowDownRight className="w-4 h-4 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('how-it-works')}
              className="btn-secondary"
            >
              How it works
            </button>
          </div>
        </div>

        {/* Hero photograph container with rounded-xl */}
        <div className="relative rounded-xl overflow-hidden border border-sand dark:border-white/10 shadow-soft-md bg-sand/20 aspect-[16/9] md:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85"
            alt="Audience gathered at a live event"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle gradient overlay at bottom for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />

          {/* Understated caption on hero image */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-ivory">
            <div>
              <span className="text-xs uppercase tracking-meta font-semibold text-ivory/80">
                Featured This Week
              </span>
              <p className="font-display text-lg sm:text-xl text-white">
                Great people, fresh ideas, and unforgettable experiences.
              </p>
            </div>
            <div className="text-xs text-ivory/70 hidden sm:block">
              Mumbai • Bengaluru • Delhi NCR • Jaipur
            </div>
          </div>
        </div>

        {/* Understated upcoming event ticker & live countdown banner */}
        {nextEvent && (
          <div className="mt-8 p-4 sm:p-5 rounded-xl border border-sand dark:border-white/10 bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sand/30 dark:bg-white/5 text-burgundy dark:text-burgundy-dark">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark">
                    Coming Up Next
                  </span>
                  <span className="text-xs text-charcoal/40 dark:text-white/30">•</span>
                  <span className="text-xs text-charcoal/60 dark:text-dark-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {nextEvent.city}
                  </span>
                </div>
                <h2 className="font-display text-base sm:text-lg text-charcoal dark:text-dark-text font-medium">
                  {nextEvent.name}
                </h2>
              </div>
            </div>

            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-sand/50 dark:border-white/10">
              <Countdown targetDate={nextEvent.date} label="Starts in" />
              <button
                onClick={() => handleScrollTo('discover')}
                className="link text-xs uppercase tracking-wider text-burgundy dark:text-burgundy-dark whitespace-nowrap ml-2 hidden sm:inline-block"
              >
                View event &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
