"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { products } from "@/lib/products";

const floatingProducts = products.filter((p) => p.featured).slice(0, 3);

const floatPositions = [
  { top: "8%", right: "5%", rotate: "-4deg", delay: 0.2 },
  { top: "35%", right: "36%", rotate: "3deg", delay: 0.4 },
  { bottom: "10%", right: "12%", rotate: "-2deg", delay: 0.6 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] bg-white overflow-hidden flex items-center">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(to right, rgba(99,102,241,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Fade overlay — stronger on left so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 mb-5">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                New Arrivals 2024
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Next-Level
                <br />
                <span className="text-indigo-600">Electronics,</span>
                <br />
                Delivered.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-gray-500 max-w-md leading-relaxed"
            >
              Shop headphones, gadgets, fans, and accessories. Premium brands.
              Unbeatable prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 gap-2 shadow-md shadow-indigo-200"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products?category=gadgets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50"
                >
                  View Gadgets
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: "500+", label: "Products" },
                { value: "4.8★", label: "Avg Rating" },
                { value: "50K+", label: "Customers" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating product cards */}
          <div className="relative h-[520px] hidden lg:block">
            {floatingProducts.map((product, i) => {
              const pos = floatPositions[i];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: pos.delay }}
                  whileHover={{ scale: 1.04, rotate: "0deg" }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    right: pos.right,
                    bottom: pos.bottom,
                    rotate: pos.rotate,
                  }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 w-52 overflow-hidden cursor-pointer"
                >
                  <div className="relative h-36 bg-gray-50">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-gray-900 line-clamp-1">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-sm font-bold text-indigo-600">
                        ${product.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-gray-500">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
