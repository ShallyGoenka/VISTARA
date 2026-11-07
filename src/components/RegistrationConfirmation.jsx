import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Ticket, ArrowLeft, Calendar, MapPin, Hash, User } from 'lucide-react';
import { useRegistrations } from '../context/RegistrationsContext';

export default function RegistrationConfirmation({ registration, onReset }) {
  const { openDrawer } = useRegistrations();
  const navigate = useNavigate();

  const formattedDate = new Date(registration.eventDate).toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="py-2 text-charcoal dark:text-dark-text animate-fade-in" role="region" aria-label="Registration confirmation">
      {/* Calm burgundy line checkmark */}
      <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-burgundy dark:border-burgundy-dark flex items-center justify-center text-burgundy dark:text-burgundy-dark">
        <Check className="w-7 h-7 stroke-[2]" />
      </div>

      <div className="text-center mb-6">
        <span className="text-[11px] uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-1">
          You're All Set!
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-charcoal dark:text-dark-text">
          Your spot is saved.
        </h2>
        <p className="text-xs text-charcoal/70 dark:text-dark-muted mt-1">
          Here is your booking confirmation. Keep your registration ID handy when you arrive.
        </p>
      </div>

      {/* Summary List Card */}
      <div className="p-4 rounded-lg bg-sand/20 dark:bg-white/5 border border-sand dark:border-white/10 space-y-3 mb-6 text-xs">
        <div className="flex items-start justify-between pb-2 border-b border-sand/40 dark:border-white/10">
          <span className="text-charcoal/60 dark:text-dark-muted flex items-center gap-1.5 font-medium">
            <Hash className="w-3.5 h-3.5" />
            <span>Registration ID</span>
          </span>
          <span className="font-mono font-semibold text-charcoal dark:text-white">
            {registration.id}
          </span>
        </div>

        <div className="flex items-start justify-between pb-2 border-b border-sand/40 dark:border-white/10">
          <span className="text-charcoal/60 dark:text-dark-muted flex items-center gap-1.5 font-medium">
            <User className="w-3.5 h-3.5" />
            <span>Attendee</span>
          </span>
          <span className="font-medium text-charcoal dark:text-white text-right">
            {registration.name}
          </span>
        </div>

        <div className="flex items-start justify-between pb-2 border-b border-sand/40 dark:border-white/10">
          <span className="text-charcoal/60 dark:text-dark-muted flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>Date</span>
          </span>
          <span className="font-medium text-charcoal dark:text-white text-right">
            {formattedDate}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-charcoal/60 dark:text-dark-muted flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>Venue</span>
          </span>
          <span className="font-medium text-charcoal dark:text-white text-right max-w-[180px] truncate" title={registration.venue}>
            {registration.venue}
          </span>
        </div>
      </div>

      {/* Two Actions */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={openDrawer}
          className="btn-primary w-full inline-flex items-center justify-center gap-2"
        >
          <Ticket className="w-4 h-4" />
          <span>View all my registrations</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="btn-secondary w-full inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore more events</span>
        </button>
      </div>
    </div>
  );
}
