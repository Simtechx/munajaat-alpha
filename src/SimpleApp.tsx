// CACHE BREAK v3 - ULTRA-SIMPLE APP
import React from "react";

console.log("🔥 CACHE BREAK v3 - ULTRA-SIMPLE APP LOADING");

function SimpleApp() {
  console.log("🎯 SimpleApp rendering - no hooks, no context, no router");
  
  return React.createElement("div", {
    style: {
      height: "100vh",
      width: "100vw", 
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }
  }, [
    React.createElement("h1", {
      key: "title",
      style: {
        fontSize: "48px",
        color: "#333",
        margin: "0 0 20px 0"
      }
    }, "✅ WORKING APP"),
    React.createElement("p", {
      key: "message", 
      style: {
        fontSize: "24px",
        color: "#666"
      }
    }, "No hooks, no router, no context errors"),
    React.createElement("p", {
      key: "timestamp",
      style: {
        fontSize: "16px",
        color: "#999"
      }
    }, `Loaded at: ${new Date().toLocaleTimeString()}`)
  ]);
}

export default SimpleApp;