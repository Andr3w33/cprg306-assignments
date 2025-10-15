"use client"

import { useState } from "react";

export default function NewItem () {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log("New item:", item);

    // Alert appears after click on "Add Item" button
    alert(
      `Submitted:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`
    );

    // Reset to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  }


  return (
    <div className="text-center">
      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Rolls Royce"
            className="w-72 mx-auto block rounded-lg border px-4 py-2.5
                       outline-none focus:ring-4 focus:ring-blue-300
                       dark:focus:ring-blue-800"
          />
          <p className="text-xs mt-2 text-gray-500">Name is required</p>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="sr-only">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-72 mx-auto block rounded-lg border px-4 py-2.5
                       outline-none focus:ring-4 focus:ring-blue-300
                       dark:focus:ring-blue-800"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Quantity (styled like your reference) */}
        <div>
          <h3>
            <span className="text-xl font-semibold">Quantity: {quantity}</span>
          </h3>
          <p className="text-xs m-4">Allowed range: 1 - 20</p>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-purple-300 dark:focus:ring-purple-800 
                         shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Decrease
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-blue-300 dark:focus:ring-blue-800 
                         shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Increase
            </button>
          </div>
        </div>

        {/* SUbmit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-72 text-white bg-blue-600 hover:bg-blue-700 
                       focus:ring-4 focus:outline-none focus:ring-blue-300 
                       font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}