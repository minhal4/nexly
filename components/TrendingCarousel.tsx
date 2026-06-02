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
      scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  }

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-white"
            >
              Trending Now
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-sm mt-1"
            >
              Hand-picked products just for you
            </motion.p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="min-w-[260px] max-w-[260px] bg-zinc-900 rounded-2xl border border-white/8 overflow-hidden flex flex-col group hover:border-violet-500/30 transition-all duration-300"
            >
              <Link href={`/products/${product.id}`} className="block overflow-hidden">
                <div className="relative h-44 bg-zinc-800">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-white text-sm line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{product.brand}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-black text-white text-base">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-500 text-white text-xs gap-1.5 h-8 shadow-md shadow-violet-500/20"
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
