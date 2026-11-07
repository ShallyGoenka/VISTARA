import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import SearchFilter from '../components/SearchFilter';
import EventGrid from '../components/EventGrid';
import CategoryTiles from '../components/CategoryTiles';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import ScrollReveal from '../components/ScrollReveal';
import { EVENTS } from '../data/events';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');

  // Filtered events memoized
  const filteredEvents = useMemo(() => {
    const now = new Date().getTime();

    return EVENTS.filter((event) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = event.name.toLowerCase().includes(query);
        const matchesVenue = event.venue.toLowerCase().includes(query);
        const matchesCity = event.city.toLowerCase().includes(query);
        const matchesShort = event.shortDescription.toLowerCase().includes(query);
        const matchesFull = event.fullDescription.toLowerCase().includes(query);
        if (!matchesName && !matchesVenue && !matchesCity && !matchesShort && !matchesFull) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'All' && event.category !== selectedCategory) {
        return false;
      }

      // 3. City
      if (selectedCity !== 'All' && event.city !== selectedCity) {
        return false;
      }

      // 4. Date filter
      if (selectedDate !== 'All') {
        const eventTime = new Date(event.date).getTime();
        const diffMs = eventTime - now;
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (selectedDate === 'this-month') {
          const nowDate = new Date();
          const evtDate = new Date(event.date);
          const isSameMonth =
            evtDate.getFullYear() === nowDate.getFullYear() &&
            evtDate.getMonth() === nowDate.getMonth();
          if (!isSameMonth) return false;
        } else if (selectedDate === '30-days') {
          if (diffDays < 0 || diffDays > 30) return false;
        } else if (selectedDate === '3-months') {
          if (diffDays < 0 || diffDays > 90) return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCity, selectedDate]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCity('All');
    setSelectedDate('All');
  };

  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Featured Events with scroll reveal */}
      <ScrollReveal>
        <FeaturedEvents />
      </ScrollReveal>

      {/* 3. Search and All Events (id "discover") */}
      <section id="discover" className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-meta font-semibold text-burgundy dark:text-burgundy-dark block mb-2">
              Explore Everything
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal dark:text-dark-text tracking-tight">
              All Upcoming Events
            </h2>
          </div>

          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            onResetAll={handleResetFilters}
            filteredCount={filteredEvents.length}
            totalCount={EVENTS.length}
          />

          <EventGrid
            events={filteredEvents}
            onResetFilters={handleResetFilters}
          />
        </div>
      </section>

      {/* 4. Categories (id "categories") with scroll reveal */}
      <ScrollReveal>
        <CategoryTiles onSelectCategory={(cat) => setSelectedCategory(cat)} />
      </ScrollReveal>

      {/* 5. How It Works with scroll reveal */}
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      {/* 6. Why Choose Vistara with scroll reveal */}
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      {/* 7. About (id "about") with scroll reveal */}
      <ScrollReveal>
        <About />
      </ScrollReveal>
    </div>
  );
}
