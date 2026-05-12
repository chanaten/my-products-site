import Link from "next/link"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border-b border-zinc-200/60 pb-6 transition-opacity hover:opacity-70"
    >
      <h2 className="mb-1.5 text-lg font-semibold text-zinc-900">
        {product.title}
      </h2>
      <p className="mb-3 text-sm leading-relaxed text-zinc-500">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
