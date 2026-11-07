import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { EVENTS } from '../data/events';
import Skeleton from './Skeleton';

export default function FeaturedEvents() {
  const featured = EVENTS.filter(e => e.featured);
  const primaryFeature = featured[0];
  const secondaryFeatures = featured.slice(1, 3);

  const [primaryLoaded, setPrimaryLoaded] = useState(false);
  const [secLoaded, setSecLoaded] = useState({});

  if (!primaryFeature) return null;

  return (
    <section className="py-16 md:py-24 border-b border-sand/60 dark:border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editor's Picks</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text tracking-tight">
              Featured Events
            </h2>
          </div>
          <p className="text-sm text-charcoal/70 dark:text-dark-muted max-w-sm">
            A few standout gatherings we think you will love this season.
          </p>
        </div>

        {/* Asymmetrical Layout: 60% left feature, 40% right stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Feature (approx 60% on desktop: lg:col-span-7) */}
          <div className="lg:col-span-7">
            <Link
              to={`/event/${primaryFeature.id}`}
              className="group h-full flex flex-col justify-between rounded-xl overflow-hidden border border-sand dark:border-white/10 bg-white dark:bg-dark-card shadow-soft-sm hover:shadow-soft-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand/30 dark:bg-white/5">
                {!primaryLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full" variant="card" />
                )}
                <img
                  src={primaryFeature.image}
                  alt={primaryFeature.name}
                  onLoad={() => setPrimaryLoaded(true)}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    primaryLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs tracking-meta uppercase font-semibold text-charcoal bg-ivory/95 backdrop-blur-md rounded-full shadow-soft-sm">
                    {primaryFeature.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-burgundy text-white shadow-soft-sm">
                    {primaryFeature.price === 0 ? 'Free Entry' : `₹${primaryFeature.price.toLocaleString('en-IN')}`}
                  </span>
                </div>

                {/* Overlaid headline on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-ivory">
                  <div className="flex items-center gap-3 text-xs text-ivory/80 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(primaryFeature.date).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {primaryFeature.city}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-sand-light transition-colors duration-200">
                    {primaryFeature.name}
                  </h3>
                </div>
              </div>

              {/* Bottom bar for large feature */}
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sand/40 dark:border-white/10">
                <p className="text-sm text-charcoal/70 dark:text-dark-muted line-clamp-2 max-w-lg">
                  {primaryFeature.shortDescription}
                </p>
                <span className="btn-primary whitespace-nowrap text-xs uppercase tracking-wider py-2 px-5 min-h-[38px] group-hover:bg-[#5F3037]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Right Stacked Cards (approx 40% on desktop: lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryFeatures.map((secEvent) => {
              const formattedDate = new Date(secEvent.date).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });
              const isLoaded = secLoaded[secEvent.id];

              return (
                <Link
                  key={secEvent.id}
                  to={`/event/${secEvent.id}`}
                  className="group flex-1 flex flex-col sm:flex-row rounded-xl overflow-hidden border border-sand dark:border-white/10 bg-white dark:bg-dark-card shadow-soft-sm hover:shadow-soft-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-sand/30 dark:bg-white/5">
                    {!isLoaded && (
                      <Skeleton className="absolute inset-0 w-full h-full" variant="card" />
                    )}
                    <img
                      src={secEvent.image}
                      alt={secEvent.name}
                      onLoad={() => setSecLoaded(prev => ({ ...prev, [secEvent.id]: true }))}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-meta uppercase font-semibold text-charcoal bg-ivory/95 backdrop-blur-md rounded-full border border-sand/50 shadow-soft-sm">
                        {secEvent.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-charcoal/60 dark:text-dark-muted mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formattedDate}
                        </span>
                        <span>•</span>
                        <span>{secEvent.city}</span>
                      </div>
                      <h3 className="font-display text-lg font-medium text-charcoal dark:text-dark-text group-hover:text-burgundy dark:group-hover:text-burgundy-dark transition-colors duration-200 line-clamp-1 mb-2">
                        {secEvent.name}
                      </h3>
                      <p className="text-xs text-charcoal/70 dark:text-dark-muted line-clamp-2 leading-relaxed">
                        {secEvent.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sand/40 dark:border-white/10 mt-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-charcoal dark:text-dark-text">
                        {secEvent.price === 0 ? 'Free' : `₹${secEvent.price.toLocaleString('en-IN')}`}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-burgundy dark:text-burgundy-dark">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
