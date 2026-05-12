"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

export default function Footer() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = Array.from(el.children[0]?.children ?? [])
    if (!children.length) return

    animate(children, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 500,
      delay: stagger(80, { from: "first" }),
      ease: "outCubic",
    })
  }, [])

  return (
    <footer ref={ref} className="border-t border-zinc-200/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="https://github.com/chanaten" className="transition-colors hover:text-zinc-900">
            GitHub
          </a>
          <a href="/contact" className="transition-colors hover:text-zinc-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
