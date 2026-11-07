import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

/**
 * Editorial plain box countdown timer
 */
export default function Countdown({ targetDate, label = 'Starts in', compact = false }) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="inline-flex items-center text-xs uppercase tracking-meta font-medium text-charcoal/60 dark:text-dark-muted">
        Event Concluded
      </div>
    );
  }

  const units = [
    { label: 'Days', value: String(days).padStart(2, '0') },
    { label: 'Hours', value: String(hours).padStart(2, '0') },
    { label: 'Mins', value: String(minutes).padStart(2, '0') },
    { label: 'Secs', value: String(seconds).padStart(2, '0') },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="text-center">
              <span className="font-mono text-base font-semibold text-charcoal dark:text-dark-text block">
                {unit.value}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50 dark:text-dark-muted block">
                {unit.label.toLowerCase()}
              </span>
            </div>
            {index < units.length - 1 && (
              <span className="text-charcoal/30 dark:text-white/20 pb-3 font-mono">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
      {label && (
        <span className="text-xs uppercase tracking-meta font-medium text-charcoal/60 dark:text-dark-muted mr-1">
          {label}
        </span>
      )}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center min-w-[52px] sm:min-w-[58px] py-1.5 px-2 bg-white dark:bg-dark-card border border-sand dark:border-white/10 rounded-lg shadow-soft-sm"
          >
            <span className="font-mono text-base sm:text-lg font-semibold text-charcoal dark:text-dark-text leading-tight">
              {unit.value}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal/60 dark:text-dark-muted">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

