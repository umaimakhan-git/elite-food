"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      router.push("/signup"); // اگر user signup نہ ہوا ہو تو اسے Signup پر بھیجیں
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === credentials.email && storedUser.password === credentials.password) {
      localStorage.setItem("isLoggedIn", "true"); // User کو Logged in Status دیں
      alert("Login Successful!");
      router.push("/cart"); // Login ہونے کے بعد Cart Page پر لے جائیں
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required className="border p-2 rounded w-full"/>
          <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required className="border p-2 rounded w-full"/>
          <button type="submit" className="bg-orange-500 text-white w-full p-2 rounded hover:bg-orange-600 transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
