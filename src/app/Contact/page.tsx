"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-400 text-center mb-6">Contact Us</h1>

     
      <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
        <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md">
          <FiPhone className="text-blue-400 text-3xl mb-2" />
          <p className="font-semibold">+92 123456789</p>
        </div>
        <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md">
          <FiMail className="text-red-400 text-3xl mb-2" />
          <p className="font-semibold">uk123@gmail.com</p>
        </div>
        <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md">
          <FiMapPin className="text-green-400 text-3xl mb-2" />
          <p className="font-semibold">KHI, Pakistan</p>
        </div>
      </div>

      
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
