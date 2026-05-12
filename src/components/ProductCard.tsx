"use client"

import { useRef } from "react"
import { animate } from "animejs"
import Link from "next/link"
import type { Product } from "@/data/products"

export default function ProductCard({ product, index }: { product: Product; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null)

  const gradients = [
    "from-violet-100 to-fuchsia-200",
    "from-sky-100 to-cyan-200",
    "from-amber-100 to-orange-200",
    "from-emerald-100 to-teal-200",
    "from-rose-100 to-pink-200",
    "from-indigo-100 to-blue-200",
  ]
  const gradient = gradients[(index ?? 0) % gradients.length]

  function handleMouseEnter() {
    const el = ref.current
    if (!el) return
    animate(el, {
      translateY: -6,
      boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
      duration: 400,
      ease: "outSpring",
      composition: "blend",
    })
    const banner = el.querySelector(".card-banner")
    if (banner) {
      animate(banner, {
        scale: 1.03,
        duration: 400,
        ease: "outSpring",
        composition: "blend",
      })
    }
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    animate(el, {
      translateY: 0,
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      duration: 400,
      ease: "outSpring",
      composition: "blend",
    })
    const banner = el.querySelector(".card-banner")
    if (banner) {
      animate(banner, {
        scale: 1,
        duration: 400,
        ease: "outSpring",
        composition: "blend",
      })
    }
  }

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block rounded-2xl border border-zinc-200/60 bg-white"
    >
      <div className={`card-banner aspect-video rounded-t-2xl bg-gradient-to-br ${gradient}`} />
      <div className="p-5">
        <h2 className="mb-1 text-lg font-semibold text-zinc-900">
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
      </div>
    </Link>
  )
}
