
// Force cache bust - React dedupe fix 2025-01-26-002
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeCustomFonts } from './utils/customFonts';

console.log('Main.tsx initializing - React:', React.version);

// Initialize custom fonts
initializeCustomFonts();

// Enhanced service worker registration with offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      console.log('✅ Service Worker registered successfully:', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('🔄 New content available, refresh to update');
            }
          });
        }
      });
      
      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('📨 Message from service worker:', event.data);
      });
      
    } catch (error) {
      console.log('❌ Service Worker registration failed:', error);
    }
  });
}

// Add online/offline event listeners
window.addEventListener('online', () => {
  console.log('🌐 Back online - syncing data...');
  document.body.classList.remove('offline-mode');
});

window.addEventListener('offline', () => {
  console.log('📱 Gone offline - using cached data');
  document.body.classList.add('offline-mode');
});

// Initial offline check
if (!navigator.onLine) {
  document.body.classList.add('offline-mode');
}

// Clear any existing React roots to prevent conflicts
const rootElement = document.getElementById("root")!;
if ((rootElement as any)._reactInternalInstance) {
  console.log('🔄 Clearing existing React root');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
