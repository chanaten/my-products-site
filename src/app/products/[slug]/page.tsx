import Link from "next/link"
import { notFound } from "next/navigation"
import { getProduct, getProducts } from "@/lib/products"

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-900"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
          <path d="M10 12L6 8L10 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </Link>

      <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white">
        <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200" />
      </div>

      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          {product.title}
        </h1>
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
      </header>

      <p className="mb-10 text-base leading-relaxed text-zinc-600">
        {product.longDescription}
      </p>

      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95"
        >
          View Project
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="stroke-current">
            <path d="M6 4L10 8L6 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </div>
  )
}
