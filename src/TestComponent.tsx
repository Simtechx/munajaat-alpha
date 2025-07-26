import React from 'react';

export default function TestComponent() {
  console.log('TestComponent rendering successfully');
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Hello World - Testing</h1>
      <p>If you see this, React is working correctly!</p>
      <p className="text-sm text-gray-600 mt-2">This is a minimal test component</p>
    </div>
  );
}