import React from 'react';
import "./WeekWise.css";
import { Line } from 'react-chartjs-2';
const WeekWise = ({data}) => {
  //if data not exists render message
  if(!data || !data.response_times || (!data.response_times.week_wise)){
    return <div>No data available</div>;
  }
// Extract week-wise response times data
  const {week_wise}= data.response_times
  // Extract labels (week) and average response times from week-wise data
  const labels= week_wise.map(e=>e.week)
  const averageTimes= week_wise.map(e=>e.average_time)

    //render line graph components
  return (
    <div className='lineGraphs'>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Average Response Time Weekly Basis',
              data: averageTimes,
              borderColor: 'rgba(70, 13, 1978, 1)',
              fill: false,
            },
          ],
        }}
      />
    </div>
  
  );
}

export default WeekWise;
