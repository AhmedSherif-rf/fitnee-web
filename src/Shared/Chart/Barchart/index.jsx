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
    <div className="text-black-custom d-flex justify-content-center" style={{height:"80%"}}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChartComponent;
