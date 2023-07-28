import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: '',
    },
  },
  aspectRatio: 1.5,
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: true,
        drawTicks: false,
        tickWidth: 2,
        tickLength: 2
      },
      ticks: {
        padding: 10,
      }
    },
    y: {
      stacked: true,
      grid: {
        drawTicks: false
      },
      ticks: {
        padding: 10,
      }
    }
  },
};

const labels = ['2025', '2026', '2027', '2028', '2029', '2030'];

export const data = {
  labels,
  datasets: [
    {
      label: 'R: Rentabilidad',
      barThickness: 20,
      data: [7, 8, 7, 10, 9, 8],
      backgroundColor: '#6DECB9',
      borderColor: '#1311CD',
      borderWidth: 2,
      borderSkipped: false,
      borderRadius: [
        { topLeft: 0, topRight: 0, bottomLeft: 1000, bottomRight: 1000 },
      ]
    },
    {
      label: 'V: Valorización',
      barThickness: 20,
      data: [7, 7, 7, 9, 12, 13],
      backgroundColor: '#A9D0FC',
      borderColor:'#5452F6',
      borderWidth: 2,
      borderRadius: [
        { topLeft: 1000, topRight: 1000, bottomLeft: 0, bottomRight: 0 },
      ],
      labels: ['year', 'year', 'year', 'yaer', 'year', 'year', 'year']
    },
  ],
};

export function ChartExample() {
  return <Bar options={options} data={data} />;
}