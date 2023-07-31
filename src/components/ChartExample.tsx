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
import { options } from '../utils/chart';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['2025', '2026', '2027', '2028', '2029', '2030'];

interface BarChartProps {
  title?: string
  labels: {label: string, date: string}[],
  data: {label: string, data: number[]}[]
}

export const initialData = {
  labels,
  datasets: [
    {
      label: 'R: Rentabilidad',
      barThickness: 20,
      data: [0, 0, 0, 0, 0, 0],
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
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: '#A9D0FC',
      borderColor:'#5452F6',
      borderWidth: 2,
      borderRadius: [
        { topLeft: 1000, topRight: 1000, bottomLeft: 0, bottomRight: 0 },
      ],
    },
  ],
};

interface ChartProps {
  title?: string
  dataProp: any
}

export const ChartExample: React.FC<ChartProps> = ({dataProp}) => {

  const [ data, setData ] = useState(initialData)

  useEffect(() => {
    if(initialData) {
      const test = {
        labels: dataProp?.simulation.map((value) => value.year),
        datasets: [
          {
            label: 'R: Rentabilidad',
            barThickness: 20,
            data: dataProp?.simulation.map((value) => value.return),
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
            data: dataProp?.simulation.map((value) => value.appreciation),
            backgroundColor: '#A9D0FC',
            borderColor:'#5452F6',
            borderWidth: 2,
            borderRadius: [
              { topLeft: 1000, topRight: 1000, bottomLeft: 0, bottomRight: 0 },
            ],
          },
        ],
      };
      setData(test)
    }

  }, [dataProp])
  

  return <Bar options={options} data={data} />;
}