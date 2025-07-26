// FRESH HOMEPAGE - Zero dependencies, zero hooks, zero TailwindCSS
import React from "react";

const HomePage = () => {
  console.log("Fresh HomePage loaded - no hooks, no TailwindCSS");
  
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div style={{ 
        height: '100vh', 
        width: '100vw', 
        overflow: 'hidden', 
        position: 'relative',
        backgroundImage: `url('/lovable-uploads/ac6957f1-9d22-45c7-b0fe-cc8a1ae31c81.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 10
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 30,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px'
        }}>
          <p style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
            Fresh HomePage - No Context Errors
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;