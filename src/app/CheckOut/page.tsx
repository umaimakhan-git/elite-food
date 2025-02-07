"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Food } from "@/types/food";

const CheckoutPage = () => {
  const [cart, setCart] = useState<Food[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    paymentMethod: "cash",
    deliveryMethod: "delivery",
  });

  const router = useRouter();

  useEffect(() => {
  
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

  
    const savedDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
    if (savedDetails.fullName) {
      setFormData(savedDetails);
    }
  }, []);

  
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shippingFee = formData.deliveryMethod === "delivery" ? 5 : 0;
  const total = subtotal + shippingFee;

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem("userDetails", JSON.stringify(newFormData)); // Save to localStorage
  };

 
  const handleConfirmOrder = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.zipCode) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields!",
      });
      return;
    }

   
    Swal.fire({
      icon: "success",
      title: "Order Confirmed!",
      html: `
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Zip Code:</strong> ${formData.zipCode}</p>
        <p><strong>Payment:</strong> ${formData.paymentMethod}</p>
        <p><strong>Delivery:</strong> ${formData.deliveryMethod}</p>
        <hr/>
        <p><strong>Items:</strong> ${cart.length}</p>
        <p><strong>Total Amount:</strong> $${total.toFixed(2)}</p>
      `,
      confirmButtonText: "Done",
    }).then(() => {
      localStorage.removeItem("cart"); 
      router.push("/"); 
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

    
      <div className="border p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-3">Order Summary</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between py-2 border-b">
                <span>{item.name} (x{item.quantity || 1})</span>
                <span>${item.price * (item.quantity || 1)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
          <p className="font-semibold">Shipping: ${shippingFee.toFixed(2)}</p>
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>

     
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">Billing Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required className="border p-2 rounded-md w-full" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="border p-2 rounded-md w-full" />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required className="border p-2 rounded-md w-full" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required className="border p-2 rounded-md w-full" />
          <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleInputChange} required className="border p-2 rounded-md w-full" />
        </form>

        
        <div className="mt-4">
          <label className="block font-semibold mb-1">Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} className="border p-2 rounded-md w-full">
            <option value="cash">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-1">Delivery Method:</label>
          <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleInputChange} className="border p-2 rounded-md w-full">
            <option value="delivery">Home Delivery</option>
            <option value="pickup">Self Pickup</option>
          </select>
        </div>
      </div>

    
      <button onClick={handleConfirmOrder} className="w-full bg-green text-white px-6 py-3 mt-4 rounded-md text-lg font-semibold hover:bg-green-600 transition">
        Confirm Order
      </button>
    </div>
  );
};

export default CheckoutPage;
