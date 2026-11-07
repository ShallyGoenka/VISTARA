import React from 'react';
import { UserCheck, BadgeCheck, CheckCircle, Layers } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: UserCheck,
      title: 'Quick & Easy',
      description:
        'Book your ticket in seconds. No forced account sign-ups, no passwords to remember.'
    },
    {
      icon: BadgeCheck,
      title: 'Verified Events',
      description:
        'Every event is reviewed by our team to ensure genuine organizers, great venues, and on-time schedules.'
    },
    {
      icon: CheckCircle,
      title: 'Instant Confirmation',
      description:
        'Get your digital pass ID right away. If your plans change, cancel anytime with one click.'
    },
    {
      icon: Layers,
      title: 'Something for Everyone',
      description:
        'From tech meetups and design workshops to acoustic sessions and college sports, there is always something new to try.'
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-sand/60 dark:border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-2">
            Why Vistara
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text tracking-tight mb-4">
            Why You'll Love Vistara
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 dark:text-dark-muted leading-relaxed">
            We focus on quality events and a clean, hassle-free booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-card border border-sand dark:border-white/10 shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 mb-5 rounded-lg bg-sand/30 dark:bg-white/5 flex items-center justify-center text-burgundy dark:text-burgundy-dark">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-charcoal dark:text-dark-text mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
