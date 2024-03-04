import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  const data = {
    labels: ["Trainer", "Nutritionist", "Trainee", "Both"],
    datasets: [
      {
        data: [30, 20, 30, 20],
        backgroundColor: [
          "rgba(157, 227, 154, 0.6)",
          "rgba(18, 55, 45, 0.8)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <h3 className="fw-bold text-black-custom">FitNee Totalities</h3>
      <div className="d-flex justify-content-center text-black-custom pt-4">
        <div className="d-flex justify-content-center">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default DoughnutChartComponent;
