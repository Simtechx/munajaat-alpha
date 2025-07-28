import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './MainApp.tsx';
import './index.css';
import { initializeCustomFonts } from './utils/customFonts';

console.log("🔥 MAIN.TSX LOADING - TIMESTAMP:", new Date().toISOString());
console.log("🔍 MAIN.TSX: React available?", !!React);
console.log("🔍 MAIN.TSX: React.version:", React.version);

// Initialize custom fonts
initializeCustomFonts();

// Enhanced service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      console.log('✅ Service Worker registered successfully');
      
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
      
    } catch (error) {
      console.log('❌ Service Worker registration failed:', error);
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

// Render the app
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);