"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Zap, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const categories = [
  { label: "Headphones", value: "headphones" },
  { label: "Fans", value: "fans" },
  { label: "Phone Covers", value: "phone-covers" },
  { label: "Gadgets", value: "gadgets" },
  { label: "Accessories", value: "accessories" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }
    router.push(`/products?${params.toString()}`);
  }

  const activeCategory = searchParams.get("category");

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Nexly
            </span>
          </Link>

          {/* Category Links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.value}
                href={`/products?category=${cat.value}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === "/products" && activeCategory === cat.value
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Search + Cart */}
          <div className="flex items-center gap-2 shrink-0">
            <form onSubmit={handleSearch} className="hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="pl-9 w-44 h-9 text-sm border-gray-200 focus:border-indigo-400"
                />
              </div>
            </form>
            <Link
              href="/products"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
