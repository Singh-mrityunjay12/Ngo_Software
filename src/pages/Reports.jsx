 import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import DashboardLayout from '../components/DashboardLayout';

const Reports = () => {
  const chartRef = useRef(null);
  const [dropdowns, setDropdowns] = useState({
    date: false,
    campaign: false,
    donor: false,
    volunteer: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Prevent error: canvas is already in use
    const existingChart = Chart.getChart(ctx);
    if (existingChart) existingChart.destroy();

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 13 }, (_, i) => `${i + 1}`),
        datasets: [
          {
            label: "Donations",
            data: [
              1000, 4000, 7000, 16500, 8000, 7200, 1000, 950,
              12500, 11500, 10500, 10200, 11200,
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
      chartInstance.destroy();
    };
  }, []);

  return (
 
       <DashboardLayout>
       <h1 className="text-2xl font-bold text-gray-800 mb-6">Reports</h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center bg-white shadow rounded-lg px-4 py-3 mb-6 relative z-10">
        <div className="flex flex-wrap items-center gap-3 relative">
          {/* Filter Button */}
          <button className="flex items-center px-3 py-2 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M3 10h18M3 16h18" />
            </svg>
            Filter By
          </button>

          {/* Date Filter */}
          <div className="relative">
            <button onClick={() => toggleDropdown('date')} className="px-3 py-2 bg-gray-100 rounded text-sm flex items-center gap-1">
              Date
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdowns.date && (
              <div className="absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
                <p className="text-sm">Calendar UI (Placeholder)</p>
                <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">Apply Now</button>
              </div>
            )}
          </div>

          {/* Campaign Filter */}
          <div className="relative">
            <button onClick={() => toggleDropdown('campaign')} className="px-3 py-2 bg-gray-100 rounded text-sm flex items-center gap-1">
              Campaigns
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdowns.campaign && (
              <div className="absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Education Fund", "Health Awareness", "Disaster Relief", "Clean Water Project", "Mental Access"].map(item => (
                    <span key={item} className="px-3 py-1 border rounded-full bg-gray-100 hover:bg-[#003f3f] hover:text-white cursor-pointer">{item}</span>
                  ))}
                </div>
                <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">Apply Now</button>
              </div>
            )}
          </div>

          {/* Donor Filter */}
          <div className="relative">
            <button onClick={() => toggleDropdown('donor')} className="px-3 py-2 bg-gray-100 rounded text-sm flex items-center gap-1">
              Donor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdowns.donor && (
              <div className="absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
                {["Completed", "Processing", "Failed", "In Transit", "Other"].map(status => (
                  <span key={status} className="px-3 py-1 border rounded-full bg-gray-100 hover:bg-green-500 hover:text-white cursor-pointer">{status}</span>
                ))}
                <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">Apply Now</button>
              </div>
            )}
          </div>

          {/* Volunteer Filter */}
          <div className="relative">
            <button onClick={() => toggleDropdown('volunteer')} className="px-3 py-2 bg-gray-100 rounded text-sm flex items-center gap-1">
              Volunteer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdowns.volunteer && (
              <div className="absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
                {["Completed", "Processing", "Failed", "In Transit", "Other"].map(status => (
                  <span key={status} className="px-3 py-1 border rounded-full bg-gray-100 hover:bg-green-500 hover:text-white cursor-pointer">{status}</span>
                ))}
                <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">Apply Now</button>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="bg-gray-200 text-sm px-3 py-2 rounded">EXPORT ⬇</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-50 text-gray-600 font-semibold border-b">
            <tr>
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">DONOR</th>
              <th className="px-4 py-3">VOLUNTEER</th>
              <th className="px-4 py-3">CAMPAIGN</th>
              <th className="px-4 py-3">DOWNLOAD</th>
              <th className="px-4 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              { date: "04 Sep 2022", donor: "Christine Brooks", volunteer: "Rosie merry", campaign: "Education Fund", status: "Completed", color: "green" },
              { date: "28 May 2022", donor: "Rosie Pearson", volunteer: "Rosie merry", campaign: "Health Awareness", status: "Processing", color: "purple" },
              { date: "23 Nov 2023", donor: "Darrell Caldwell", volunteer: "Rosie merry", campaign: "Education Fund", status: "Failed", color: "red" },
            ].map((row, index) => (
              <tr className="border-b" key={index}>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">{row.donor}</td>
                <td className="px-4 py-3">{row.volunteer}</td>
                <td className="px-4 py-3">{row.campaign}</td>
                <td className="px-4 py-3 text-blue-600 font-medium cursor-pointer">[Download]</td>
                <td className="px-4 py-3">
                  <span className={`text-xs bg-${row.color}-200 text-${row.color}-800 px-2 py-1 rounded-full`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-gray-500 px-4 py-2">Showing 1–3 of 78</div>
      </div>

      {/* Summary */}
      <div className="flex items-center text-gray-800 text-2xl font-bold mt-4 space-x-2">
        <span>Donations Summary</span>
      </div>

      {/* Chart Section */}
      <section className="mt-10 bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-gray-500 font-medium">DONATIONS</p>
            <h2 className="text-xl font-bold text-gray-800">INR 20,000</h2>
            <p className="text-sm text-green-500 font-medium">↑ 8.5% vs last month</p>
            <p className="text-xs text-gray-400 mt-1">Donation from 1–30 April, 2025</p>
          </div>
          <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-200">
            April 2025 ▼
          </button>
        </div>

        <div className="h-64 w-full">
          <canvas ref={chartRef} className="w-full h-full" />
        </div>
      </section>
  </DashboardLayout>
  
  );
};

export default Reports;

 