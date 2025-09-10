
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is properly initialized

// Lazy load font initialization for better performance
const initializeCustomFonts = () => import('./utils/customFonts').then(module => module.initializeCustomFonts());

// Initialize custom fonts asynchronously
initializeCustomFonts().catch(() => {}); // Silent fail for font loading

// Enhanced service worker registration with offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available, refresh to update
            }
          });
        }
      });
      
    } catch (error) {
      // Service Worker registration failed - app will still work
    }
  });
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
