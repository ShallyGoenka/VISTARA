import React from 'react';
import { Compass, CalendarCheck, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Browse',
      subtitle: 'Find What Excites You',
      description:
        'Look through our curated list of events. Filter by your city, favorite category, or date to find something exciting.',
      icon: Compass
    },
    {
      number: '02',
      title: 'Reserve',
      subtitle: 'Save Your Spot',
      description:
        'Fill in your name, email, and phone number. We will create your digital pass right away and save it to your device.',
      icon: CalendarCheck
    },
    {
      number: '03',
      title: 'Attend',
      subtitle: 'Show Up & Enjoy',
      description:
        'Head to the venue on event day, show your pass ID at the door, and enjoy a great time.',
      icon: Sparkles
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-t border-sand/60 dark:border-white/10 bg-sand/10 dark:bg-white/[0.02]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-2">
            Simple & Clear
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 dark:text-dark-muted leading-relaxed">
            No accounts, no spam, no hassle. Saving your spot takes less than a minute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="p-8 rounded-xl bg-white dark:bg-dark-card border border-sand dark:border-white/10 shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display italic text-3xl font-normal text-burgundy/80 dark:text-burgundy-dark">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-sand/30 dark:bg-white/5 text-charcoal/70 dark:text-dark-muted">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <span className="text-[11px] uppercase tracking-meta font-semibold text-charcoal/50 dark:text-dark-muted block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-charcoal dark:text-dark-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 dark:text-dark-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand/40 dark:border-white/10 flex items-center text-xs text-charcoal/50 dark:text-dark-muted font-mono">
                  <span>Step {step.number} of 03</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
