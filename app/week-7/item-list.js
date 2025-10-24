"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // "name" | "category"

  // work on a copy; never mutate props
  const sortedItems = [...items].sort((a, b) => {
    const A = String(a[sortBy]).toLowerCase();
    const B = String(b[sortBy]).toLowerCase();
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  });

  const activeBtn = { background: "#2563eb", color: "white", border: "1px solid #2563eb" };
  const normalBtn = { background: "white", color: "#333", border: "1px solid #ccc" };

  return (
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      {/* Sort controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span style={{ fontSize: "14px", color: "#555" }}>Sort by:</span>

        <button
          type="button"
          onClick={() => setSortBy("name")}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            ...(sortBy === "name" ? activeBtn : normalBtn),
          }}
        >
          Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            ...(sortBy === "category" ? activeBtn : normalBtn),
          }}
        >
          Category
        </button>
      </div>

      {/* Items */}
      <ul className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {sortedItems.map(({ id, name, quantity, category }) => (
          <Item key={id} name={name} quantity={quantity} category={category} />
        ))}
      </ul>
    </section>
  );
}
