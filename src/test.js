import React from 'react';
import './App.css';
import { Bar, Pie } from 'react-chartjs-2';

function Apps() {
  const barData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [{
      label: 'Data',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56]
    }]
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      data: [12, 19, 3, 5, 2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF57', '#A033FF'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF57', '#A033FF']
    }]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
      </header>
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <h2>Welcome to the Dashboard!</h2>
        <div className="chart-container">
          <div className="chart">
            <h3>Bar Chart</h3>
            <Bar data={barData} />
          </div>
          <div className="chart">
            <h3>Pie Chart</h3>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
