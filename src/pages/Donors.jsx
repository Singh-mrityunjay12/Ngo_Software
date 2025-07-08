 import React from "react";
import DashboardLayout from "../components/DashboardLayout";

function Donors() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Donors</h1>

      {/* Table Section */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse min-w-[600px]">
          <thead className="bg-gray-50 text-gray-600 font-semibold border-b">
            <tr>
              <th className="px-4 py-3">DONOR ID</th>
              <th className="px-4 py-3">NAME</th>
              <th className="px-4 py-3">EMAIL</th>
              <th className="px-4 py-3">PHONE</th>
              <th className="px-4 py-3">COUNT</th>
              <th className="px-4 py-3">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-3">D001</td>
              <td className="px-4 py-3">Christine Brooks</td>
              <td className="px-4 py-3">christinerooks@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">4</td>
              <td className="px-4 py-3">Rs. 2,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">D002</td>
              <td className="px-4 py-3">Rosie Pearson</td>
              <td className="px-4 py-3">rosiepearson@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">3</td>
              <td className="px-4 py-3">Rs. 2,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">D003</td>
              <td className="px-4 py-3">Darrell Caldwell</td>
              <td className="px-4 py-3">darrellcaldwell@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">5</td>
              <td className="px-4 py-3">Rs. 4,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">D004</td>
              <td className="px-4 py-3">Gilbert Johnston</td>
              <td className="px-4 py-3">gilbertjohnston@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">8</td>
              <td className="px-4 py-3">Rs. 5,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">D005</td>
              <td className="px-4 py-3">Alan Cain</td>
              <td className="px-4 py-3">alancain@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">Rs. 1,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">D006</td>
              <td className="px-4 py-3">Alfred Murray</td>
              <td className="px-4 py-3">alfred.murray@gmail.com</td>
              <td className="px-4 py-3">+1-555-123-4567</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">Rs. 7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Donors;
