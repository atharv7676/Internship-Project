import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full flex  justify-between bg-white p-4 rounded-xl shadow-sm">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-auto">

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl w-72">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Notification Icon */}
        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">

          <FaBell />

        </div>

      </div>

    </div>
  );
}

export default Navbar;