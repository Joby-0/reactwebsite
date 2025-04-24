import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, [location]);  // This effect runs every time the route changes

  return null;
};

export default ScrollToTop;