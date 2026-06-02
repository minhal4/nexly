import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailView from "@/components/ProductDetailView";
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
      <ProductDetailView product={product} />
      <Footer />
    </div>
  );
}
