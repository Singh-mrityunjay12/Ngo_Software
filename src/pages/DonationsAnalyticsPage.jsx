import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import DashboardLayout from "../components/DashboardLayout";

export default function DonationsAnalyticsPage() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
        datasets: [
          {
            label: "Donations",
            data: [1000, 4000, 7000, 16500, 8000, 7200, 1000, 950, 12500, 11500, 10500, 10200, 11200],
            borderColor: "#059669",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            tension: 0.3,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: "#059669",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => "Rs. " + value,
              color: "#6B7280",
              font: { size: 12 },
            },
            grid: { color: "#E5E7EB" },
          },
          x: {
            ticks: { color: "#6B7280", font: { size: 12 } },
            grid: { color: "#F3F4F6" },
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <DashboardLayout> 
      <div className="flex items-center text-gray-800 text-2xl font-bold mb-6 space-x-2">
        <span>Donations</span>
        <span className="text-xl text-gray-400 font-normal">&gt;</span>
        <span className="text-xl font-medium text-gray-600">Donations analytics</span>
      </div>

      <section className="mt-10 bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-gray-500 font-medium">DONATIONS</p>
            <h2 className="text-xl font-bold text-gray-800">INR 20,000</h2>
            <p className="text-sm text-green-500 font-medium">↑ 8.5% vs last month</p>
            <p className="text-xs text-gray-400 mt-1">Donation from 1–30 April, 2025</p>
          </div>
          <div>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-200">
              April 2025 ▼
            </button>
          </div>
        </div>

        <div className="h-64 w-full">
          <canvas ref={chartRef} className="w-full h-full"></canvas>
        </div>
      </section>
 </DashboardLayout>
  );
}
