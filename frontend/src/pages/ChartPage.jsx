import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Footer from '../components/Footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Line Chart – Mood Over the Week
const moodData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Mood Level',
      data: [3, 4, 2, 5, 4, 3, 5],
      borderColor: '#00e5ff',
      backgroundColor: '#00e5ff',
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

// Pie Chart – Mood Distribution
const moodDistribution = {
  labels: ['Happy', 'Neutral', 'Sad'],
  datasets: [
    {
      label: 'Mood Distribution',
      data: [5, 2, 3],
      backgroundColor: ['#00e5ff', '#ffc107', '#e91e63'],
      borderColor: ['#00acc1', '#ffb300', '#d81b60'],
      borderWidth: 1,
    },
  ],
};

// Bar Chart – Weekly Check-ins
const checkInData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Check-ins',
      data: [1, 2, 0, 1, 2, 1, 1],
      backgroundColor: '#00e5ff',
      borderRadius: 10,
    },
  ],
};

// Chart.js options
const chartOptions = (title) => ({
  responsive: true,
  plugins: {
    legend: { labels: { color: '#ffffff' } },
    title: {
      display: true,
      text: title,
      color: '#ffffff',
      font: { size: 20 },
    },
  },
  scales: {
    x: { ticks: { color: '#ffffff' } },
    y: { ticks: { color: '#ffffff' } },
  },
});

const ChartPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-10 flex flex-col gap-12 items-center bg-transparent z-10">

      {/* Line Chart */}
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
        <Line data={moodData} options={chartOptions('Mood Over the Week')} />
      </div>

      {/* Side-by-side Pie and Bar Charts */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl justify-center items-center">

        {/* Pie Chart */}
        <div className="w-full lg:w-1/2 max-w-md bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
          <Pie data={moodDistribution} options={chartOptions('Mood Distribution')} />
        </div>

        {/* Bar Chart */}
        <div className="w-full lg:w-1/2 max-w-md bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
          <Bar data={checkInData} options={chartOptions('Weekly Check-ins')} />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ChartPage;






