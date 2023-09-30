import React, { useEffect, useRef } from 'react';

const BarChart = () => {
  // Reference to the canvas element
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart.js configuration
    const config = {
      type: 'bar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [10, 15, 8],
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [5, 8, 12],
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Create the chart on the canvas element
    const ctx = chartRef.current.getContext('2d');
    new window.Chart(ctx, config);
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
