import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // LOGIN FUNCTION
  const handleLogin = (e) => {

    e.preventDefault();

    // GET USER
    const storedUser = JSON.parse(
      localStorage.getItem("studentUser")
    );

    // CHECK USER
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {

      // SAVE LOGIN STATE
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      // SUCCESS MESSAGE
      alert("Login Successful");

      // GO TO DASHBOARD
      navigate("/");

    } else {

      alert("Invalid Credentials");

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-[400px]">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">
          Login
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Welcome back to Student Dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:border-indigo-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl mb-6 outline-none focus:border-indigo-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
          >
            Login
          </button>

        </form>

        {/* SIGNUP LINK */}
        <p className="text-center mt-6 text-gray-500">

          Don’t have an account?

          <Link
            to="/signup"
            className="text-indigo-600 font-semibold ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;