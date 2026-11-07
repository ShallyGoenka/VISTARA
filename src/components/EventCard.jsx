import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, ImageOff } from 'lucide-react';
import Skeleton from './Skeleton';

export default function EventCard({ event }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Format ISO date cleanly (e.g. "Dec 11, 2026")
  const formattedDate = new Date(event.date).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const displayPrice = event.price === 0 ? 'Free' : `₹${event.price.toLocaleString('en-IN')}`;

  return (
    <article className="group h-full flex flex-col bg-white dark:bg-dark-card border border-sand dark:border-white/10 rounded-xl overflow-hidden shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
      <Link
        to={`/event/${event.id}`}
        className="block flex-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-xl"
        aria-label={`View details for ${event.name}`}
      >
        {/* 4:3 Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/30 dark:bg-white/5">
          {!imageLoaded && !imageError && (
            <Skeleton className="absolute inset-0 w-full h-full" variant="card" />
          )}

          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-sand/30 dark:bg-white/5 text-charcoal/50 dark:text-dark-muted p-4 text-center">
              <ImageOff className="w-8 h-8 mb-2 stroke-[1.5]" />
              <span className="text-xs font-sans">Image unavailable</span>
            </div>
          ) : (
            <img
              src={event.image}
              alt={event.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Category Chip over photo */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 text-[10px] tracking-meta uppercase font-semibold text-charcoal dark:text-dark-text bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-full border border-sand/50 dark:border-white/10 shadow-soft-sm">
              {event.category}
            </span>
          </div>

          {/* Price Tag over photo */}
          <div className="absolute top-3 right-3">
            <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full shadow-soft-sm backdrop-blur-md ${
              event.price === 0
                ? 'bg-burgundy text-white'
                : 'bg-white/90 dark:bg-dark-card/90 text-charcoal dark:text-dark-text border border-sand/50 dark:border-white/10'
            }`}>
              {displayPrice}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Meta row: Date and City */}
            <div className="flex items-center gap-3 text-xs text-charcoal/70 dark:text-dark-muted mb-2.5">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 stroke-[1.75]" />
                {formattedDate}
              </span>
              <span className="text-charcoal/30 dark:text-white/20">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 stroke-[1.75]" />
                {event.city}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg sm:text-xl font-medium text-charcoal dark:text-dark-text group-hover:text-burgundy dark:group-hover:text-burgundy-dark transition-colors duration-200 line-clamp-1 mb-2">
              {event.name}
            </h3>

            {/* One line short description */}
            <p className="text-sm text-charcoal/70 dark:text-dark-muted line-clamp-1 leading-relaxed mb-4">
              {event.shortDescription}
            </p>
          </div>

          {/* Card Footer: View Details link */}
          <div className="pt-3 border-t border-sand/40 dark:border-white/10 flex items-center justify-between mt-auto">
            <span className="text-xs uppercase tracking-meta font-medium text-charcoal/60 dark:text-dark-muted">
              {event.venue.split(',')[0]}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-burgundy dark:text-burgundy-dark group-hover:translate-x-0.5 transition-transform">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

