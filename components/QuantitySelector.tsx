"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Quantity</span>
      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="p-2.5 hover:bg-gray-50 transition-colors active:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <span className="px-5 py-2 text-sm font-semibold min-w-[3rem] text-center select-none">
          {qty}
        </span>
        <button
          onClick={() => setQty(qty + 1)}
          className="p-2.5 hover:bg-gray-50 transition-colors active:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
