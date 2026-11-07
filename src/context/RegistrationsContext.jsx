import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const RegistrationsContext = createContext();

export function RegistrationsProvider({ children }) {
  const [registrations, setRegistrations] = useLocalStorage('vistara_registrations', []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isAlreadyRegistered = (email, eventId) => {
    if (!email || !eventId) return false;
    const cleanEmail = email.trim().toLowerCase();
    return registrations.some(
      r => r.email.trim().toLowerCase() === cleanEmail && String(r.eventId) === String(eventId)
    );
  };

  const addRegistration = (data) => {
    // Generate an understated editorial registration identifier e.g. "VIS-94821"
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const id = `VIS-${randomSuffix}`;

    const newRegistration = {
      id,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      eventId: String(data.eventId),
      eventName: data.eventName,
      eventDate: data.eventDate,
      venue: data.venue,
      image: data.image,
      timestamp: new Date().toISOString()
    };

    setRegistrations(prev => [newRegistration, ...prev]);
    return newRegistration;
  };

  const cancelRegistration = (id) => {
    setRegistrations(prev => prev.filter(r => r.id !== id));
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <RegistrationsContext.Provider
      value={{
        registrations,
        addRegistration,
        cancelRegistration,
        isAlreadyRegistered,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        registrationCount: registrations.length
      }}
    >
      {children}
    </RegistrationsContext.Provider>
  );
}

export function useRegistrations() {
  const context = useContext(RegistrationsContext);
  if (!context) {
    throw new Error('useRegistrations must be used within a RegistrationsProvider');
  }
  return context;
}

