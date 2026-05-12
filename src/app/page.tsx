import ProductCard from "@/components/ProductCard"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts()

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section className="mb-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          My Products
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          A curated collection of things I have built. Each project reflects
          something I learned or found interesting.
        </p>
      </section>
      <section>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
