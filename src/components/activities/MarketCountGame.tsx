"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Item = { name: string; emoji: string; color: string };
const ITEMS: Item[] = [
  { name: "Apple", emoji: "🍎", color: "playceCoral" },
  { name: "Banana", emoji: "🍌", color: "playceSun" },
  { name: "Carrot", emoji: "🥕", color: "playceOrange" },
  { name: "Broccoli", emoji: "🥦", color: "playceLeaf" }
];

export function MarketCountGame() {
  const [targetItem, setTargetItem] = useState<Item>(ITEMS[0]);
  const [targetCount, setTargetCount] = useState<number>(3);
  const [basket, setBasket] = useState<Item[]>([]);

  const addToBasket = (item: Item) => {
    setBasket([...basket, item]);
  };

  const currentCount = basket.filter(i => i.name === targetItem.name).length;
  const isDone = currentCount === targetCount;

  const resetGame = () => {
    setBasket([]);
    setTargetItem(ITEMS[Math.floor(Math.random() * ITEMS.length)]);
    setTargetCount(Math.floor(Math.random() * 4) + 2); // 2 to 5
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md max-w-lg mx-auto w-full text-center">
      <h2 className="text-2xl font-bold font-heading text-playceInk mb-2">Farmers Market</h2>
      
      {isDone ? (
        <div className="py-8 space-y-4">
          <div className="text-6xl animate-bounce">🎉</div>
          <h3 className="text-xl font-bold text-playceLeaf">You did it!</h3>
          <p className="text-playceInk/70">You helped the shopper find {targetCount} {targetItem.name}s.</p>
          <Button onClick={resetGame} className="mt-4">Play Again</Button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-playceCream p-4 rounded-xl border-dashed border-2 border-playceSun">
            <p className="font-medium text-lg text-playceInk">
              Can you help me find <span className="font-bold text-xl text-playceSun">{targetCount} {targetItem.name}s</span>?
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            {ITEMS.map(item => (
              <button
                key={item.name}
                onClick={() => addToBasket(item)}
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: `var(--color-${item.color})20` }}
              >
                {item.emoji}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 min-h-[120px] flex flex-wrap gap-2 items-center justify-center border border-gray-200">
            {basket.length === 0 && <p className="text-gray-400 italic">Basket is empty</p>}
            {basket.map((item, i) => (
              <span key={i} className="text-3xl animate-in zoom-in">{item.emoji}</span>
            ))}
          </div>
          
          <div className="flex justify-between items-center px-4">
            <span className="font-medium text-playceInk/70">Collected: {currentCount} / {targetCount}</span>
            <Button variant="outline" onClick={() => setBasket([])} size="sm">Empty Basket</Button>
          </div>
        </div>
      )}
    </div>
  );
}
