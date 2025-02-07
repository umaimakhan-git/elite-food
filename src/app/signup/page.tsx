"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const routerRef = useRef(router); 

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
        routerRef.current.push("/login"); 
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful! Please Login.");
    router.push("/login"); 
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
