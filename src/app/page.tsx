"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, type JSAnimation } from "animejs"
import ProductCard from "@/components/ProductCard"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts()
  const headerRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const h1 = header.querySelector("h1")
    const p = header.querySelector("p")
    const btns = header.querySelector(".buttons")

    const tl = [
      h1 && animate(h1, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 700,
        ease: "outCubic",
      }),
      p && animate(p, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 150,
        ease: "outCubic",
      }),
      btns && animate(btns, {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 500,
        delay: 300,
        ease: "outCubic",
      }),
    ].filter((a): a is JSAnimation => !!a)

    return () => {
      tl.forEach((a) => a.revert())
    }
  }, [])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = grid.querySelectorAll(".product-card-wrapper")
    if (!cards.length) return

    const anim = animate(cards, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: stagger(100, { from: "first" }),
      ease: "outCubic",
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anim.play()
          observer.unobserve(grid)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(grid)

    return () => {
      observer.disconnect()
      anim.revert()
    }
  }, [])

  return (
    <>
      <section
        ref={headerRef}
        className="mx-auto max-w-2xl px-6 py-24 sm:py-32"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          I make things.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-500">
          A curated collection of digital products I have built —
          tools, apps, and experiments born from curiosity.
        </p>
        <div className="buttons mt-8 flex gap-4">
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
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <div key={product.slug} className="product-card-wrapper">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
