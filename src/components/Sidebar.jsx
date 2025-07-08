import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const menuItem = (label, iconPath, link) => (
    <Link
      to={link}
      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#004f4f]"
    >
      <img src={iconPath} alt="Icon" className="w-5 h-5" />
      {label}
    </Link>
  );

  const dropdownItem = (label, items, id, iconPath) => (
    <div className="group">
      <button
        onClick={() => toggleDropdown(id)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded hover:bg-[#004f4f]"
      >
        <span className="flex items-center gap-2">
          <img src={iconPath} alt="Icon" className="w-5 h-5" />
          {label}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform duration-200 ${
            openDropdown === id ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {openDropdown === id && (
        <div className="ml-6 mt-1 space-y-1 text-[13px] text-white">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="block py-1 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <aside
      id="sidebar"
      className="fixed z-40 min-h-screen bg-[#003f3f] text-white w-64 flex flex-col justify-between overflow-hidden -translate-x-full md:translate-x-0 transition-transform"
    >
      <div className="h-16 flex items-center justify-center border-b border-[#004f4f]">
        <img
          src="/images/logo/logo.webp"
          alt="Logo"
          className="h-10 bg-white p-1 rounded-lg"
        />
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2 text-sm font-medium">
        {menuItem(
          "Dashboard Overview",
          "/assets/icon/dashboard.svg",
          "/dashboardoverview"
        )}

        {dropdownItem(
          "Donations",
          [
            { label: "Donations", link: "/donations " },
            {
              label: "List Of All Donations",
              link: "/donationlistpage",
            },
            { label: "Export Donations", link: "/exportdonationspage" },
            {
              label: "Add Offline Donations",
              link: "/offlinedonationspage",
            },
            {
              label: "Donation Analytics",
              link: "/analytics",
            },
          ],
          "donationMenu",
          "/assets/icon/Heart (traced).svg"
        )}

        {menuItem("Campaigns", "/assets/icon/campaign.svg", "/campaignspage")}

        {dropdownItem(
          "Donors",
          [
            { label: "Donors", link: "/donors" },
            {
              label: "Donor Information",
              link: "/donorinformationpage",
            },
          ],
          "donorMenu",
          "/assets/icon/donors.svg"
        )}

        {dropdownItem(
          "Volunteer",
          [
            { label: "Volunteers", link: "/volunteermanagementpage" },
            {
              label: "Volunteer Information",
              link: "/volunteerinfopage",
            },
          ],
          "volunteerMenu",
          "/assets/icon/volunteer.svg"
        )}

        {menuItem("Events", "/assets/icon/events.svg", "/event")}
        {menuItem("CMS", "/assets/icon/cms.svg", "/contentmanagement")}
        {menuItem("Reports", "/assets/icon/report.svg", "/reports ")}
        {menuItem("Settings", "/assets/icon/setting.svg", "/settings")}
      </nav>

      <div className="p-4 border-t border-[#004f4f]">
        <button className="w-full bg-white text-[#003f3f] py-2 rounded hover:bg-gray-100 flex items-center justify-center gap-2">
          <img
            src="/assets/icon/logout-03.svg"
            alt="Logout"
            className="w-5 h-5"
          />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
