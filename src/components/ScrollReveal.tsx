"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { animate } from "animejs"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  as?: "div" | "section" | "article" | "span"
  once?: boolean
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 600,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const translateX =
      direction === "left"
        ? [distance, 0]
        : direction === "right"
          ? [-distance, 0]
          : [0, 0]
    const translateY =
      direction === "up"
        ? [distance, 0]
        : direction === "down"
          ? [-distance, 0]
          : [0, 0]

    el.style.opacity = "0"

    const anim = animate(el, {
      opacity: [0, 1],
      translateX,
      translateY,
      duration,
      delay,
      ease: "outCubic",
      autoplay: false,
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            anim.play()
            if (once) observer.unobserve(el)
          } else if (!once) {
            anim.seek(0)
            anim.pause()
          }
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      anim.revert()
    }
  }, [delay, direction, distance, duration, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function useScrollReveal(
  options: Partial<ScrollRevealProps> = {},
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      delay = 0,
      direction = "up",
      distance = 24,
      duration = 600,
      once = true,
    } = options

    const translateX =
      direction === "left"
        ? [distance, 0]
        : direction === "right"
          ? [-distance, 0]
          : [0, 0]
    const translateY =
      direction === "up"
        ? [distance, 0]
        : direction === "down"
          ? [-distance, 0]
          : [0, 0]

    el.style.opacity = "0"

    const anim = animate(el, {
      opacity: [0, 1],
      translateX,
      translateY,
      duration,
      delay,
      ease: "outCubic",
      autoplay: false,
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            anim.play()
            if (once) observer.unobserve(el)
          }
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      anim.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
