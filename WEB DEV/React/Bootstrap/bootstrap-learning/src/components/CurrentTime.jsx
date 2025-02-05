import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      The current date is: {time.toLocaleDateString()} And the time is :{" "}  
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
