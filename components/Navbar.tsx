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
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-md shadow-violet-500/30 group-hover:bg-violet-500 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Nexly
            </span>
          </Link>

          {/* Category Links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.value}
                href={`/products?category=${cat.value}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  pathname === "/products" && activeCategory === cat.value
                    ? "bg-violet-500/15 text-violet-400 border border-violet-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/8"
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="pl-9 w-44 h-9 text-sm bg-zinc-900 border-white/10 text-white placeholder:text-zinc-500 focus:border-violet-500/50"
                />
              </div>
            </form>
            <Link
              href="/products"
              className="relative p-2 hover:bg-white/8 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
