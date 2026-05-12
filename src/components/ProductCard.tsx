import Link from "next/link"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative rounded-2xl border border-zinc-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/50"
    >
      <div className="mb-4 aspect-video rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 transition-transform duration-300 group-hover:scale-[1.02]" />
      <h2 className="mb-1.5 text-lg font-semibold text-zinc-900">
        {product.title}
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-zinc-500">
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
