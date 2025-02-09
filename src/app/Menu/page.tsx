"use client"; 

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Food } from "@/types/food";
import AddToCartButton from "@/app/MenuDetails/AddToCartButton";
import { addToCart } from "../actions/actions";
import { FaShoppingCart } from "react-icons/fa";

const MenuPage = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("/api/getFoods"); 
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Explore Our Delicious Menu 🍽️
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
          >
            <Link href={`/Menu/${food.slug.current}`} className="block">
              <Image
                src={food.imageUrl}
                alt={food.name}
                width={250}
                height={250}
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
            <h3 className="text-lg font-semibold mt-2">{food.name}</h3>
            <p className="text-md font-semibold text-gray-800">${food.price}</p>
            {food.originalPrice && (
              <p className="text-sm text-red-500 line-through">
                ${food.originalPrice}
              </p>
            )}
            <p
              className={`text-sm text-green ${
                food.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {food.available ? "Available " : "Not Available "}
            </p>

            
            <AddToCartButton food={food} onClick={() => addToCart(food)} />

            <button><Link
      href="/Cart"
      className="fixed bottom-5 right-5 md:right-10 md:bottom-10 bg-orange text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-amber-500 transition"
    >
      <FaShoppingCart size={20} />
      <span className="hidden sm:block font-semibold">Go to Cart</span>
    </Link>
</button>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default MenuPage;
