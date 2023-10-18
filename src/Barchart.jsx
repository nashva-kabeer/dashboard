import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


function BarChart() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    const data = {
      labels: labels,
      datasets: [
        { label: 'Earnings',
          backgroundColor:[ "white","white","white","white","white","white","white","blue","white","white","white","white",],
          grid:{display:false},
          data: [30, 20, 50, 40, 45, 10, 45, 50, 48, 43, 40, 43],
        },
      ],
    };
    const options = {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    };

    return (
      <div className='cont'>
        <h2>Overview</h2><span><select className='drop'>
          <option value="Quaterly">Quaterly</option>
          <option value="Halfyearly">Halfyearly</option>
          <option value="Annualy">Annualy</option>
          </select></span>
        <p>Monthly Earnings</p>
        <Bar data={data} options={options}/>
      </div>
    );
}

export default BarChart