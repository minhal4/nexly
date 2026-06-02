"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";

function ProductsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const search   = searchParams.get("search");
  const price    = searchParams.get("price");
  const brand    = searchParams.get("brand");
  const rating   = searchParams.get("rating");
  const sort     = searchParams.get("sort") || "popular";

  let filtered = [...products];

  if (category) filtered = filtered.filter((p) => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }
  if (price && price !== "all") {
    const [min, max] = price.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= (max || Infinity));
  }
  if (brand && brand !== "all") filtered = filtered.filter((p) => p.brand === brand);
  if (rating && rating !== "all") filtered = filtered.filter((p) => p.rating >= parseFloat(rating));

  switch (sort) {
    case "price-asc":  filtered.sort((a, b) => a.price - b.price); break;
    case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
    case "rating":     filtered.sort((a, b) => b.rating - a.rating); break;
  }

  const categoryTitle = category
    ? category.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "All Products";

  const filterKey = `${category}-${search}-${price}-${brand}-${rating}-${sort}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Animated heading */}
      <motion.div
        key={categoryTitle}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-2xl font-black text-white">{categoryTitle}</h1>
        <p className="text-sm text-zinc-500 mt-1">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </motion.div>

      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-24 gap-3 text-center"
        >
          <span className="text-5xl">🔍</span>
          <p className="text-white font-medium text-lg">No products found</p>
          <p className="text-zinc-500 text-sm">Try adjusting your filters or search term</p>
        </motion.div>
      ) : (
        <motion.div
          key={filterKey}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{
                  duration: 0.32,
                  delay: i * 0.04,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<div className="h-12 bg-zinc-950 border-b border-white/8" />}>
        <FilterBar />
      </Suspense>
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-16 text-center text-zinc-600">
            Loading products…
          </div>
        }
      >
        <ProductsGrid />
      </Suspense>
      <Footer />
    </div>
  );
}
