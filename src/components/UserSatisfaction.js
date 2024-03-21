import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./UserSatisfaction.css"
const UserSatisfaction = ({data}) => {
   //if data not exists render message
    if (!data || !data.user_satisfaction || (!data.user_satisfaction.ratings)) {
        return <div>No data available</div>;
      }

      // Extract ratings user-satisfaction data
      const {ratings}= data.user_satisfaction;

       // Extract labels (ratings) and count from user_satisfaction data
      const labels = ratings.map(entry => entry.rating);
      const count = ratings.map(entry => entry.count);

        
       //render line graph components
  return (
    <div className='pieChat' >
      <Pie
        data={{
            labels:labels,
            datasets :[
                {
                    label: 'User Satisfaction Ratings',
                    data: count,
                    backgroundColor: [
                    'rgba(35, 20, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                }
            ]
        }}
      />
    </div>
  );
}

export default UserSatisfaction;
