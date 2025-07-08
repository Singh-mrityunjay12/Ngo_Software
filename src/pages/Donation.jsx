// File: Donations.jsx
import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
// Optional: external styles for calendar if needed

function Donations() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleDropdown = (id) => {
    setShowDropdown((prev) => (prev === id ? null : id));
  };

  const changeMonth = (diff) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + diff);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const days = [];
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) days.push(<div key={`e${i}`}></div>);
    for (let i = 1; i <= lastDate; i++) {
      days.push(
        <div
          key={i}
          className="hover:bg-[#003f3f] hover:text-white rounded-full p-1 cursor-pointer"
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return ( 
    
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Donations</h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-between items-center bg-white shadow rounded-lg px-4 py-3 mb-6 relative z-10">
        <div className="flex flex-wrap items-center gap-3 relative">
          {/* Filter By */}
          <button className="flex items-center px-3 py-2 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h18M3 10h18M3 16h18"
              />
            </svg>
            Filter By
          </button>

          {/* Date Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("date")}
              className="px-3 py-2 bg-gray-100 rounded text-sm flex items-center gap-1"
            >
              Date
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {showDropdown === "date" && (
              <div className="absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="text-gray-600 hover:text-black"
                  >
                    &lt;
                  </button>
                  <h2 className="text-sm font-medium">
                    {currentDate.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <button
                    onClick={() => changeMonth(1)}
                    className="text-gray-600 hover:text-black"
                  >
                    &gt;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-700 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-800">
                  {renderCalendar()}
                </div>
                <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">
                  Apply Now
                </button>
              </div>
            )}
          </div>

          {/* Other dropdowns like Campaign, Status can be added similarly */}

          <button className="text-red-500 text-sm font-medium hover:underline flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Reset Filter
          </button>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="text-gray-500 hover:text-black">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="bg-gray-200 text-sm px-3 py-2 rounded">
            EXPORT ⬇
          </button>
        </div>
      </div>

      {/* Donation Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-50 text-gray-600 font-semibold border-b">
            <tr>
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">NAME</th>
              <th className="px-4 py-3">AMOUNT</th>
              <th className="px-4 py-3">CAMPAIGN</th>
              <th className="px-4 py-3">PAYMENT METHOD</th>
              <th className="px-4 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              {
                date: "04 Sep 2022",
                name: "Christine Brooks",
                amount: "Rs. 2,000",
                campaign: "Education Fund",
                method: "Credit Card",
                status: "Completed",
                statusColor: "green",
              },
              {
                date: "28 May 2022",
                name: "Rosie Pearson",
                amount: "Rs. 2,000",
                campaign: "Health Awareness",
                method: "PayPal",
                status: "Processing",
                statusColor: "purple",
              },
              {
                date: "23 Nov 2023",
                name: "Darrell Caldwell",
                amount: "Rs. 4,000",
                campaign: "Education Fund",
                method: "Check",
                status: "Failed",
                statusColor: "red",
              },
            ].map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="px-4 py-3">{row.campaign}</td>
                <td className="px-4 py-3">{row.method}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs bg-${row.statusColor}-200 text-${row.statusColor}-800 px-2 py-1 rounded-full`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-gray-500 px-4 py-2">Showing 1–3 of 78</div>
      </div>
 
      {/* You can paste the Offline Donation Form section below here in JSX next */} 
       {/* Offline Donation Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white w-full p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Offline Donation Form</h2>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Donor Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Donor Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name:</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email Address:</label>
                  <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone Number:</label>
                  <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Mailing Address:</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
              </div>
            </div>

            {/* Donation Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Donation Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Campaign:</label>
                  <select className="w-full border border-gray-300 rounded px-4 py-2">
                    <option>-- Select Campaign --</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Donation Amount (Rs):</label>
                  <input type="number" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Payment Method:</label>
                  <select className="w-full border border-gray-300 rounded px-4 py-2">
                    <option>-- Select Method --</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Donation Date:</label>
                  <input type="date" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
              </div>
            </div>
          </form>

          {/* Status */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 mb-2">Status (Admin Only)</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center gap-2"><input type="radio" name="status" /> Received</label>
              <label className="flex items-center gap-2"><input type="radio" name="status" /> Pending</label>
              <label className="flex items-center gap-2"><input type="radio" name="status" /> Completed</label>
              <label className="flex items-center gap-2"><input type="radio" name="status" /> Failed</label>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button className="bg-[#003f3f] text-white px-6 py-2 rounded hover:bg-[#005f5f]">
              Submit Donation
            </button>
          </div>
        </div> 
        
      </section>
    </DashboardLayout> 
   
  );
}

export default Donations;
