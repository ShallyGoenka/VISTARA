import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import EventCard from './EventCard';

export default function EventGrid({ events, onResetFilters }) {
  if (!events || events.length === 0) {
    return (
      <div className="py-20 px-6 text-center bg-white dark:bg-dark-card border border-sand dark:border-white/10 rounded-xl shadow-soft-sm max-w-xl mx-auto my-6">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sand/30 dark:bg-white/5 flex items-center justify-center text-charcoal/50 dark:text-dark-muted">
          <SearchX className="w-8 h-8 stroke-[1.5]" />
        </div>
        <h3 className="font-display text-2xl text-charcoal dark:text-dark-text mb-3">
          No events found
        </h3>
        <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed mb-6 max-w-sm mx-auto">
          Try clearing your search or picking a different city to see what's happening.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn-primary inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset all filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
