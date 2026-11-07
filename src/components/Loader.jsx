import React from 'react';

export default function Loader({ message = 'Loading events...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center" role="status" aria-live="polite">
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 rounded-full border border-sand dark:border-white/10" />
        <div className="absolute inset-0 rounded-full border-t-2 border-burgundy dark:border-burgundy-dark animate-spin" />
      </div>
      <p className="font-display italic text-charcoal/70 dark:text-dark-muted text-sm tracking-wide">
        {message}
      </p>
    </div>
  );
}
