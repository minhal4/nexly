import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, categoryLabels } from "@/lib/products";
import QuantitySelector from "@/components/QuantitySelector";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/8 shadow-2xl shadow-black/50">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge className="bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl font-black text-white leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-zinc-500 mt-1.5">by {product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-zinc-700 text-zinc-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-300">{product.rating}</span>
              <span className="text-sm text-zinc-600">/ 5.0</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-black text-white">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed text-base">{product.description}</p>

            <div className="border-t border-white/8 pt-6 flex flex-col gap-4">
              <QuantitySelector />
              <Button
                size="lg"
                className="w-full bg-violet-600 hover:bg-violet-500 gap-2.5 text-base shadow-lg shadow-violet-500/25"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/8 pt-6">
              <div>
                <span className="text-zinc-600">Category</span>
                <p className="font-medium text-white mt-0.5">
                  {categoryLabels[product.category]}
                </p>
              </div>
              <div>
                <span className="text-zinc-600">Brand</span>
                <p className="font-medium text-white mt-0.5">{product.brand}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
