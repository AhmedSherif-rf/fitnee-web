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
    <div style={{ width: "100%", height: "350px" }}>
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChartComponent;
