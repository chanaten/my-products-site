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
        className="mb-8 inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        &larr; Back to products
      </Link>

      <div className="mb-8 aspect-video rounded-xl bg-zinc-100 dark:bg-zinc-800" />

      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {product.title}
        </h1>
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
      </header>

      <div className="prose prose-zinc mb-8 max-w-none dark:prose-invert">
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {product.longDescription}
        </p>
      </div>

      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View Project &rarr;
        </a>
      )}
    </div>
  )
}
