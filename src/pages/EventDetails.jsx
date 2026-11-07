import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Building,
  UserCheck,
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { EVENTS } from '../data/events';
import Countdown from '../components/Countdown';
import RegistrationForm from '../components/RegistrationForm';
import RegistrationConfirmation from '../components/RegistrationConfirmation';
import EventCard from '../components/EventCard';
import Skeleton from '../components/Skeleton';

export default function EventDetails() {
  const { id } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [confirmedRegistration, setConfirmedRegistration] = useState(null);

  const event = EVENTS.find((e) => e.id === id);

  // If event ID is invalid, show friendly not-found state with recommendations
  if (!event) {
    const popularEvents = EVENTS.slice(0, 3);
    return (
      <main className="py-20 px-4 max-w-[1200px] mx-auto">
        <div className="max-w-md mx-auto text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sand/30 dark:bg-white/5 flex items-center justify-center text-charcoal/50 dark:text-dark-muted">
            <Compass className="w-8 h-8 stroke-[1.5]" />
          </div>
          <span className="text-xs uppercase tracking-meta font-semibold text-charcoal/60 dark:text-dark-muted block mb-2">
            Event Not Found
          </span>
          <h1 className="font-display text-3xl text-charcoal dark:text-dark-text mb-4">
            We couldn't find this event
          </h1>
          <p className="text-sm text-charcoal/70 dark:text-dark-muted mb-6 leading-relaxed">
            This event may have ended or the link might be incorrect. Take a look at these popular events instead.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all events</span>
          </Link>
        </div>

        {/* Alternative Events */}
        <section className="pt-12 border-t border-sand/60 dark:border-white/10">
          <h2 className="font-display text-2xl text-charcoal dark:text-dark-text mb-6 text-center">
            Other events you might like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEvents.map((pe) => (
              <EventCard key={pe.id} event={pe} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Related events from same category (up to 3)
  const sameCategory = EVENTS.filter((e) => e.category === event.category && e.id !== event.id);
  const otherEvents = EVENTS.filter((e) => e.id !== event.id && !sameCategory.includes(e));
  const relatedEvents = [...sameCategory, ...otherEvents].slice(0, 3);

  const formattedDate = new Date(event.date).toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const scrollToRegistration = () => {
    const el = document.getElementById('registration-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="py-8 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-meta font-semibold text-charcoal/70 dark:text-dark-muted hover:text-burgundy dark:hover:text-burgundy-dark transition-colors py-1 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All events</span>
          </Link>
        </div>

        {/* Large 16:9 Cover Image Banner */}
        <div className="relative rounded-xl overflow-hidden border border-sand dark:border-white/10 shadow-soft-md bg-sand/30 dark:bg-white/5 aspect-[16/9] mb-12">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 w-full h-full" variant="card" />
          )}
          <img
            src={event.image}
            alt={event.name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle bottom gradient overlay for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none" />

          {/* Category Chip over top left */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="inline-block px-3 py-1 text-xs tracking-meta uppercase font-semibold text-charcoal bg-ivory/95 backdrop-blur-md rounded-full shadow-soft-sm">
              {event.category}
            </span>
          </div>

          {/* Title & Key Meta over bottom */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-ivory">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
              {event.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-ivory/90 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sand-light" />
                {formattedDate}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sand-light" />
                {event.time}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sand-light" />
                {event.venue}, {event.city}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout: Left (about 60%), Right sticky card (about 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 60% (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-12">
            {/* About this event */}
            <section aria-labelledby="about-event-title">
              <h2 id="about-event-title" className="font-display text-2xl sm:text-3xl text-charcoal dark:text-dark-text tracking-tight mb-4">
                About this event
              </h2>
              <p className="text-base sm:text-lg text-charcoal/80 dark:text-dark-muted leading-relaxed font-normal">
                {event.fullDescription}
              </p>
            </section>

            {/* Schedule Timeline */}
            <section aria-labelledby="schedule-title" className="pt-8 border-t border-sand/60 dark:border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 id="schedule-title" className="font-display text-2xl sm:text-3xl text-charcoal dark:text-dark-text tracking-tight">
                  Event Schedule
                </h2>
                <span className="text-xs uppercase tracking-meta text-charcoal/50 dark:text-dark-muted">
                  Timeline
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-sand dark:before:bg-white/10">
                {event.schedule.map((slot, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle dot on timeline track */}
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 border-burgundy dark:border-burgundy-dark bg-ivory dark:bg-dark-bg group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-burgundy dark:text-burgundy-dark block mb-0.5">
                        {slot.time}
                      </span>
                      <h3 className="text-base font-medium text-charcoal dark:text-dark-text">
                        {slot.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Venue & Location Details */}
            <section aria-labelledby="venue-title" className="pt-8 border-t border-sand/60 dark:border-white/10">
              <h2 id="venue-title" className="font-display text-2xl sm:text-3xl text-charcoal dark:text-dark-text tracking-tight mb-4">
                Location & Venue
              </h2>
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-sand dark:border-white/10 shadow-soft-sm flex items-start gap-4">
                <div className="p-3 rounded-lg bg-sand/30 dark:bg-white/5 text-burgundy dark:text-burgundy-dark flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-charcoal dark:text-dark-text font-medium mb-1">
                    {event.venue}
                  </h3>
                  <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed">
                    Located in {event.city}. Easy to reach by metro and cab. On-site parking and seating available.
                  </p>
                </div>
              </div>
            </section>

            {/* Organizer Info */}
            <section aria-labelledby="organizer-title" className="pt-8 border-t border-sand/60 dark:border-white/10">
              <h2 id="organizer-title" className="font-display text-2xl sm:text-3xl text-charcoal dark:text-dark-text tracking-tight mb-4">
                Hosted by
              </h2>
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-sand dark:border-white/10 shadow-soft-sm flex items-start gap-4">
                <div className="p-3 rounded-lg bg-sand/30 dark:bg-white/5 text-burgundy dark:text-burgundy-dark flex-shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg text-charcoal dark:text-dark-text font-medium">
                      {event.organizer}
                    </h3>
                    <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 text-xs" title="Verified Host">
                      <CheckCircle2 className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed">
                    {event.organizerDescription}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: 40% (lg:col-span-5) Sticky Registration Card */}
          <div id="registration-section" className="lg:col-span-5">
            <div className="sticky top-28 bg-white dark:bg-dark-card border border-sand dark:border-white/10 rounded-xl p-6 sm:p-7 shadow-soft-md">
              {confirmedRegistration ? (
                <RegistrationConfirmation
                  registration={confirmedRegistration}
                  onReset={() => setConfirmedRegistration(null)}
                />
              ) : (
                <>
                  {/* Top Price & Countdown Header */}
                  <div className="pb-5 mb-5 border-b border-sand/50 dark:border-white/10 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-meta font-semibold text-charcoal/50 dark:text-dark-muted block mb-0.5">
                        Ticket Price
                      </span>
                      <div className="font-display text-3xl font-semibold text-charcoal dark:text-dark-text">
                        {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString('en-IN')}`}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-1">
                        Starts in
                      </span>
                      <Countdown targetDate={event.date} compact={true} />
                    </div>
                  </div>

                  {/* Form Headline */}
                  <div className="mb-5">
                    <h3 className="font-display text-xl text-charcoal dark:text-dark-text">
                      Reserve Your Spot
                    </h3>
                    <p className="text-xs text-charcoal/60 dark:text-dark-muted mt-1">
                      Instant confirmation. No account required.
                    </p>
                  </div>

                  {/* The interactive registration form */}
                  <RegistrationForm
                    event={event}
                    onSuccess={(reg) => setConfirmedRegistration(reg)}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="mt-20 pt-16 border-t border-sand/60 dark:border-white/10" aria-labelledby="related-title">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-1">
                  More to Explore
                </span>
                <h2 id="related-title" className="font-display text-2xl sm:text-3xl text-charcoal dark:text-dark-text">
                  Similar Events You Might Like
                </h2>
              </div>
              <Link to="/" className="link text-xs uppercase tracking-wider text-charcoal/70 dark:text-dark-muted">
                <span>See all events</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedEvents.map((relEvent) => (
                <EventCard key={relEvent.id} event={relEvent} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky Bottom Bar for Mobile View */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-dark-card/95 border-t border-sand dark:border-white/10 backdrop-blur-md z-30 flex items-center justify-between shadow-soft-lg">
        <div>
          <span className="text-[10px] uppercase tracking-meta font-semibold text-charcoal/50 dark:text-dark-muted block">
            Ticket
          </span>
          <span className="font-display text-lg font-semibold text-charcoal dark:text-dark-text">
            {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString('en-IN')}`}
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToRegistration}
          className="btn-primary py-2 px-5 min-h-[40px] text-xs uppercase tracking-wider"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}
