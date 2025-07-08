 import DashboardLayout from '../components/DashboardLayout';

const VolunteerInfoPage = () => {
  return (
    <DashboardLayout>
      <main className="p-6 bg-[#f6f7fb] overflow-y-auto flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center text-gray-800 text-2xl font-bold mb-6 space-x-2">
          <span>Volunteers</span>
          <span className="text-xl text-gray-400 font-normal">&gt;</span>
          <span className="text-xl font-medium text-gray-600">Volunteer Information</span>
        </div>

        {/* Volunteer Info */}
        <div className="bg-[#f6f7fb] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <img
              src="/images/organisation/christ-donor.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Christine Brooks</h2>
                <p className="text-sm text-gray-700 mt-2 max-w-md leading-relaxed">
                  Christine Brooks is a passionate volunteer actively working since early 2023 in various social initiatives. She is especially dedicated to projects related to health, education, and community development.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="bg-[#004f4f] hover:bg-[#003f3f] text-white text-sm px-5 py-2 rounded">MESSAGE</button>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded">SUSPENDED</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="border-l pl-6 text-sm text-gray-800 space-y-2">
            <p><span className="font-semibold">Volunteer ID:</span> VL-02345</p>
            <p><span className="font-semibold">Email:</span> christinerooks@gmail.com</p>
            <p><span className="font-semibold">Address:</span> 123, Green Valley, Bhopal, MP</p>
            <p><span className="font-semibold">Phone:</span> +1-555-123-4567</p>
            <p><span className="font-semibold">Status:</span> Active</p>
            <p><span className="font-semibold">Join Date:</span> 10 Jan 2023</p>
          </div>
        </div>

        {/* Past Assignments Table */}
        <div className="bg-[#f6f7fb] rounded-md mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Past Assignments</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 text-gray-600 font-semibold">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">DATE</th>
                  <th className="px-4 py-3 whitespace-nowrap">PROJECT NAME</th>
                  <th className="px-4 py-3 whitespace-nowrap">ROLE</th>
                  <th className="px-4 py-3 whitespace-nowrap">HOURS CONTRIBUTED</th>
                  <th className="px-4 py-3 whitespace-nowrap">REPORT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["02-May-2025", "Health Awareness Drive", "Coordinator", "8", "View"],
                  ["15-Mar-2025", "Food Distribution", "Volunteer", "6", "View"],
                  ["27-Jan-2025", "Winter Shelter Project", "Team Lead", "10", "View"],
                  ["20-Feb-2024", "Blood Donation Camp", "Assistant", "5", "View"],
                  ["18-Apr-2024", "Hygiene Awareness", "Educator", "7", "View"]
                ].map(([date, name, role, hours, report], i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">{date}</td>
                    <td className="px-4 py-3">{name}</td>
                    <td className="px-4 py-3">{role}</td>
                    <td className="px-4 py-3">{hours} hrs</td>
                    <td className="px-4 py-3 text-blue-600 font-medium cursor-pointer">[{report}]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents and Notes */}
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
                  {[
                    ["ID Proof", "12-Feb-2023"],
                    ["Address Proof", "12-Feb-2023"],
                    ["Resume", "12-Feb-2023"]
                  ].map(([doc, date], i) => (
                    <tr key={i}>
                      <td className="px-4 py-3">{doc}</td>
                      <td className="px-4 py-3">{date}</td>
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
                <li>“Highly motivated and punctual.”</li>
                <li>“Prefers health-related fieldwork.”</li>
                <li>“Available on weekends and evenings.”</li>
              </ul>
              <div className="flex gap-4 mt-2">
                <button className="bg-[#004f4f] text-white px-4 py-2 rounded hover:bg-[#003f3f] text-sm">ADD NOTE</button>
                <button className="bg-[#e11d48] text-white px-4 py-2 rounded hover:bg-[#c4113a] text-sm">DELETE NOTE</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default VolunteerInfoPage;
