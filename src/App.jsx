import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Courses from "./pages/Courses";
import CalendarPage from "./pages/Calendar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Right Side */}
      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Page Content (THIS is where routing happens) */}
        <div className="p-3 sm:p-5 bg-[#f5f5f5] flex-1">
          <div className="mb-3 text-xs text-slate-700 break-all">
            Current path: {useLocation().pathname}
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <Notes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <ProtectedRoute>
                  <CalendarPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calender"
              element={
                <ProtectedRoute>
                  <CalendarPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            ...
          </Routes>
        </div>
      </div>
    </div>
  );
}
