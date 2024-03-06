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

const BarChartComponent = ({ data, options }) => {
  return (
    <div className="h-100 text-black-custom">
      <Bar options={options} data={data} height="200" />
    </div>
  );
};

export default BarChartComponent;
