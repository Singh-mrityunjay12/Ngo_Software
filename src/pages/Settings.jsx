import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout'; 

const Settings = () => {
  const [paymentOptions, setPaymentOptions] = useState({
    card: true,
    bank: true,
    check: false,
    cod: true,
  });

  const toggleOption = (option) => {
    setPaymentOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <DashboardLayout>
      <main className="p-6 bg-[#f6f7fb] overflow-y-auto flex-1">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Setting</h1>

        {/* Organization Info */}
        <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Organization Informations</h2>

          <div className="border rounded-xl p-4 flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-[150px] h-auto">
                <img src="/images/logo/logo.webp" alt="Logo" className="rounded-lg w-full object-contain" />
              </div>
              <button className="bg-[#003f3f] text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-[#004f4f] transition">
                Change Logo
                <img src="/images/icon/edit.svg" alt="Edit" className="w-5 h-5 invert" />
              </button>
            </div>

            {/* Details */}
            <div className="flex-1 w-full space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1">Pyare Foundation</h3>
                  <p className="text-sm text-gray-600">pyarefdn@gmail.com</p>
                  <p className="text-sm text-gray-600">+91-9811409367</p>
                </div>
                <button className="text-gray-500 hover:text-[#003f3f]">
                  <img src="/images/icon/edit.svg" alt="Edit" className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-sm text-gray-600">370-D, J&K Pocket Dilshad Garden, Delhi – 110095</p>
                </div>
                <button className="text-gray-500 hover:text-[#003f3f]">
                  <img src="/images/icon/edit.svg" alt="Edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Settings */}
        <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">Payment Settings</h2>
              <p className="text-sm text-gray-500">Manage, Setup and record all your payment.</p>
            </div>
            <button className="bg-[#003f3f] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#004f4f] transition">
              Save Changes
            </button>
          </div>

          <div className="space-y-4">
            {/* Payment Method Items */}
            {[
              { label: 'Credit / Debit Cards', key: 'card' },
              { label: 'Direct Bank Transfer', key: 'bank' },
              { label: 'Check Payment', key: 'check' },
              { label: 'Cash On Delivery', key: 'cod' },
            ].map((option) => (
              <div
                key={option.key}
                className="flex justify-between items-center border rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={paymentOptions[option.key]}
                      onChange={() => toggleOption(option.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#003f3f] transition-all duration-300" />
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300" />
                  </label>
                  <span className="font-semibold text-[15px]">{option.label}</span>
                </div>
                <a href="#" className="text-sm font-medium underline text-black">Manage</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default Settings;
