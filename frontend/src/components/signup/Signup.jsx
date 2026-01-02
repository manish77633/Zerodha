import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://zerodha-u5jq.onrender.com/signup", formData);
      alert("Signup Success! Redirecting to Dashboard...");
      window.location.href = "http://localhost:5174"; // Seedha dashboard bhejo
    } catch (err) {
      alert("Signup failed! Try a different email.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] items-center justify-center px-6 py-12 gap-12 font-normal">
      {/* Left side Image */}
      <div className="hidden md:block w-1/2 max-w-[500px]">
        <img src="/media/signup.png" alt="Signup Illustration" className="w-full" />
      </div>

      {/* Right side Form */}
      <div className="w-full max-w-[400px]">
        <h1 className="text-3xl font-medium text-gray-700 mb-2">Signup now</h1>
        <p className="text-gray-400 mb-8">Or track your existing application.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full border border-gray-200 p-3 rounded-sm outline-none focus:border-blue-400 transition-colors"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full border border-gray-200 p-3 rounded-sm outline-none focus:border-blue-400 transition-colors"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border border-gray-200 p-3 rounded-sm outline-none focus:border-blue-400 transition-colors"
            onChange={handleChange}
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-sm hover:bg-blue-600 transition-colors mt-4"
          >
            Continue
          </button>
        </form>
        
        <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
          I allow Zerodha to contact me by SMS or e-mail for application purposes. 
          By continuing, you agree to our terms and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Signup;