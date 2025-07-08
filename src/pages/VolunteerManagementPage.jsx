import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

const VolunteerManagementPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Volunteer Management
      </h1>

      {/* Volunteer Table */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 font-semibold border-b">
            <tr>
              <th className="px-4 py-3">VOLUNTEER ID</th>
              <th className="px-4 py-3">NAME</th>
              <th className="px-4 py-3">EMAIL</th>
              <th className="px-4 py-3">PHONE</th>
              <th className="px-4 py-3">SKILLS</th>
              <th className="px-4 py-3">EVENTS JOINED</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              [
                "V001",
                "Christine Brooks",
                "christinerooks@gmail.com",
                "+1-555-123-4567",
                "First Aid, Organizing",
                "Tree Plantation, Health Camp",
              ],
              [
                "V002",
                "Rosie Pearson",
                "rosiepearson@gmail.com",
                "+1-555-123-4567",
                "Public Speaking, Management",
                "Blood Donation, Awareness Rally",
              ],
              [
                "V003",
                "Darrell Caldwell",
                "darrellcaldwell@gmail.com",
                "+1-555-123-4567",
                "Photography, Social Media",
                "Women’s Day Campaign, Clean Drive",
              ],
              [
                "V004",
                "Gilbert Johnston",
                "gilbertjohnston@gmail.com",
                "+1-555-123-4567",
                "Logistics, Crowd Handling",
                "Fundraiser Gala, Marathon Event",
              ],
              [
                "V005",
                "Alan Cain",
                "alancain@gmail.com",
                "+1-555-123-4567",
                "Teaching, Coordination",
                "Literacy Drive, Workshop Facilitation",
              ],
              [
                "V006",
                "Alfred Murray",
                "alfredmurray@gmail.com",
                "+1-555-123-4567",
                "First Aid, Organizing",
                "Blood Donation, Awareness Rally",
              ],
              [
                "V007",
                "Maggie Sullivan",
                "maggiesullivan@gmail.com",
                "+1-555-123-4567",
                "Photography, Social Media",
                "Women’s Day Campaign, Clean Drive",
              ],
              [
                "V008",
                "Rosie Todd",
                "rosietodd@gmail.com",
                "+1-555-123-4567",
                "Public Speaking, Fundraising",
                "Fundraiser Gala, Clean Drive",
              ],
            ].map(([id, name, email, phone, skills, events]) => (
              <tr className="border-b" key={id}>
                <td className="px-4 py-3">{id}</td>
                <td className="px-4 py-3">{name}</td>
                <td className="px-4 py-3">{email}</td>
                <td className="px-4 py-3">{phone}</td>
                <td className="px-4 py-3">{skills}</td>
                <td className="px-4 py-3">{events}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-[#f6f7fb] flex items-center justify-between px-4 py-3 rounded-b-md mt-2">
        <div className="text-sm text-gray-500">Showing 1–09 of 78</div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Assignment + Notification Section */}
      <div className="bg-[#f6f7fb] min-h-screen py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Assignment Panel */}
          <div className="bg-white rounded-lg shadow p-6 h-full">
            <h2 className="text-xl font-semibold mb-4">Assignment Panel</h2>
            <form className="space-y-4">
              {["Events", "Donation Date", "Volunteers", "Assign Role"].map(
                (label, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium mb-1">
                      {label}:
                    </label>
                    {label === "Donation Date" ? (
                      <input
                        type="date"
                        className="w-full border rounded px-3 py-2 text-sm"
                      />
                    ) : (
                      <select className="w-full border rounded px-3 py-2 text-sm">
                        <option>-- Select {label} --</option>
                      </select>
                    )}
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full bg-[#004f4f] text-white py-2 rounded text-sm"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Email Notification Panel */}
          <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Email Notification</h2>
              <h3 className="font-medium mb-2 text-sm">Notify via Email</h3>
              <p className="text-sm text-gray-700 mb-1">
                Send Email Notification To:{" "}
                <span className="font-medium">[christinerooks@email.com]</span>
              </p>
              <p className="text-sm text-gray-700 mb-1">
                Subject:{" "}
                <span className="font-medium">
                  Assignment to Upcoming Event
                </span>
              </p>
              <p className="text-sm text-gray-700 mt-4">
                Dear Ayesha,
                <br />
                <br />
                You have been successfully assigned to the event:{" "}
                <strong>“Tree Plantation Drive”</strong> on{" "}
                <strong>“August 10, 2025”</strong>.
                <br />
                Please be available at the venue by 9:30 AM.
                <br />
                <br />
                Thank you for your continued support!
              </p>
            </div>
            <button className="w-full mt-6 bg-[#004f4f] text-white py-2 rounded text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerManagementPage;
