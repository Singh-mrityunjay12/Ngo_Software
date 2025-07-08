// DonorInformationPage.jsx
import { useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function DonorInformationPage() {
  useEffect(() => {
    renderCalendar();
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".relative")) {
        document.querySelectorAll(".dropdown").forEach((el) => el.classList.add("hidden"));
      }
    });
  }, []);

  const toggleDropdown = (id) => {
    document.querySelectorAll(".dropdown").forEach((el) => {
      if (el.id !== id) el.classList.add("hidden");
    });
    const el = document.getElementById(id);
    el?.classList.toggle("hidden");
  };

  let currentDate = new Date();

  const renderCalendar = (date = new Date()) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysEl = document.getElementById("calendarDays");
    const title = document.getElementById("calendarTitle");

    if (title && daysEl) {
      title.textContent = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(date);

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      daysEl.innerHTML = "";
      for (let i = 0; i < firstDay; i++) {
        daysEl.innerHTML += "<div></div>";
      }
      for (let i = 1; i <= lastDate; i++) {
        daysEl.innerHTML += `<div class='hover:bg-[#003f3f] hover:text-white rounded-full p-1 cursor-pointer'>${i}</div>`;
      }
    }
  };

  const changeMonth = (diff) => {
    currentDate.setMonth(currentDate.getMonth() + diff);
    renderCalendar(currentDate);
  };

  return ( 
       <DashboardLayout>
       {/* Breadcrumb */}
      <div className="flex items-center text-gray-800 text-2xl font-bold mb-6 space-x-2">
        <span>Donors</span>
        <span className="text-xl text-gray-400 font-normal">&gt;</span>
        <span className="text-xl font-medium text-gray-600">Donor Information</span>
      </div>

      {/* Donor Overview */}
      <div className="bg-[#f6f7fb] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="flex flex-col lg:flex-row gap-6 flex-1">
          <img src="/images/organisation/christ-donor.jpg" alt="Profile" className="w-48 h-48 object-cover rounded-lg" />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Christine Brooks</h2>
              <p className="text-sm text-gray-700 mt-2 max-w-md leading-relaxed">
                Christine Brooks is a dedicated and compassionate donor who has been actively contributing to social causes since early 2023. With a strong interest in healthcare, education, and relief projects, He regularly supports non-profit campaigns that focus on improving community well-being.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="bg-[#004f4f] hover:bg-[#003f3f] text-white text-sm px-5 py-2 rounded">MESSAGE</button>
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded">SUSPENDED</button>
            </div>
          </div>
        </div>

        <div className="border-l pl-6 text-sm text-gray-800 space-y-2">
          <p><span className="font-semibold">Donor ID:</span> DN-02345</p>
          <p><span className="font-semibold">Email:</span> christinerooks@gmail.com</p>
          <p><span className="font-semibold">Address:</span> 123, Green Valley, Bhopal, MP</p>
          <p><span className="font-semibold">Phone:</span> +1-555-123-4567</p>
          <p><span className="font-semibold">Status:</span> Active</p>
          <p><span className="font-semibold">Join Date:</span> 10 Jan 2023</p>
        </div>
      </div>

      {/* Past Donations Table */}
      <div className="bg-[#f6f7fb] rounded-md mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Past Donations</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">DATE</th>
                <th className="px-4 py-3 whitespace-nowrap">CAMPAIGN NAME</th>
                <th className="px-4 py-3 whitespace-nowrap">AMOUNT DONATED</th>
                <th className="px-4 py-3 whitespace-nowrap">PAYMENT METHOD</th>
                <th className="px-4 py-3 whitespace-nowrap">RECEIPT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["02-May-2025", "Health Awareness Drive", "Rs. 3,500", "UPI"],
                ["15-Mar-2025", "Food Relief Fund", "Rs. 2,500", "UPI"],
                ["27-Jan-2025", "Winter Shelter Project", "Rs. 5,000", "Credit Card"],
                ["20-Feb-2024", "Health Awareness Drive", "Rs. 4,500", "Credit Card"],
                ["18-Apr-2024", "Food Relief Fund", "Rs. 6,000", "Net Banking"]
              ].map(([date, campaign, amount, method], i) => (
                <tr key={i}>
                  <td className="px-4 py-3">{date}</td>
                  <td className="px-4 py-3">{campaign}</td>
                  <td className="px-4 py-3">{amount}</td>
                  <td className="px-4 py-3">{method}</td>
                  <td className="px-4 py-3 text-blue-600 font-medium cursor-pointer">[View]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents & Notes */}
      <div className="bg-[#f6f7fb] rounded-md mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Documents */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Documents</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 text-gray-600 font-semibold">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">DOCUMENT TYPE</th>
                  <th className="px-4 py-3 whitespace-nowrap">UPLOADED ON</th>
                  <th className="px-4 py-3 whitespace-nowrap">FILE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {["PAN Card", "Aadhar Card", "Voter ID"].map((type, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">{type}</td>
                    <td className="px-4 py-3">12-Feb-2023</td>
                    <td className="px-4 py-3 text-blue-600 font-medium cursor-pointer">[Download]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Notes</h2>
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            <ul className="text-sm text-gray-800 list-decimal list-inside space-y-1">
              <li>“Very consistent donor. Prefers health - related causes.”</li>
              <li>“Requested anonymity for donation receipts.”</li>
              <li>“Prefers communication via email instead of phone.”</li>
            </ul>
            <div className="flex gap-4 mt-2">
              <button className="bg-[#004f4f] text-white px-4 py-2 rounded hover:bg-[#003f3f] text-sm">ADD NOTE</button>
              <button className="bg-[#e11d48] text-white px-4 py-2 rounded hover:bg-[#c4113a] text-sm">DELETE NOTE</button>
            </div>
          </div>
        </div>
      </div>
  </DashboardLayout>
  );
}
