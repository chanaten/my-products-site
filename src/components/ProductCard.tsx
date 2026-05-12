import Link from "next/link"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <div className="mb-3 aspect-video rounded-lg bg-zinc-100 dark:bg-zinc-800" />
      <h2 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {product.title}
      </h2>
      <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
