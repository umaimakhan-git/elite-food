"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Food } from "@/types/food";

interface AddToCartButtonProps {
  food: Food;
  onClick: (food: Food, quantity: number) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ food, onClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };


  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  
  const handleAddToCart = () => {
    setAddedToCart(true);
    onClick(food, quantity);
  };

  return (
    <div className="mt-3">
      
      {!addedToCart ? (
        <button
          onClick={handleAddToCart}
          className="bg-orange text-white font-semibold px-3 py-2 rounded-md flex items-center gap-2 hover:bg-amber-500 transition"
        >
          <FaShoppingCart size={18} />
          Add to Cart
        </button>
      ) : (
        
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-l-md"
            >
              -
            </button>
            <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-r-md"
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
