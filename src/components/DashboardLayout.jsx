import Sidebar from "./Sidebar";
import Navbar from "./navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-800">
      {/* Sidebar (fixed and responsive) */}
      <Sidebar />

      {/* Content wrapper (mobile = full width, desktop = margin-left) */}
      <div className="flex-1 md:ml-64 flex flex-col overflow-hidden">
        <Navbar />
        <main className="p-4 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
