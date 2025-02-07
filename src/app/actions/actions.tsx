
import { Food } from "@/types/food";


export const addToCart =(foods: Food) => {
  const cart : Food[] = JSON.parse(localStorage.getItem("cart") || "[]")

  const existingFoodIndex= cart.findIndex(item => item._id === foods._id)

  if(existingFoodIndex > -1){
    cart[existingFoodIndex].quantity +=1
  }

  else{
    cart.push({
      ...foods, quantity: 1
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
};


export const removeFromCart=(foodsId : string) =>{
  let cart : Food[] = JSON.parse(localStorage.getItem("cart") || '[]');


  cart = cart.filter(item => item._id !== foodsId)
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const updatedCart = (foodsId : string, quantity: number) =>{
  const cart : Food[] = JSON.parse(localStorage.getItem("cart") || '[]')

  const foodsIndex =cart.findIndex(item => item._id ===foodsId)

  if(foodsIndex > -1){
    cart[foodsIndex].quantity = quantity
  }
};