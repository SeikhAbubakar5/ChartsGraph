// Import necessary modules
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "./DailyWise.css";
Chart.register(...registerables);



const DailyWise =({data}) => {
  //if data not exists render message
  if (!data || !data.response_times || (!data.response_times.day_wise)) {
    return <div>No data available</div>;
  }

  // Extract day-wise response times data
 const {day_wise}=data.response_times

 // Extract labels (date) and average response times from day-wise data
  const labels = day_wise.map(e => e.date);
  const averageTimes = day_wise.map(e => e.average_time);
  
  //render line graph components
  return (
    <div className='lineGraph'>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Average Response Time Daily Basis',
              data: averageTimes,
              borderColor: 'rgba(789, 122, 191, 1)',
              fill: false,
            },
          ],
        }}
      />
    </div>
  );
};

export default DailyWise;
