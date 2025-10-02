"use client"

import { useState } from "react";

export default function NewItem () {
  const [quantity, setQuantity] = useState(1)

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="text-center">
      <h3>
       <span className="text-xl font-semibold">Quantity: {quantity}</span>
      </h3>
      <p className="text-xs m-4">Allowed range: 1-20</p>
      <div className="flex justify-center-safe gap-4 ">
        
        <button
          onClick={() => decrement()} 
          disabled={quantity === 1}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                     focus:ring-purple-300 dark:focus:ring-purple-800 
                     shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 
                     font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decrease
        </button>
        
        <button
          onClick={() => increment() } 
          disabled={quantity === 20}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 dark:focus:ring-blue-800 
                     shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
                     font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Increase 
        </button>
      </div>
    </div>
  )
}