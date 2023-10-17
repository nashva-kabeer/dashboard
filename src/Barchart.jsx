import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


function BarChart() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    const data = {
      labels: labels,
      datasets: [
        { label: 'Overview',
          backgroundColor: "blue",
          borderColor: "black",
          data: [30, 20, 50, 40, 45, 10, 45, 50, 48, 43, 40, 43],
        },
      ],
    };
    return (
      <div>
        <Bar data={data}/>
      </div>
    );
}

export default BarChart