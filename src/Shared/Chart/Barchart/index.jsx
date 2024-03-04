import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Set",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Net Profit",
        data: [50, 40, 70, 55, 90, 60, 110, 60, 130, 40, 150, 60],
        backgroundColor: "#E3BD99",
        borderWidth: 1,
      },
      {
        label: "Another Dataset",
        data: [35, 25, 35, 35, 65, 55, 86, 38, 98, 105, 110, 50],
        backgroundColor: "#BB99E3",
        borderWidth: 1,
      },
      {
        label: "Another Dataset",
        data: [30, 20, 40, 35, 70, 50, 90, 45, 100, 30, 120, 40],
        backgroundColor: "#9BE3BD",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-100 text-black-custom">
      <h3 className="fw-bold ">User Trends</h3>
      <Bar options={options} data={data} height="200" />
    </div>
  );
};

export default BarChartComponent;
