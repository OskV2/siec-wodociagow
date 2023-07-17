import React, { useState } from 'react';
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import "./WaterworksChart.scss";

import Switch from "../Switch/Switch";

import BarWhite from "../../img/bar-chart-white.svg";
import BarBlack from "../../img/bar-chart-black.svg";
import PieWhite from "../../img/pie-chart-white.svg";
import PieBlack from "../../img/pie-chart-black.svg";

Chart.register(...registerables);

const WaterworksChart = () => {
  const [chartType, setChartType] = useState(true); // true = bar, false = pie

  const dummyData = {
    data: [
      {
        name: "Oczyszczalnia Wielka",
        type: "OCZYSZCZALNIA",
        date: "1999-07-11T23:20:21.817Z",
        state: "OK",
      },
      {
        name: "Źródło czerwone",
        type: "ŹRÓDŁO",
        date: "2020-05-12T23:50:21.817Z",
        state: "ERROR",
      },
      {
        name: "Stacja przesyłowa",
        type: "STACJA",
        date: "2017-02-14T23:53:21.817Z",
        state: "OK",
      },
      {
        name: "Oczyszczalnia mała",
        type: "OCZYSZCZALNIA",
        date: "2002-12-12T23:50:21.817Z",
        state: "OK",
      },
      {
        name: "Źródło zielone",
        type: "ŹRÓDŁO",
        date: "2021-05-22T23:50:21.817Z",
        state: "ERROR",
      },
    ]
  };

  const countDevicesByType = (data) => {
    const counts = [];

    data.forEach((item) => {
      const { type } = item;
      counts[type] = (counts[type] || 0) + 1;
    });

    return counts;
  };

  const deviceCounts = countDevicesByType(dummyData.data);
  console.log(deviceCounts)

  const chartData = {
    labels: Object.keys(deviceCounts),
    datasets: [
      {
        label: "Ilość urządzeń",
        data: Object.values(deviceCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // First column color
          'rgba(54, 162, 235, 0.2)', // Second column color
          'rgba(75, 192, 192, 0.2)', // Third column color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // First column border color
          'rgba(54, 162, 235, 1)', // Second column border color
          'rgba(75, 192, 192, 1)', // Third column border color
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: "top"
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true
        },
        ticks: {
          precision: 0
        }
      }
    },
    height: 300,
  };
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2 className="chart__title">Wykres</h2>
        <Switch
          isOn={chartType}
          handleToggle={() => setChartType(!chartType)}
          imgOneWhite={BarWhite}
          imgOneBlack={BarBlack}
          imgTwoWhite={PieWhite}
          imgTwoBlack={PieBlack}
        />
      </div>
      <div className="chart">
        {chartType && <Bar data={chartData} options={chartOptions} className="chart" />}
        {!chartType && <Pie data={chartData} options={chartOptions} className="chart" />}
      </div>
    </>
  );
};

export default WaterworksChart;
