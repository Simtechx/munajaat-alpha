// ULTIMATE CACHE BYPASS v5 - COMPLETELY NEW ENTRY POINT
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log("🚀 ULTIMATE CACHE BYPASS v5 - TIMESTAMP:", new Date().toISOString());

// Main app component with proper functionality
function UltimateApp() {
  console.log("🎯 UltimateApp rendering - checking everything");
  console.log("🎯 React.createElement available:", typeof React.createElement);
  console.log("🎯 Window dimensions:", window.innerWidth, "x", window.innerHeight);
  
  return React.createElement("div", {
    style: { backgroundColor: 'white', minHeight: '100vh' }
  }, React.createElement("div", {
    style: { 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      position: 'relative',
      backgroundColor: '#f3f4f6',
      backgroundImage: `url('/lovable-uploads/ac6957f1-9d22-45c7-b0fe-cc8a1ae31c81.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }, [
    // Overlay
    React.createElement("div", {
      key: "overlay",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 10
      }
    }),
    
    // Content
    React.createElement("div", {
      key: "content",
      style: {
        position: 'relative',
        zIndex: 30,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px'
      }
    }, [
      // Welcome section
      React.createElement("div", {
        key: "welcome",
        style: {
          marginBottom: '40px',
          textAlign: 'center'
        }
      }, React.createElement("div", {
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '3px solid #555c66',
          maxWidth: '512px',
          margin: '0 auto'
        }
      }, [
        React.createElement("h1", {
          key: "title",
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px'
          }
        }, "Welcome"),
        React.createElement("p", {
          key: "subtitle",
          style: {
            fontSize: '20px',
            color: '#6b7280',
            fontWeight: '500'
          }
        }, "Choose your spiritual journey")
      ])),
      
      // Options section
      React.createElement("div", {
        key: "options",
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1152px',
          width: '100%'
        }
      }, [
        // Munajaat option
        React.createElement("div", {
          key: "munajaat",
          onClick: () => window.location.href = '/munajaat',
          style: {
            cursor: 'pointer',
            transition: 'transform 0.2s',
            width: '100%',
            maxWidth: '448px',
            height: '192px'
          },
          onMouseEnter: (e) => e.currentTarget.style.transform = 'scale(1.02)',
          onMouseLeave: (e) => e.currentTarget.style.transform = 'scale(1)'
        }, React.createElement("div", {
          style: {
            position: 'relative',
            height: '100%',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '3px solid #fbbf24',
            overflow: 'hidden',
            backgroundColor: '#735b40'
          }
        }, React.createElement("div", {
          style: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px'
          }
        }, [
          React.createElement("div", {
            key: "logo",
            style: { flexShrink: 0 }
          }, React.createElement("div", {
            style: {
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }
          }, React.createElement("img", {
            src: "/lovable-uploads/118cbec6-a67a-4dc1-8f3a-abd890caaec2.png",
            alt: "Munajaat-e-Maqbool Logo",
            style: {
              width: '64px',
              height: '64px',
              objectFit: 'contain'
            }
          }))),
          React.createElement("div", {
            key: "text",
            style: { flex: 1, marginLeft: '16px' }
          }, React.createElement("div", {
            style: {
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#d2cabf',
              color: '#4a3d2a'
            }
          }, [
            React.createElement("h2", {
              key: "title",
              style: {
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '8px',
                textAlign: 'center',
                lineHeight: '1.2'
              }
            }, "MUNAJAAT E MAQBOOL"),
            React.createElement("div", {
              key: "divider",
              style: {
                width: '100%',
                height: '1px',
                backgroundColor: '#735b40',
                margin: '8px 0'
              }
            }),
            React.createElement("p", {
              key: "author",
              style: {
                fontSize: '14px',
                textAlign: 'center',
                opacity: 0.9,
                lineHeight: '1.2'
              }
            }, "Hazrat Maulana Ashraf Ali Thanvi (R.A)")
          ]))
        ]))),
        
        // Hizbul Bahr option
        React.createElement("div", {
          key: "hizbul",
          onClick: () => window.location.href = '/hizbul-bahr',
          style: {
            cursor: 'pointer',
            transition: 'transform 0.2s',
            width: '100%',
            maxWidth: '448px',
            height: '192px'
          },
          onMouseEnter: (e) => e.currentTarget.style.transform = 'scale(1.02)',
          onMouseLeave: (e) => e.currentTarget.style.transform = 'scale(1)'
        }, React.createElement("div", {
          style: {
            position: 'relative',
            height: '100%',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '3px solid #fbbf24',
            overflow: 'hidden',
            backgroundColor: 'rgb(51, 65, 85)'
          }
        }, React.createElement("div", {
          style: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px'
          }
        }, [
          React.createElement("div", {
            key: "text",
            style: { flex: 1, marginRight: '16px' }
          }, React.createElement("div", {
            style: {
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              color: 'white',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }
          }, [
            React.createElement("h2", {
              key: "title",
              style: {
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '8px',
                textAlign: 'center',
                lineHeight: '1.2'
              }
            }, "HIZBUL BAHR"),
            React.createElement("div", {
              key: "divider",
              style: {
                width: '100%',
                height: '1px',
                backgroundColor: '#fbbf24',
                margin: '8px 0'
              }
            }),
            React.createElement("p", {
              key: "author",
              style: {
                fontSize: '14px',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.2'
              }
            }, "Shaykh Abul Hasan ash-Shadhili")
          ])),
          React.createElement("div", {
            key: "logo",
            style: { flexShrink: 0 }
          }, React.createElement("div", {
            style: {
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }
          }, React.createElement("img", {
            src: "/lovable-uploads/53eaf063-25d7-445e-80b0-ef9d97981a33.png",
            alt: "Hizbul Bahr Logo",
            style: {
              width: '64px',
              height: '64px',
              objectFit: 'contain'
            }
          })))
        ])))
      ]),
      
      // Copyright
      React.createElement("div", {
        key: "copyright",
        style: {
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30
        }
      }, React.createElement("div", {
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '8px 16px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: '2px solid #555c66'
        }
      }, React.createElement("p", {
        style: {
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          lineHeight: '1.2',
          margin: 0
        }
      }, "© 2026 Munajaat.com • Simtech W. All rights reserved.")))
    ])
  ]));
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