"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const trending = products.filter((p) => p.featured);

export default function TrendingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-gray-500 text-sm mt-1">
              Hand-picked picks just for you
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trending.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group"
            >
              <Link href={`/products/${product.id}`} className="block overflow-hidden">
                <div className="relative h-44 bg-gray-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{product.brand}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-base">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs gap-1.5 h-8"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
