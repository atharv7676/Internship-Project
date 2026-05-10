import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";



import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Courses from "./pages/Courses";
import CalendarPage from "./pages/Calendar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content (THIS is where routing happens) */}
        <div style={{ padding: "20px", background: "#f5f5f5", flex: 1 }}>
          
          <div style={{ marginBottom: 12, fontSize: 12, color: "#334155" }}>
            Current path: {useLocation().pathname}
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/calender" element={<CalendarPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="*"
              element={
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 700 }}>Route not found</h2>
                  <p style={{ marginTop: 8 }}>
                    No route matches: <code>{useLocation().pathname}</code>
                  </p>
                </div>
              }
            />
          </Routes>


        </div>

      </div>
    </div>
  );
}