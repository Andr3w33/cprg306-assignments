"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    // append without mutating
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-pink-200 py-10 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600">Shopping List</h1>
      </header>

      <section className="max-w-xl mx-auto space-y-8">
        {/* form to add items */}
        <NewItem onAddItem={handleAddItem} />

        {/* list of items */}
        <ItemList items={items} />
      </section>
    </main>
  );
}
