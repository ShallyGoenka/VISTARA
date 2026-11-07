import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../data/events';

const CATEGORY_DATA = [
  {
    name: 'Tech',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    description: 'Hackathons, tech conferences, and AI talks'
  },
  {
    name: 'Music',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    description: 'Live gigs, indie bands, and acoustic nights'
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'College tournaments and competitive games'
  },
  {
    name: 'Workshops',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on classes in design and public speaking'
  },
  {
    name: 'Cultural',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description: 'Folk dance, Sufi nights, and local food'
  }
];

export default function CategoryTiles({ onSelectCategory }) {
  // Compute event counts dynamically
  const getEventCount = (catName) => {
    return EVENTS.filter(e => e.category === catName).length;
  };

  const handleTileClick = (categoryName) => {
    onSelectCategory(categoryName);
    const el = document.getElementById('discover');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 border-t border-sand/60 dark:border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-2">
              Explore by Category
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text tracking-tight">
              Find What You Love
            </h2>
          </div>
          <p className="text-sm text-charcoal/70 dark:text-dark-muted max-w-sm">
            Browse events tailored to your interests, from live gigs and design labs to tech talks.
          </p>
        </div>

        {/* 5-tile responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORY_DATA.map((cat) => {
            const count = getEventCount(cat.name);
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleTileClick(cat.name)}
                className="group text-left rounded-xl overflow-hidden border border-sand dark:border-white/10 bg-white dark:bg-dark-card shadow-soft-sm hover:shadow-soft-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy flex flex-col"
              >
                {/* 4:3 Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/30 dark:bg-white/5">
                  <img
                    src={cat.image}
                    alt={`${cat.name} events`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm flex items-center justify-center text-charcoal dark:text-dark-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-3 text-ivory">
                    <span className="text-[10px] tracking-meta uppercase font-semibold text-sand-light block">
                      {count} {count === 1 ? 'event' : 'events'}
                    </span>
                    <h3 className="font-display text-lg text-white font-medium">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-charcoal/70 dark:text-dark-muted line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
