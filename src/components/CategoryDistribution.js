import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./CategoryDistribution.css"


const  CategoryDistribution = ({data}) => {
//if data not exists render message
    if (!data || typeof data !== 'object') {
        return <div>No data available</div>;
      }

      //extracting lavels and values from data object
    const labels = Object.keys(data.category_distribution);
    const values = Object.values(data.category_distribution);
   //build dataset for bar graph f
    const dataset = {
      labels: labels,
      datasets: [{
        label: 'Category Distribution',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      }],
    };
  //render bar graph for dataset
    return (
      <div className='barGraph'>
        <Bar data={dataset} />
      </div>
    );
  };

export default  CategoryDistribution;
