import ProductCard from "@/components/ProductCard"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts()

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <h1 className="animate-fade-in-up mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          I make things.
        </h1>
        <p className="animate-fade-in-up delay-1 max-w-xl text-base leading-relaxed text-zinc-500">
          A curated collection of digital products I have built —
          tools, apps, and experiments born from curiosity.
        </p>
        <div className="animate-fade-in-up delay-2 mt-8 flex gap-4">
          <a
            href="/about"
            className="inline-flex h-10 items-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95"
          >
            About me
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <div key={product.slug} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
