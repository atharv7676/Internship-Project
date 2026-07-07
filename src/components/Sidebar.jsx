import { Link, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBook,
  FaYoutube,
  FaCalendarAlt,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ isOpen = false, onClose = () => {} }) {

  const navigate = useNavigate();

 const admin = JSON.parse(
  localStorage.getItem("studentUser")
) || {
  name: "Atharv",
  email: "atharv@gmail.com",
};

  // Logout Function
const handleLogout = () => {

  // Remove Login State
  localStorage.removeItem("isLoggedIn");

  // Redirect To Login Page
  navigate("/login");

};

  return (

    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`w-64 min-h-screen bg-[#0f172a] text-white p-5 flex flex-col justify-between
        fixed md:static top-0 left-0 z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* TOP SECTION */}
        <div>

          {/* Logo + Close (mobile) */}
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl sm:text-2xl font-bold leading-10">
              Student Productivity Dashboard
            </h1>

            <button
              onClick={onClose}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition shrink-0"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* MENU */}
          <ul className="space-y-4">

            {/* Dashboard */}
            <li>
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FaHome />
                Dashboard
              </Link>
            </li>

            {/* Notes */}
            <li>
              <Link
                to="/notes"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FaBook />
                Notes
              </Link>
            </li>

            {/* Courses */}
            <li>
              <Link
                to="/courses"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FaYoutube />
                Courses
              </Link>
            </li>

            {/* Calendar */}
            <li>
              <Link
                to="/calendar"
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FaCalendarAlt />
                Calendar
              </Link>
            </li>


          </ul>

        </div>

        {/* ADMIN PROFILE */}
        <div className="bg-slate-800 p-4 rounded-2xl">

          {/* Profile Info */}
          <div className="flex items-center gap-3 mb-4">

            <FaUserCircle
              size={40}
              className="text-white shrink-0"
            />

            <div className="min-w-0">

              <h2 className="font-semibold text-lg truncate">
                {admin.name}
              </h2>

              <p className="text-sm text-gray-400 truncate">
                {admin.email}
              </p>

            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mb-4"></div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
          >
            Logout
          </button>

        </div>

      </div>
    </>
  );
}

export default Sidebar;