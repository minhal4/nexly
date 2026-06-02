"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-400">Quantity</span>
      <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-zinc-900">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="p-2.5 hover:bg-white/8 transition-colors active:bg-white/12 text-zinc-400 hover:text-white"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-5 py-2 text-sm font-semibold min-w-[3rem] text-center select-none text-white">
          {qty}
        </span>
        <button
          onClick={() => setQty(qty + 1)}
          className="p-2.5 hover:bg-white/8 transition-colors active:bg-white/12 text-zinc-400 hover:text-white"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
