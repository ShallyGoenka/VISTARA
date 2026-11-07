import React from 'react';

/**
 * Editorial Skeleton placeholder with soft sand shimmer
 */
export default function Skeleton({ className = '', variant = 'rectangular' }) {
  const getVariantClass = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'card':
        return 'rounded-xl';
      case 'pill':
        return 'rounded-full';
      case 'rectangular':
      default:
        return 'rounded-lg';
    }
  };

  return (
    <div
      className={`animate-shimmer bg-sand/30 dark:bg-white/5 ${getVariantClass()} ${className}`}
      aria-hidden="true"
    />
  );
}

