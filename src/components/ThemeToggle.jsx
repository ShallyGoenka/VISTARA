import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`min-h-[44px] min-w-[44px] p-2.5 rounded-lg border border-sand/60 dark:border-white/10 hover:border-charcoal/40 dark:hover:border-white/30 text-charcoal dark:text-dark-text bg-white/40 dark:bg-dark-card/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-burgundy active:scale-95 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#F7F5F0] transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-4 h-4 text-charcoal transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}

