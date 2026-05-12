"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, type JSAnimation } from "animejs"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const h1 = el.querySelector("h1")
    const paragraphs = el.querySelectorAll("p")

    const anims = [
      h1 &&
        animate(h1, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          ease: "outCubic",
        }),
      paragraphs.length &&
        animate(paragraphs, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 500,
          delay: stagger(100, { from: "first" }),
          ease: "outCubic",
        }),
    ].filter((a): a is JSAnimation => !!a)

    return () => {
      anims.forEach((a) => a.revert())
    }
  }, [])

  return (
    <div ref={ref} className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">About</h1>
      <div className="space-y-5 text-base leading-relaxed text-zinc-600">
        <p>
          Hi, I am a builder. I create digital products — tools, apps, and
          experiments — mostly because I find the process fascinating.
        </p>
        <p>
          This site is where I keep track of what I have made. Each project has
          a story: what problem I was trying to solve, what I learned, and how
          it turned out.
        </p>
        <p>
          Feel free to poke around and reach out if something catches your
          interest.
        </p>
      </div>
    </div>
  )
}
