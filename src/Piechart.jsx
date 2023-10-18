import React from 'react';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart() {
    const data = {
        labels: [
          'Red',
          'Yellow'
        ],
        datasets: [{
          label: 'Customers',
          data: [ 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
          ],
          borderAlign:"centre",
          cutout:"50%",
          circumference:270,
          hoverOffset: 4
        }]
      };
    const textCenter={
      id:'text-centre',
      beforeDatasetsDraw(chart,args,pluginOptions){
        const {ctx,data} = chart;

        ctx.save();
        ctx.font="bolder 20px sans-serif";
        ctx.textAlign="center";
        ctx.textbaseline="middle";
        ctx.fillText("65% Total New customers",chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
      }
    }
  return (
    <div className='cont'>
        <h2>Customers</h2>
        <p>Customers that buy products</p>
        <Pie data={data}
        plugins={[textCenter]}
        className='pie-chart'></Pie>
    </div>
  )
}

export default PieChart