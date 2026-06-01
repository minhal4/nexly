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
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 shadow-sm">
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
              <Badge className="bg-indigo-50 text-indigo-700 border-0 mb-3">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1.5">by {product.brand}</p>
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
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
              <span className="text-sm text-gray-400">/ 5.0</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              {product.description}
            </p>

            <div className="border-t border-gray-100 pt-6 flex flex-col gap-4">
              <QuantitySelector />
              <Button
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2.5 text-base shadow-md shadow-indigo-100"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-100 pt-6">
              <div>
                <span className="text-gray-400">Category</span>
                <p className="font-medium text-gray-900 mt-0.5">
                  {categoryLabels[product.category]}
                </p>
              </div>
              <div>
                <span className="text-gray-400">Brand</span>
                <p className="font-medium text-gray-900 mt-0.5">
                  {product.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
