import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Signup Function
  const handleSignup = (e) => {

    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    // Save User
    localStorage.setItem(
      "studentUser",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg w-full max-w-100">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">
          Signup
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Create your account
        </p>

        {/* Form */}
        <form onSubmit={handleSignup}>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:border-indigo-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl mb-4 outline-none focus:border-indigo-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-xl mb-6 outline-none focus:border-indigo-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-500">

          Already have an account?

          <Link
            to="/login"
            className="text-indigo-600 font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;
