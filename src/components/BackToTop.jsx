import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white/90 dark:bg-dark-card/90 border border-sand dark:border-white/10 text-charcoal dark:text-dark-text hover:text-burgundy dark:hover:text-burgundy-dark hover:border-burgundy/40 shadow-soft-md backdrop-blur-sm flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy active:scale-95"
    >
      <ArrowUp className="w-4 h-4 stroke-[2]" />
    </button>
  );
}

