"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

type Sock = { id: number; color: string; matched: boolean };

const COLORS = ["playceCoral", "playceBlue", "playceSun", "playceTeal"];

export function SockMatchGame() {
  const [socks, setSocks] = useState<Sock[]>(() => {
    // Generate pairs
    const initial = COLORS.flatMap(color => [
      { id: Math.random(), color, matched: false },
      { id: Math.random(), color, matched: false }
    ]);
    // Shuffle
    return initial.sort(() => Math.random() - 0.5);
  });
  
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const allMatched = socks.every(s => s.matched);

  const handleSockClick = (id: number) => {
    if (selectedId === null) {
      setSelectedId(id);
      return;
    }
    
    // Check match
    const first = socks.find(s => s.id === selectedId);
    const second = socks.find(s => s.id === id);
    
    if (first && second && first.id !== second.id && first.color === second.color) {
      // It's a match!
      setSocks(prev => prev.map(s => 
        (s.id === first.id || s.id === second.id) ? { ...s, matched: true } : s
      ));
    }
    
    // Reset selection after match attempt
    setSelectedId(null);
  };

  const resetGame = () => {
    const initial = COLORS.flatMap(color => [
      { id: Math.random(), color, matched: false },
      { id: Math.random(), color, matched: false }
    ]);
    setSocks(initial.sort(() => Math.random() - 0.5));
    setSelectedId(null);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md max-w-lg mx-auto w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-heading text-playceInk">Laundry Time!</h2>
        <p className="text-playceInk/70">Find the matching socks.</p>
      </div>

      {allMatched ? (
        <div className="text-center space-y-6 py-12">
          <div className="w-24 h-24 bg-playceLeaf/20 text-playceLeaf rounded-full flex items-center justify-center mx-auto">
            <Check className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-playceInk">All Done!</h3>
          <Button onClick={resetGame}>Play Again</Button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {socks.map(sock => (
            <button
              key={sock.id}
              onClick={() => handleSockClick(sock.id)}
              disabled={sock.matched}
              className={`
                h-24 rounded-2xl flex items-center justify-center transition-all duration-300
                ${sock.matched ? "opacity-0 invisible" : "opacity-100"}
                ${selectedId === sock.id ? "ring-4 ring-offset-2 scale-105" : "hover:-translate-y-1"}
              `}
              style={{ 
                backgroundColor: `var(--color-${sock.color})`,
                boxShadow: selectedId === sock.id ? `0 0 0 4px var(--color-${sock.color})` : 'none'
              }}
            >
              🧦
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
