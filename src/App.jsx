import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MyRegistrations from './components/MyRegistrations';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory dark:bg-dark-bg text-charcoal dark:text-dark-text transition-colors duration-200 flex flex-col font-sans">
        {/* Sticky Minimal Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Subtle Back to top button */}
        <BackToTop />

        {/* My Registrations Modal Drawer */}
        <MyRegistrations />
      </div>
    </HashRouter>
  );
}
