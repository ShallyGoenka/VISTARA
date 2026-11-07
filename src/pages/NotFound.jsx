import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sand/30 dark:bg-white/5 flex items-center justify-center text-charcoal/60 dark:text-dark-muted">
          <Compass className="w-8 h-8 stroke-[1.5]" />
        </div>
        <span className="text-xs uppercase tracking-meta font-medium text-charcoal/60 dark:text-dark-muted block mb-3">
          404 &mdash; Page Not Found
        </span>
        <h1 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text mb-4">
          This page doesn't exist.
        </h1>
        <p className="text-charcoal/70 dark:text-dark-muted text-base leading-relaxed mb-8">
          We couldn't find the page you're looking for. It may have been moved, or the link might be incorrect.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to homepage</span>
        </Link>
      </div>
    </main>
  );
}
