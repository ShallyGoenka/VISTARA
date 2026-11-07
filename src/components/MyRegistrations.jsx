import React, { useState, useEffect } from 'react';
import { X, Ticket, Calendar, MapPin, Hash, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegistrations } from '../context/RegistrationsContext';

export default function MyRegistrations() {
  const { registrations, cancelRegistration, isDrawerOpen, closeDrawer } = useRegistrations();
  const [confirmCancelId, setConfirmCancelId] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setConfirmCancelId(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-ivory dark:bg-dark-bg border-l border-sand dark:border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-sand dark:border-white/10 bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-sand/30 dark:bg-white/5 text-burgundy dark:text-burgundy-dark">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h2 id="drawer-title" className="font-display text-xl font-medium text-charcoal dark:text-dark-text">
                  My Registrations
                </h2>
                <p className="text-xs text-charcoal/60 dark:text-dark-muted">
                  {registrations.length} {registrations.length === 1 ? 'active pass' : 'active passes'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              className="p-2 rounded-lg text-charcoal/60 dark:text-dark-muted hover:text-charcoal dark:hover:text-white hover:bg-sand/30 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {registrations.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand/30 dark:bg-white/5 flex items-center justify-center text-charcoal/40 dark:text-dark-muted">
                  <Ticket className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl text-charcoal dark:text-dark-text mb-2">
                  You don't have any bookings yet
                </h3>
                <p className="text-xs text-charcoal/70 dark:text-dark-muted leading-relaxed max-w-xs mx-auto mb-6">
                  Explore our upcoming events and reserve a pass in just a few clicks.
                </p>
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider py-2 px-5"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              registrations.map((reg) => {
                const formattedDate = new Date(reg.eventDate).toLocaleDateString('en-IN', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                });
                const isConfirming = confirmCancelId === reg.id;

                return (
                  <div
                    key={reg.id}
                    className="p-4 rounded-xl bg-white dark:bg-dark-card border border-sand dark:border-white/10 shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
                  >
                    <div className="flex gap-3.5 mb-3">
                      {/* Event thumbnail */}
                      <img
                        src={reg.image}
                        alt={reg.eventName}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-sand/30"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-burgundy dark:text-burgundy-dark bg-burgundy/10 dark:bg-burgundy/20 px-2 py-0.5 rounded">
                            <Hash className="w-3 h-3" />
                            {reg.id}
                          </span>
                          <span className="text-[10px] text-charcoal/50 dark:text-dark-muted">
                            {new Date(reg.timestamp).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <h4 className="font-display text-base font-medium text-charcoal dark:text-dark-text truncate" title={reg.eventName}>
                          {reg.eventName}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-charcoal/60 dark:text-dark-muted mt-0.5">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formattedDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-sand/40 dark:border-white/10 flex items-center justify-between text-xs">
                      <span className="text-charcoal/60 dark:text-dark-muted truncate max-w-[180px] flex items-center gap-1">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{reg.venue}</span>
                      </span>

                      {/* Cancel Action with Confirmation check */}
                      {isConfirming ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-red-600 dark:text-red-400 font-medium">
                            Cancel this pass?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              cancelRegistration(reg.id);
                              setConfirmCancelId(null);
                            }}
                            className="px-2 py-1 text-[11px] font-semibold rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmCancelId(null)}
                            className="px-2 py-1 text-[11px] font-medium rounded border border-sand dark:border-white/20 text-charcoal dark:text-dark-text hover:bg-sand/30"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmCancelId(reg.id)}
                          className="text-charcoal/60 dark:text-dark-muted hover:text-red-600 dark:hover:text-red-400 text-xs font-medium transition-colors focus:outline-none"
                        >
                          Cancel pass
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-sand dark:border-white/10 bg-white/50 dark:bg-dark-card/50 text-[11px] text-center text-charcoal/50 dark:text-dark-muted">
            You can cancel any registration at any time with no fees.
          </div>
        </div>
      </div>
    </div>
  );
}
