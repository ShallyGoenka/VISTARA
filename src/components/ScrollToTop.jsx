import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures the window scrolls to top on route transitions
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

