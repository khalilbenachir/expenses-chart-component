import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { data } from "../../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  cornerRadius: 20,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

export const chartData = {
  labels: data.map((e) => e.day),
  datasets: [
    {
      data: data.map((e) => e.amount),
      backgroundColor: data.map((e) => e.color),
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

export const Chart = () => {
  return <Bar options={options} data={chartData} />;
};
