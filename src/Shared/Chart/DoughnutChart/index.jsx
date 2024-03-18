import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  if (!data) return null;

  return (
    <div className="h-100">
      <h4 className="fw-bold text-black-custom">FitNee Totalities</h4>
      <div className="d-flex justify-content-center text-black-custom pt-4">
        <div style={{ width: "100%", height: "350px" }}>
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
