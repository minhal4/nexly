"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";
import { products } from "@/lib/products";

const floatingProducts = products.filter((p) => p.featured).slice(0, 3);

const floatPositions = [
  { top: "4%", right: "2%", rotate: "-5deg", delay: 0.3 },
  { top: "38%", right: "38%", rotate: "4deg", delay: 0.5 },
  { bottom: "6%", right: "10%", rotate: "-2deg", delay: 0.7 },
];

const titleLines = ["Next-Level", "Electronics,", "Delivered."];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden flex items-center">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(139,92,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Animated blob glows */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Fade to black on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ────────────────────────────────────────── */}
          <div className="space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 text-violet-400 text-sm font-medium rounded-full border border-violet-500/20">
                <motion.span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                New Arrivals 2025
                <Zap className="w-3.5 h-3.5" />
              </span>
            </motion.div>

            {/* Title — curtain-reveal per line */}
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              {titleLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.25 + i * 0.18,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {i === 1 ? (
                      <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtext — word stagger */}
            <motion.p
              className="text-lg text-zinc-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              Shop headphones, gadgets, fans, and accessories.{" "}
              <motion.span
                className="text-white font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Premium brands. Unbeatable prices.
              </motion.span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-500 gap-2 shadow-lg shadow-violet-500/30 text-white font-semibold"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products?category=gadgets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30"
                >
                  View Gadgets
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: "1,000+", label: "Products" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "100K+", label: "Customers" },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
                >
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-sm text-zinc-500">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating product cards ────────────────────── */}
          <div className="relative h-[540px] hidden lg:block">
            {floatingProducts.map((product, i) => {
              const pos = floatPositions[i];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: pos.delay, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ scale: 1.05, rotate: "0deg", y: -4 }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    right: pos.right,
                    bottom: pos.bottom,
                    rotate: pos.rotate,
                  }}
                  className="bg-zinc-900 rounded-2xl border border-white/10 w-52 overflow-hidden cursor-pointer shadow-2xl shadow-black/50"
                >
                  <div className="relative h-36 bg-zinc-800">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  </div>
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-white line-clamp-1">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-sm font-bold text-violet-400">
                        ${product.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-zinc-400">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative ring */}
            <motion.div
              className="absolute top-1/2 right-1/2 w-64 h-64 rounded-full border border-violet-500/10 -translate-y-1/2 translate-x-1/2"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 right-1/2 w-96 h-96 rounded-full border border-indigo-500/10 -translate-y-1/2 translate-x-1/2"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
