import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function DonationsListPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const changeMonth = (diff) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + diff);
      return newDate;
    });
  };

  useEffect(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) calendarDays.push(null);
    for (let i = 1; i <= lastDate; i++) calendarDays.push(i);

    setDays(calendarDays);
  }, [currentDate]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".relative")) setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const calendarTitle = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="flex items-center text-gray-800 text-2xl font-bold mb-6 space-x-2">
        <span>Donations</span>
        <span className="text-xl text-gray-400 font-normal">&gt;</span>
        <span className="text-xl font-medium text-gray-600">
          List of All donations
        </span>
      </div>

      {/* Date Filter Dropdown Example */}
      {activeDropdown === "dateDropdown" && (
        <div className="dropdown absolute bg-white border mt-2 shadow rounded-lg p-4 w-72 z-50">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => changeMonth(-1)}
              className="text-gray-600 hover:text-black"
            >
              &lt;
            </button>
            <h2 className="text-sm font-medium">{calendarTitle}</h2>
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
            {days.map((day, idx) => (
              <div
                key={idx}
                className={`${
                  day
                    ? "hover:bg-[#003f3f] hover:text-white cursor-pointer"
                    : ""
                } rounded-full p-1`}
              >
                {day || ""}
              </div>
            ))}
          </div>
          <button className="mt-3 w-full bg-[#003f3f] text-white text-sm py-1 rounded">
            Apply Now
          </button>
        </div>
      )}

      {/* Table Section */}
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
            <tr className="border-b">
              <td className="px-4 py-3">04 Sep 2022</td>
              <td className="px-4 py-3">Christine Brooks</td>
              <td className="px-4 py-3">Rs. 2,000</td>
              <td className="px-4 py-3">Education Fund</td>
              <td className="px-4 py-3">Credit Card</td>
              <td className="px-4 py-3">
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">28 May 2022</td>
              <td className="px-4 py-3">Rosie Pearson</td>
              <td className="px-4 py-3">Rs. 2,000</td>
              <td className="px-4 py-3">Health Awareness</td>
              <td className="px-4 py-3">PayPal</td>
              <td className="px-4 py-3">
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                  Processing
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">23 Nov 2023</td>
              <td className="px-4 py-3">Darrell Caldwell</td>
              <td className="px-4 py-3">Rs. 4,000</td>
              <td className="px-4 py-3">Education Fund</td>
              <td className="px-4 py-3">Check</td>
              <td className="px-4 py-3">
                <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">
                  Failed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-sm text-gray-500 px-4 py-2">Showing 1–3 of 78</div>
      </div>
    </DashboardLayout>
  );
}
