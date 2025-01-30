import React, { useState } from 'react';

// Parent Component
function App() {
  const [sharedValue, setSharedValue] = useState(50);

  return (
    <div>
      <h1>Lift State Example</h1>
      <Slider value={sharedValue} onValueChange={setSharedValue} />
      <Display value={sharedValue} />
    </div>
  );
}

function Slider({ value, onValueChange }) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
      />
    </div>
  );
}

// Child Component 2: Display
function Display({ value }) {
  return <h2>Current Value: {value}</h2>;
}

export default App;
