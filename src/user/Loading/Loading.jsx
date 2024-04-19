import React, { useState, useEffect } from 'react';
import Load from './Load';
import Home from '../Home/Home';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Load/> : <Home/>}
    </div>
  );
}

export default Loading;