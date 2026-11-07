import React from 'react';
import { Search, X, MapPin, Calendar, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES, CITIES } from '../data/events';

export const DATE_OPTIONS = [
  { value: 'All', label: 'All Dates' },
  { value: 'this-month', label: 'This Month' },
  { value: '30-days', label: 'Next 30 Days' },
  { value: '3-months', label: 'Next 3 Months' }
];

export default function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedDate,
  setSelectedDate,
  selectedCity,
  setSelectedCity,
  onResetAll,
  filteredCount,
  totalCount
}) {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedDate !== 'All' ||
    selectedCity !== 'All';

  const getDateLabel = (val) => {
    const found = DATE_OPTIONS.find(d => d.value === val);
    return found ? found.label : val;
  };

  return (
    <div className="bg-white dark:bg-dark-card border border-sand dark:border-white/10 rounded-xl p-5 sm:p-6 shadow-soft-sm mb-8 space-y-6">
      {/* Top Row: Search Input + City Dropdown + Date Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search Bar (md:col-span-6) */}
        <div className="md:col-span-6 relative">
          <label htmlFor="event-search-input" className="sr-only">
            Search events
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal/50 dark:text-dark-muted">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="event-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event name, venue, city, or topic..."
              className="w-full pl-10 pr-10 py-2.5 min-h-[44px] bg-ivory/50 dark:bg-dark-bg/60 border border-sand dark:border-white/10 rounded-lg text-sm text-charcoal dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-charcoal/50 hover:text-charcoal dark:text-dark-muted dark:hover:text-white"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Location Dropdown (md:col-span-3) */}
        <div className="md:col-span-3 relative">
          <label htmlFor="event-city-filter" className="sr-only">
            Filter by city
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal/50 dark:text-dark-muted">
              <MapPin className="w-4 h-4" />
            </div>
            <select
              id="event-city-filter"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 min-h-[44px] bg-ivory/50 dark:bg-dark-bg/60 border border-sand dark:border-white/10 rounded-lg text-sm text-charcoal dark:text-dark-text appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            >
              {CITIES.map((city) => (
                <option key={city} value={city} className="bg-white dark:bg-dark-card text-charcoal dark:text-dark-text">
                  {city === 'All' ? 'All Cities' : city}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-charcoal/40 dark:text-dark-muted">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Date Dropdown (md:col-span-3) */}
        <div className="md:col-span-3 relative">
          <label htmlFor="event-date-filter" className="sr-only">
            Filter by date timeframe
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal/50 dark:text-dark-muted">
              <Calendar className="w-4 h-4" />
            </div>
            <select
              id="event-date-filter"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 min-h-[44px] bg-ivory/50 dark:bg-dark-bg/60 border border-sand dark:border-white/10 rounded-lg text-sm text-charcoal dark:text-dark-text appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            >
              {DATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-dark-card text-charcoal dark:text-dark-text">
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-charcoal/40 dark:text-dark-muted">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Category Pill Chips */}
      <div>
        <div className="flex items-center gap-2 mb-2.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal/60 dark:text-dark-muted" />
          <span className="text-xs uppercase tracking-meta font-semibold text-charcoal/60 dark:text-dark-muted">
            Categories
          </span>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Event category filters">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[36px] px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 border ${
                  isSelected
                    ? 'bg-burgundy text-white border-burgundy shadow-soft-sm'
                    : 'bg-ivory/60 dark:bg-dark-bg/40 text-charcoal/80 dark:text-dark-text/80 border-sand dark:border-white/10 hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-white dark:hover:bg-dark-card'
                }`}
                aria-pressed={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Summary Row: Removable Chips + Result Count + Clear All */}
      <div className="pt-4 border-t border-sand/50 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Left: Active Chips or Filter Status */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-charcoal/70 dark:text-dark-muted font-medium">
            Showing <strong className="text-charcoal dark:text-white font-semibold">{filteredCount}</strong> of {totalCount} events
          </span>

          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sand/30 dark:bg-white/10 text-charcoal dark:text-dark-text border border-sand dark:border-white/10 hover:bg-burgundy/10 transition-colors"
              aria-label={`Remove category filter ${selectedCategory}`}
            >
              <span>{selectedCategory}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {selectedCity !== 'All' && (
            <button
              onClick={() => setSelectedCity('All')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sand/30 dark:bg-white/10 text-charcoal dark:text-dark-text border border-sand dark:border-white/10 hover:bg-burgundy/10 transition-colors"
              aria-label={`Remove city filter ${selectedCity}`}
            >
              <span>{selectedCity}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {selectedDate !== 'All' && (
            <button
              onClick={() => setSelectedDate('All')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sand/30 dark:bg-white/10 text-charcoal dark:text-dark-text border border-sand dark:border-white/10 hover:bg-burgundy/10 transition-colors"
              aria-label={`Remove date filter ${getDateLabel(selectedDate)}`}
            >
              <span>{getDateLabel(selectedDate)}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {searchQuery.trim() !== '' && (
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sand/30 dark:bg-white/10 text-charcoal dark:text-dark-text border border-sand dark:border-white/10 hover:bg-burgundy/10 transition-colors"
              aria-label={`Remove search term "${searchQuery}"`}
            >
              <span className="truncate max-w-[120px]">"{searchQuery}"</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Right: Clear All Link */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetAll}
            className="text-xs uppercase tracking-wider font-semibold text-burgundy dark:text-burgundy-dark hover:underline focus:outline-none self-start sm:self-auto"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
