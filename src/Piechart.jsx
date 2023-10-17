import React from 'react';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [0, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          borderAlign:"centre",
          hoverOffset: 4
        }]
      };
  return (
    <div>
        <Pie data={data} className='pie-chart'/>
    </div>
  )
}

export default PieChart