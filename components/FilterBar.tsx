"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const priceVal = searchParams.get("price") ?? "all";
  const brandVal = searchParams.get("brand") ?? "all";
  const ratingVal = searchParams.get("rating") ?? "all";
  const sortVal = searchParams.get("sort") ?? "popular";

  function update(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 mr-1">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </div>

          <Select
            value={priceVal}
            onValueChange={(v) => update("price", v)}
          >
            <SelectTrigger className="w-38 h-8 text-sm border-gray-200">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="0-25">Under $25</SelectItem>
              <SelectItem value="25-50">$25 – $50</SelectItem>
              <SelectItem value="50-150">$50 – $150</SelectItem>
              <SelectItem value="150-1000">$150+</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={brandVal}
            onValueChange={(v) => update("brand", v)}
          >
            <SelectTrigger className="w-32 h-8 text-sm border-gray-200">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="Sony">Sony</SelectItem>
              <SelectItem value="Bose">Bose</SelectItem>
              <SelectItem value="Apple">Apple</SelectItem>
              <SelectItem value="JBL">JBL</SelectItem>
              <SelectItem value="Anker">Anker</SelectItem>
              <SelectItem value="Belkin">Belkin</SelectItem>
              <SelectItem value="Spigen">Spigen</SelectItem>
              <SelectItem value="Bellroy">Bellroy</SelectItem>
              <SelectItem value="Honeywell">Honeywell</SelectItem>
              <SelectItem value="Vornado">Vornado</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={ratingVal}
            onValueChange={(v) => update("rating", v)}
          >
            <SelectTrigger className="w-36 h-8 text-sm border-gray-200">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Rating</SelectItem>
              <SelectItem value="4">4★ &amp; above</SelectItem>
              <SelectItem value="4.5">4.5★ &amp; above</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={sortVal}
            onValueChange={(v) => update("sort", v)}
          >
            <SelectTrigger className="w-44 h-8 text-sm border-gray-200">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
