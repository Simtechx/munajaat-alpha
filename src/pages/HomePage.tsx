// CACHE BREAK v3 - ZERO HOOKS
import React from "react";

const HomePage = () => {
  console.log("CACHE BREAK v3 - HomePage loaded with ZERO hooks");
  
  return React.createElement("div", {
    style: { 
      backgroundColor: 'lightblue', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      fontWeight: 'bold'
    }
  }, "CACHE BREAK v3 - NO HOOKS HomePage");
};

export default HomePage;