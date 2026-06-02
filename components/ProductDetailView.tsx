"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryLabels, type Product } from "@/lib/products";
import QuantitySelector from "@/components/QuantitySelector";

const ease = [0.25, 0.4, 0.25, 1] as const;

export default function ProductDetailView({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease }}
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white mb-10 transition-colors group"
        >
          <motion.span
            className="inline-flex"
            whileHover={{ x: -3 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.span>
          Back to Products
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Image — slides up + scales in */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/8 shadow-2xl shadow-black/60"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Details — stagger each element */}
        <div className="flex flex-col gap-6">

          {/* Badge + title */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease }}
            >
              <Badge className="bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3">
                {categoryLabels[product.category]}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="text-3xl font-black text-white leading-tight"
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22, ease }}
              className="text-sm text-zinc-500 mt-1.5"
            >
              by {product.brand}
            </motion.p>
          </div>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.28, ease }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.35 + i * 0.06, type: "spring", bounce: 0.5 }}
                >
                  <Star
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-zinc-700 text-zinc-700"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-medium text-zinc-300">{product.rating}</span>
            <span className="text-sm text-zinc-600">/ 5.0</span>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.38, type: "spring", bounce: 0.35 }}
            className="text-4xl font-black text-white"
          >
            ${product.price.toFixed(2)}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.44, ease }}
            className="text-zinc-400 leading-relaxed text-base"
          >
            {product.description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.52, ease }}
            className="border-t border-white/8 pt-6 flex flex-col gap-4"
          >
            <QuantitySelector />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="w-full bg-violet-600 hover:bg-violet-500 gap-2.5 text-base shadow-lg shadow-violet-500/25"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </motion.div>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease }}
            className="grid grid-cols-2 gap-4 text-sm border-t border-white/8 pt-6"
          >
            <div>
              <span className="text-zinc-600">Category</span>
              <p className="font-medium text-white mt-0.5">{categoryLabels[product.category]}</p>
            </div>
            <div>
              <span className="text-zinc-600">Brand</span>
              <p className="font-medium text-white mt-0.5">{product.brand}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
