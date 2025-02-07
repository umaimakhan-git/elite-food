"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      router.push("/login"); // اگر user پہلے سے Signup کر چکا ہے تو اسے Login پر بھیجیں
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user)); // User کو Local Storage میں Save کریں
    alert("Signup Successful! Please Login.");
    router.push("/login"); // Signup کے بعد Login Page پر بھیجیں
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-3">
          <input type="text" name="fullName" placeholder="Full Name" value={user.fullName} onChange={handleChange} required className="border p-2 rounded w-full"/>
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required className="border p-2 rounded w-full"/>
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required className="border p-2 rounded w-full"/>
          <button type="submit" className="bg-orange-500 text-white w-full p-2 rounded hover:bg-orange-600 transition">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
