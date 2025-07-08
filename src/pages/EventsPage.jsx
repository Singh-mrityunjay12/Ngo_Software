import React from "react";
import DashboardLayout from "../components/DashboardLayout";

function EventsPage() {
  return (
    <>
      <DashboardLayout>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Events</h1>

        {/* Calendar and Sidebar */}
        <div className="bg-[#f6f7fb]">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            {/* Calendar Section */}
            <div className="flex-[2] bg-white rounded-2xl shadow p-4 overflow-y-auto min-h-[700px]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">October 2024</h2>
                <button className="bg-gray-100 px-3 py-1 rounded border text-sm hover:bg-gray-200">
                  + Add New Event
                </button>
              </div>

              <table className="w-full text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#f6f7fb] text-gray-700 text-left">
                    <th className="p-2">MON</th>
                    <th className="p-2">TUE</th>
                    <th className="p-2">WED</th>
                    <th className="p-2">THU</th>
                    <th className="p-2">FRI</th>
                    <th className="p-2">SAT</th>
                    <th className="p-2">SUN</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="h-[120px] align-top">
                    <td className="border p-2 text-gray-400">25</td>
                    <td className="border p-2 text-gray-400">26</td>
                    <td className="border p-2 text-gray-400">27</td>
                    <td className="border p-2 text-gray-400">28</td>
                    <td className="border p-2 text-gray-400">29</td>
                    <td className="border p-2 text-gray-400">30</td>
                    <td className="border p-2">1</td>
                  </tr>
                  <tr className="h-[120px] align-top">
                    <td className="border p-2">2</td>
                    <td className="border p-2">
                      3
                      <div className="mt-1 bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                        Tree Plantation, Health Camp
                      </div>
                    </td>
                    <td className="border p-2">4</td>
                    <td className="border p-2">5</td>
                    <td className="border p-2">6</td>
                    <td className="border p-2">7</td>
                    <td className="border p-2">8</td>
                  </tr>
                  <tr className="h-[120px] align-top">
                    <td className="border p-2">9</td>
                    <td className="border p-2">10</td>
                    <td className="border p-2">11</td>
                    <td className="border p-2">12</td>
                    <td className="border p-2">13</td>
                    <td className="border p-2">14</td>
                    <td className="border p-2">15</td>
                  </tr>
                  <tr className="h-[120px] align-top">
                    <td className="border p-2">16</td>
                    <td className="border p-2">
                      17
                      <div className="mt-1 bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs">
                        Blood Donation, Awareness Rally
                      </div>
                    </td>
                    <td className="border p-2">18</td>
                    <td className="border p-2">19</td>
                    <td className="border p-2">
                      20
                      <div className="mt-1 bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">
                        Women’s Day Campaign, Clean Drive
                      </div>
                    </td>
                    <td className="border p-2">21</td>
                    <td className="border p-2">22</td>
                  </tr>
                  <tr className="h-[120px] align-top">
                    <td className="border p-2">23</td>
                    <td className="border p-2">24</td>
                    <td className="border p-2">
                      25
                      <div className="mt-1 bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                        Literacy Drive, Workshop Facilitation
                      </div>
                    </td>
                    <td className="border p-2">26</td>
                    <td className="border p-2">27</td>
                    <td className="border p-2">28</td>
                    <td className="border p-2">29</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sidebar */}
            <div className="flex-[1] bg-white rounded-2xl shadow p-4 flex flex-col justify-between min-h-[700px] w-full">
              <button className="bg-[#e7f0ee] text-sm px-4 py-2 rounded w-full mb-4 text-center font-medium">
                Upcoming Events
              </button>

              <h2 className="text-sm font-medium text-gray-700 mb-4">
                You are going to
              </h2>

              <div className="space-y-4 flex-1 overflow-y-auto">
                {[
                  "Tree Plantation",
                  "Blood Donation",
                  "Women’s Day Campaign",
                ].map((event, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 flex gap-3 items-start"
                  >
                    <img
                      src="/images/events/img1.png"
                      className="w-10 h-10 rounded-full object-cover"
                      alt="event"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{event}</h3>
                      <p className="text-xs text-gray-500">3 October 2024</p>
                      <p className="text-xs text-gray-500">28 Delhi</p>
                      <p className="text-xs text-gray-500">Christine Brooks</p>
                      <div className="flex items-center gap-2 mt-2">
                        <img
                          src="/images/team/coreTeam pushpa.png"
                          className="w-6 h-6 rounded-full"
                          alt="team"
                        />
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <span className="text-[10px] border border-gray-400 rounded-full px-2 py-[2px] ml-auto">
                          15+
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-6 bg-gray-100 text-sm text-gray-700 py-2 rounded-full w-full hover:bg-gray-200">
                See More
              </button>
            </div>
          </div>
        </div>

        {/* Attendance and Upload Section */}
        <section className="bg-[#f6f7fb] py-8">
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm w-full mx-auto p-6 flex flex-col gap-8 sm:flex-row sm:flex-wrap items-start">
              {/* Attendance */}
              <div className="w-full sm:flex-1">
                <h2 className="text-2xl font-semibold mb-6">
                  Tree Plantation, Health Camp
                </h2>
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-semibold text-lg">Mark Attendance</span>
                  <span className="text-green-600 text-lg">✅</span>
                </div>
                <div className="mb-6 space-y-3">
                  {[
                    "Christine Brooks",
                    "Rosie Pearson",
                    "Gilbert Johnston",
                    "Maggie Sullivan",
                  ].map((name, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 text-[17px]"
                    >
                      <input
                        type="radio"
                        name="attendance"
                        className="accent-[#0e5757]"
                      />
                      {name}
                    </label>
                  ))}
                </div>
                <button className="w-full bg-[#0e5757] text-white font-semibold py-3 rounded-md text-lg hover:bg-[#004f4f] transition">
                  Save Attendance
                </button>
              </div>

              {/* Uploads */}
              <div className="w-full sm:flex-1 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📄</span>
                    <span className="font-semibold text-lg">Upload Report</span>
                  </div>
                  <input
                    type="file"
                    className="block w-full mb-1 border border-gray-400 rounded px-2 py-1 text-sm file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    No report uploaded.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📸</span>
                    <span className="font-semibold text-lg">Add Photos</span>
                  </div>
                  <input
                    type="file"
                    className="block w-full mb-1 border border-gray-400 rounded px-2 py-1 text-sm file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    No Photos uploaded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}

export default EventsPage;
