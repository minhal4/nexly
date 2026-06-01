"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, type Product } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative h-52 bg-gray-50">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <Badge
            variant="secondary"
            className="text-xs shrink-0 bg-indigo-50 text-indigo-700 border-0"
          >
            {categoryLabels[product.category]}
          </Badge>
          <span className="text-xs text-gray-400">{product.brand}</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2 text-sm leading-snug">
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
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs h-8 px-3"
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
