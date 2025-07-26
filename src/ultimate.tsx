// ULTIMATE CACHE BYPASS v5 - COMPLETELY NEW ENTRY POINT
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log("🚀 ULTIMATE CACHE BYPASS v5 - TIMESTAMP:", new Date().toISOString());

// Completely inline component to avoid any file imports
function UltimateApp() {
  console.log("🎯 UltimateApp rendering - ZERO imports, ZERO hooks, ZERO context");
  
  return React.createElement("div", {
    style: {
      height: "100vh",
      width: "100vw", 
      backgroundColor: "#f8fafc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }
  }, [
    React.createElement("div", {
      key: "success",
      style: {
        fontSize: "72px",
        marginBottom: "20px"
      }
    }, "🎉"),
    React.createElement("h1", {
      key: "title",
      style: {
        fontSize: "48px",
        color: "#0f172a",
        margin: "0 0 20px 0",
        fontWeight: "700"
      }
    }, "CACHE BROKEN!"),
    React.createElement("p", {
      key: "message", 
      style: {
        fontSize: "24px",
        color: "#475569",
        textAlign: "center",
        maxWidth: "600px"
      }
    }, "App running with zero context errors"),
    React.createElement("p", {
      key: "timestamp",
      style: {
        fontSize: "16px",
        color: "#94a3b8",
        marginTop: "20px"
      }
    }, `Loaded: ${new Date().toLocaleString()}`)
  ]);
}

// Initialize custom fonts if available
if (typeof window !== 'undefined' && 'FontFace' in window) {
  console.log('Font loading available');
}

// Service worker registration (simplified)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('✅ Service Worker registered');
    } catch (error) {
      console.log('❌ Service Worker failed:', error);
    }
  });
}

// Render the app
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  React.createElement(StrictMode, {}, React.createElement(UltimateApp))
);