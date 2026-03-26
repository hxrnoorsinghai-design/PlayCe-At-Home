"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type MenuItem = { name: string; icon: string; price: number };

const ITEMS: MenuItem[] = [
  { name: "Soup", icon: "🥣", price: 3 },
  { name: "Burger", icon: "🍔", price: 5 },
  { name: "Salad", icon: "🥗", price: 4 },
  { name: "Juice", icon: "🧃", price: 2 },
  { name: "Fruit", icon: "🍎", price: 1 },
];

export function MenuBuilder() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    if (menu.length < 4) {
      setMenu([...menu, item]);
    }
  };

  const removeItem = (index: number) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  const total = menu.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md max-w-2xl mx-auto w-full grid sm:grid-cols-2 gap-8">
      {/* Ingredient selection */}
      <div className="space-y-4">
        <h3 className="font-bold font-heading text-lg">Pick Items</h3>
        <div className="grid grid-cols-2 gap-3">
          {ITEMS.map(item => (
            <button
              key={item.name}
              onClick={() => addItem(item)}
              className="p-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-playceTeal hover:bg-playceTeal/5 transition-colors flex items-center justify-between"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold">${item.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* The Menu Board */}
      <div className="bg-playceCream p-6 rounded-2xl relative">
        <h2 className="text-2xl font-bold font-heading text-center mb-6">Today's Menu</h2>
        
        {menu.length === 0 ? (
          <p className="text-center text-gray-400 py-8 italic">Pick items to build your menu!</p>
        ) : (
          <ul className="space-y-3 mb-6 min-h-[150px]">
            {menu.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="flex items-center gap-2">
                  <span>{item.icon}</span> {item.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-bold">${item.price}</span>
                  <button onClick={() => removeItem(idx)} className="text-red-400 hover:text-red-600 font-bold">✕</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4 border-t-2 border-dashed border-gray-300 flex justify-between items-center px-2">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg text-playceTeal">${total}</span>
        </div>
      </div>
    </div>
  );
}
