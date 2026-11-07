import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { RegistrationsProvider } from './context/RegistrationsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RegistrationsProvider>
        <App />
      </RegistrationsProvider>
    </ThemeProvider>
  </React.StrictMode>
);

