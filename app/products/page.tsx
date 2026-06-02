"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";

function ProductsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const price = searchParams.get("price");
  const brand = searchParams.get("brand");
  const rating = searchParams.get("rating");
  const sort = searchParams.get("sort") || "popular";

  let filtered = [...products];

  if (category) filtered = filtered.filter((p) => p.category === category);

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (price && price !== "all") {
    const [min, max] = price.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= (max || Infinity));
  }

  if (brand && brand !== "all") filtered = filtered.filter((p) => p.brand === brand);

  if (rating && rating !== "all")
    filtered = filtered.filter((p) => p.rating >= parseFloat(rating));

  switch (sort) {
    case "price-asc":  filtered.sort((a, b) => a.price - b.price); break;
    case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
    case "rating":     filtered.sort((a, b) => b.rating - a.rating); break;
  }

  const categoryTitle = category
    ? category.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "All Products";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">{categoryTitle}</h1>
        <p className="text-sm text-zinc-500 mt-1">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
          <span className="text-5xl">🔍</span>
          <p className="text-white font-medium text-lg">No products found</p>
          <p className="text-zinc-500 text-sm">Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
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
            Loading products...
          </div>
        }
      >
        <ProductsGrid />
      </Suspense>
      <Footer />
    </div>
  );
}
