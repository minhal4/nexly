"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, type Product } from "@/lib/products";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <div className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/8 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col">
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative h-52 bg-zinc-800">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <Badge
            variant="secondary"
            className="text-xs shrink-0 bg-violet-500/10 text-violet-400 border border-violet-500/20"
          >
            {categoryLabels[product.category]}
          </Badge>
          <span className="text-xs text-zinc-600">{product.brand}</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-white hover:text-violet-400 transition-colors line-clamp-2 text-sm leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-zinc-700 text-zinc-700"
              }`}
            />
          ))}
          <span className="text-xs text-zinc-500 ml-1">{product.rating}</span>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-lg font-black text-white">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            className="bg-violet-600 hover:bg-violet-500 text-white text-xs h-8 px-3 shadow-md shadow-violet-500/20"
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
