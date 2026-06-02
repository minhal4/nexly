"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

const suggested = products.slice(0, 20);
const titleChars = "Nexly Suggestions".split("");

export default function NexlySuggestions() {
  return (
    <section className="py-20 bg-black">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full border border-violet-500/20">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                Curated For You
              </span>
            </motion.div>

            {/* Character-by-character title */}
            <h2 className="text-3xl lg:text-5xl font-black text-white overflow-hidden">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.028,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  viewport={{ once: true }}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-zinc-500 mt-2 text-sm"
            >
              Top picks across every category — all in one place.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors group"
            >
              View all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {suggested.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: (i % 4) * 0.07 + Math.floor(i / 4) * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="group bg-zinc-900 rounded-xl overflow-hidden border border-white/8 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 flex flex-col"
            >
              <Link href={`/products/${product.id}`} className="block overflow-hidden">
                <div className="relative aspect-[4/3] bg-zinc-800">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>

              <div className="p-3 flex flex-col flex-1">
                <p className="text-xs text-zinc-600 mb-0.5">{product.brand}</p>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-sm font-semibold text-white line-clamp-2 leading-snug hover:text-violet-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span className="text-sm font-black text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    className="flex items-center gap-1 text-xs bg-white/8 hover:bg-violet-600 text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg transition-all duration-200 font-medium"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
