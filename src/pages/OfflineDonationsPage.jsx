import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function OfflineDonationsPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    campaign: "",
    amount: "",
    method: "",
    date: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // You can now POST this data to your backend
  };

  return ( 
    <DashboardLayout>
       <div className="flex items-center text-gray-800 text-2xl font-bold mb-6 space-x-2">
        <span>Donations</span>
        <span className="text-xl text-gray-400 font-normal">&gt;</span>
        <span className="text-xl font-medium text-gray-600">Add offline donations</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white w-full p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Offline Donation Form</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Donor Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Donor Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Mailing Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>
            </div>

            {/* Donation Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Donation Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Campaign:</label>
                  <select
                    name="campaign"
                    value={form.campaign}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  >
                    <option value="">-- Select Campaign --</option>
                    <option value="Education Fund">Education Fund</option>
                    <option value="Health Awareness">Health Awareness</option>
                    <option value="Relief Support">Relief Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Donation Amount (Rs):</label>
                  <input
                    type="number"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Payment Method:</label>
                  <select
                    name="method"
                    value={form.method}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  >
                    <option value="">-- Select Method --</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Donation Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Status (Admin Only) */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 mb-2">Status (Admin Only)</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {["Received", "Pending", "Completed", "Failed"].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={form.status === status}
                    onChange={handleChange}
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#003f3f] text-white px-6 py-2 rounded hover:bg-[#005f5f]"
            >
              Submit Donation
            </button>
          </div>
        </div>
      </section>
     </DashboardLayout>
  );
}
