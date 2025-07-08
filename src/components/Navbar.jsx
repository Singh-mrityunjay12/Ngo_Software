import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
      const handleToggle = () => {
        sidebar.classList.toggle("-translate-x-full");
      };

      const handleClickOutside = (e) => {
        const isClickInside =
          sidebar.contains(e.target) || toggleBtn.contains(e.target);
        const isMobile = window.innerWidth < 768;

        if (
          !isClickInside &&
          isMobile &&
          !sidebar.classList.contains("-translate-x-full")
        ) {
          sidebar.classList.add("-translate-x-full");
        }
      };

      toggleBtn.addEventListener("click", handleToggle);
      document.addEventListener("click", handleClickOutside);

      // Cleanup on unmount
      return () => {
        toggleBtn.removeEventListener("click", handleToggle);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-30">
      {/* Left: Menu Button + Search */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        <button id="menu-toggle" className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search or type"
            className="w-full bg-gray-100 px-4 py-2 pl-10 rounded text-sm"
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>
      </div>

      {/* Right: Notification + Avatar */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>
        <img
          src="/assets/icon/anand.png"
          className="w-8 h-8 rounded-full"
          alt="User"
        />
      </div>
    </header>
  );
};

export default Navbar;
