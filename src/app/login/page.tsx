"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs"; 

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      router.replace("/signup");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (!storedUser.email) {
      alert("User not found. Please sign up first.");
      return;
    }

    const passwordMatch = bcrypt.compareSync(credentials.password, storedUser.password);

    if (storedUser.email === credentials.email && passwordMatch) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      router.push("/cart"); 
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white w-full p-2 rounded hover:bg-orange-600 transition font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-3">
          Don't have an account? <a href="/signup" className="text-orange-500 font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
