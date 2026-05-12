"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, type JSAnimation } from "animejs"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const h1 = el.querySelector("h1")
    const desc = el.querySelector(".description")
    const formFields = el.querySelectorAll(".form-field")
    const button = el.querySelector(".submit-btn")

    const anims = [
      h1 &&
        animate(h1, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          ease: "outCubic",
        }),
      desc &&
        animate(desc, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 500,
          delay: 150,
          ease: "outCubic",
        }),
      formFields.length &&
        animate(formFields, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 500,
          delay: stagger(80, { from: "first" }),
          ease: "outCubic",
        }),
      button &&
        animate(button, {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 500,
          delay: 400,
          ease: "outCubic",
        }),
    ].filter((a): a is JSAnimation => !!a)

    return () => {
      anims.forEach((a) => a.revert())
    }
  }, [])

  return (
    <div ref={ref} className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Contact</h1>
      <p className="description mb-10 text-base text-zinc-500">
        Have a question or want to work together? Send me a message.
      </p>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-5"
      >
        <div className="form-field grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>
        <button
          type="submit"
          className="submit-btn inline-flex h-10 items-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition-all hover:bg-zinc-700 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
