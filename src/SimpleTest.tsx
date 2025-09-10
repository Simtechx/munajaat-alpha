import React, { useEffect } from 'react';

const SimpleTest = () => {
  useEffect(() => {
    console.log('SimpleTest useEffect working');
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
      <h1>Simple React Test</h1>
      <p>If you see this, React is working!</p>
    </div>
  );
};

export default SimpleTest;