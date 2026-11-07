import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function About() {
  const handleScrollToEvents = () => {
    const el = document.getElementById('discover');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 md:py-24 border-t border-sand/60 dark:border-white/10 bg-ivory/50 dark:bg-dark-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Paragraph (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal dark:text-dark-text tracking-tight mb-6 leading-[1.15]">
              Bringing people together <br className="hidden sm:inline" />
              <span className="italic font-normal">for great experiences.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal/80 dark:text-dark-muted leading-relaxed font-normal">
              <p>
                Most event sites are crowded, noisy, and full of ads. We built Vistara with a simpler idea in mind: to help you discover events that are genuinely worth your time.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 dark:text-dark-muted leading-relaxed">
                Every event here is handpicked for its quality, friendly atmosphere, and dependable hosts. Whether you want to learn a new skill at a workshop, enjoy live music with friends, or spend a night celebrating local culture, Vistara makes it easy to find and reserve your spot.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-sand/50 dark:border-white/10 flex flex-wrap items-center gap-6">
              <div>
                <span className="font-display text-2xl font-semibold text-charcoal dark:text-dark-text block">
                  6+
                </span>
                <span className="text-xs text-charcoal/60 dark:text-dark-muted uppercase tracking-wider">
                  Cities
                </span>
              </div>
              <div className="w-[1px] h-8 bg-sand/60 dark:bg-white/10" />
              <div>
                <span className="font-display text-2xl font-semibold text-charcoal dark:text-dark-text block">
                  100%
                </span>
                <span className="text-xs text-charcoal/60 dark:text-dark-muted uppercase tracking-wider">
                  Verified Venues
                </span>
              </div>
              <div className="w-[1px] h-8 bg-sand/60 dark:bg-white/10" />
              <div>
                <span className="font-display text-2xl font-semibold text-charcoal dark:text-dark-text block">
                  0
                </span>
                <span className="text-xs text-charcoal/60 dark:text-dark-muted uppercase tracking-wider">
                  Hassle or Spam
                </span>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleScrollToEvents}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Explore Upcoming Events</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-sand dark:border-white/10 shadow-soft-md aspect-[4/5] bg-sand/20">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Attendees gathered together at an interactive workshop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <p className="font-display italic text-base text-white">
                  "Good venues, great music, and friendly people make the best memories."
                </p>
                <span className="text-[11px] uppercase tracking-meta font-medium text-sand-light block mt-1">
                  The Vistara Promise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
