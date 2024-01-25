import React, { useState, useMemo } from 'react';

const SimpleMemoExample = () => {
  // State to hold a number
  const [number, setNumber] = useState(0);

  // Memoized function that doubles the number
  const doubleNumber = useMemo(() => {
    return number * 2;
  }, [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Double: {doubleNumber}</p>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>
        Increment Number
      </button>
    </div>
  );
};

export default SimpleMemoExample;