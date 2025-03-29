import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseAuth.js";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = ({setIsLogin}) => {
    const navigate = useNavigate()
    const [userSignup, setUserSignup] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserSignup((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userSignup.email || !userSignup.password) {
            toast("OOp sometime try again!")
            return;
        } else {
            signInWithEmailAndPassword(auth, userSignup.email, userSignup.password)
                .then((res) => {

                    toast("User created successfully!")
                    navigate('/')
                    setIsLogin(true);

                })
                .catch((err) => console.log(err));
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-700">
            <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Side - Image (Hidden on Small Screens) */}
                <div className="hidden md:block w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://media.istockphoto.com/id/1939929083/photo/cyber-security-concept-user-enters-password-to-login-to-privacy-and-protect-personal-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=FPa1uwOTSC1dMOsE5kHr-Tqcfh5zHDNGygfK-zoPmtg=')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-600">Email</label>
                            <input
                            type="email"
                            placeholder="Mobile number or email address"
                            value={userSignup.email}
                            onChange={handleChange}
                            autoComplete="off"
                            name="email"
                            className="w-full bg-transparent text-black p-2 mb-3 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
                        />
                      
                        </div>

                        <div>
                            <label className="block text-gray-600">Password</label>
                            <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={userSignup.password}
                            autoComplete="off"
                            onChange={handleChange}
                            className="w-full bg-transparent text-black p-2 mb-3 rounded-md border border-gray-700 focus:outline-none focus:border-gray-500"
                        />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-gray-600 text-sm">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                        <ToastContainer />
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don't have an account?{" "}
                        <NavLink to="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;