"use client";

import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";


interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  
  const calculateTotal = (items: CartItem[]) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  
  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item, index) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

 
  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map(item =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  
  const removeItem = (id: string) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
   
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty! <Link href="/menu" className="text-orange-500 font-semibold">Go to Menu</Link></p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map(item => (
              <div key={item._id} className="p-4 border rounded-lg shadow-md flex flex-col items-center">
                <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-md font-semibold">${item.price}</p>

                
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => decreaseQuantity(item._id)} className="p-2 bg-gray-300 rounded-md">
                    <FaMinus />
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item._id)} className="p-2 bg-gray-300 rounded-md">
                    <FaPlus />
                  </button>
                </div>

            
                <button
                  onClick={() => removeItem(item._id)}
                  className="mt-2 text-red-500 flex items-center gap-1"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Link href="/CheckOut">
              <button className="bg-orange text-white px-6 py-3 mt-4 rounded-md text-lg font-semibold hover:bg-orange-600 transition">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
