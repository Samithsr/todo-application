import React, { useState, useEffect } from 'react';
import Gauge from 'react-gauge-chart';

function CustomGauge() {
  const [value, setValue] = useState(900); // Initial value

  // Simulate data updates (replace with your actual data source)
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update value randomly for demonstration
      setValue(Math.floor(Math.random() * 3000));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const gaugeOptions = {
    // Customize gauge appearance
    needleColor: 'red',
    arcColor: ['#00ff00', '#ffff00', '#ff0000'],
    arcLabels: {
      format: (value) => `${value} kbit/s`,
    },
    max: 3000,
    min: 0,
  };

  return (
    <div>
      <Gauge value={value} options={gaugeOptions} />
    </div>
  );
}

export default CustomGauge;