
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is properly initialized
console.log('React version in main.tsx:', React.version);

// Lazy load font initialization for better performance
const initializeCustomFonts = () => import('./utils/customFonts').then(module => module.initializeCustomFonts());

// Initialize custom fonts when the browser is idle to avoid blocking first paint
if ('requestIdleCallback' in window) {
  (window as any).requestIdleCallback(() => {
    initializeCustomFonts().catch(() => {});
  });
} else {
  setTimeout(() => {
    initializeCustomFonts().catch(() => {});
  }, 0);
}

// Service worker handling
// - In development: make sure no old SW serves cached content
// - In production: register the SW for offline capabilities
if ('serviceWorker' in navigator) {
  if (import.meta.env.DEV) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        registrations.forEach(reg => {
          reg.unregister().catch(() => {});
        });
      })
      .catch(() => {});
  }

  if (import.meta.env.PROD) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available, refresh to update (optional)
              }
            });
          }
        });
      } catch (error) {
        // Service Worker registration failed - app will still work
      }
    });
  }
}

// Add online/offline event listeners
window.addEventListener('online', () => {
  document.body.classList.remove('offline-mode');
});

window.addEventListener('offline', () => {
  document.body.classList.add('offline-mode');
});

// Initial offline check
if (!navigator.onLine) {
  document.body.classList.add('offline-mode');
}

// Get root element
const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
