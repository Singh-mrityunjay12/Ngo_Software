 import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import DashboardLayout from "../components/DashboardLayout";

function DashboardOverview() {
  const donationChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const donationChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous line chart if exists
    if (donationChartInstance.current) {
      donationChartInstance.current.destroy();
    }

    const ctx = donationChartRef.current.getContext("2d");
    donationChartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
        datasets: [
          {
            label: "Donations",
            data: [
              1000, 4000, 7000, 16500, 8000, 7200, 1000, 950, 12500, 11500,
              10500, 10200, 11200,
            ],
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
        plugins: { legend: { display: false } },
        scales: {
          y: {
            ticks: {
              callback: (value) => `Rs. ${value}`,
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

    return () => donationChartInstance.current?.destroy();
  }, []);

  useEffect(() => {
    // Destroy previous pie chart if exists
    if (pieChartInstance.current) {
      pieChartInstance.current.destroy();
    }

    const pieCtx = pieChartRef.current.getContext("2d");
    pieChartInstance.current = new Chart(pieCtx, {
      type: "doughnut",
      data: {
        labels: ["Education", "Health Care", "Food Distribution", "Other"],
        datasets: [
          {
            data: [40000, 30000, 28000, 10000],
            backgroundColor: ["#fb923c", "#7c3aed", "#22d3ee", "#6b7280"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: Rs. ${ctx.parsed}`,
            },
          },
        },
      },
    });

    return () => pieChartInstance.current?.destroy();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cards */}
        {[
          { title: "Total Donations", value: "Rs.160,689", change: "↑ 8.5% Up from last month" },
          { title: "Total Donors", value: "60+", change: "↑ 6% Up from last year" },
          { title: "Total Volunteers", value: "40+", change: "↑ 18% Up from last year" },
          { title: "Total Campaigns", value: "100+", change: "↑ 20% Up from last month" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500">{item.title}</p>
            <h3 className="text-xl font-bold text-black">{item.value}</h3>
            <p className="text-sm text-green-500 mt-1">{item.change}</p>
          </div>
        ))}
      </div>

      {/* Donation Chart */}
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
          <canvas ref={donationChartRef} className="w-full h-full"></canvas>
        </div>
      </section>

      {/* Campaign-wise and Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">Campaign-wise</p>
              <p className="text-xs text-gray-500">Donation Breakdown</p>
            </div>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200">
              April 2025 ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 mb-4">
              <canvas ref={pieChartRef}></canvas>
            </div>
            <div className="w-full">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="text-xs text-gray-500">
                    <th className="text-left pb-1">TOP CHANNELS</th>
                    <th className="text-right pb-1">VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Education", color: "bg-orange-500", value: "Rs. 40,000" },
                    { label: "Health Care", color: "bg-purple-600", value: "Rs. 30,000" },
                    { label: "Food Distribution", color: "bg-cyan-400", value: "Rs. 28,000" },
                    { label: "Other", color: "bg-gray-500", value: "Rs. 10,000" },
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td className="flex items-center gap-2 py-1">
                        <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                        {item.label}
                      </td>
                      <td className="text-right">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <p className="text-sm font-semibold text-gray-700 mb-4">Quick Links</p>
          <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
            {[
              { text: "Add\nCampaign", bg: "bg-purple-500", border: "border-purple-200" },
              { text: "View\nReports", bg: "bg-cyan-400", border: "border-cyan-200" },
              { text: "Create\nEvent", bg: "bg-orange-400", border: "border-orange-200" },
            ].map((btn, idx) => (
              <button
                key={idx}
                className={`w-32 h-32 rounded-full text-white ${btn.bg} hover:brightness-110 font-semibold text-center shadow-md relative whitespace-pre-line`}
              >
                {btn.text}
                <span
                  className={`absolute -bottom-1 left-0 right-0 w-full h-full border-2 ${btn.border} rounded-full`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardOverview;
