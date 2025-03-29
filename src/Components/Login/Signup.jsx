import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignup((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userSignup.email || !userSignup.password || !userSignup.username) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      const user = res.user;
      console.log(userSignup.password);
      

      await updateProfile(user, {
        displayName: userSignup.username,
      });

      toast.success("User created successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 w-full">
      <div className="w-full md:w-3/5 h-full gap-10  bg-gray-800 text-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Left - Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="email"
              placeholder="Email address"
              value={userSignup.email}
              onChange={handleChange}
              autoComplete="off"
              name="email"
              required
              className="w-full bg-gray-700 text-white p-2 mb-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userSignup.password}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white p-2 mb-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Full Name"
              name="username"
              value={userSignup.username}
              autoComplete="off"
              onChange={handleChange}
              required
              className="w-full bg-gray-700 text-white p-2 mb-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <p className="text-xs text-gray-400 mb-4 text-center">
              By signing up, you agree to our{" "}
              <span className="text-blue-400 cursor-pointer">Terms</span>,{" "}
              <span className="text-blue-400 cursor-pointer">Privacy Policy</span>,
              and <span className="text-blue-400 cursor-pointer">Cookies Policy</span>.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Right - Image Section */}
        <div
          className="hidden md:block w-full md:w-1/2 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('https://t4.ftcdn.net/jpg/02/74/45/15/240_F_274451578_YTqT3pYjmH22O8rkcgYAr5L78R2TqEVF.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Login Redirect */}
      <div className="w-full max-w-md text-white text-center mt-4">
        <p>
          Have an account?{" "}
          <NavLink to="/login" className="text-blue-400 cursor-pointer">
            Log in
          </NavLink>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;
