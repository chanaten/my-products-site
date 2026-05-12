"use client"

import { useEffect, useRef } from "react"
import { animate } from "animejs"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const indicator = indicatorRef.current
    if (!indicator) return

    const activeLink = navRef.current?.querySelector<HTMLLIElement>(
      `li a[href="${pathname}"]`,
    )
    if (!activeLink) {
      animate(indicator, {
        opacity: 0,
        duration: 200,
        ease: "outCubic",
      })
      return
    }

    const { offsetLeft, offsetWidth } = activeLink.parentElement!
    animate(indicator, {
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
      duration: 300,
      ease: "outCubic",
    })
  }, [pathname])

  function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    const link = e.currentTarget
    animate(link, {
      scale: 1.05,
      duration: 200,
      ease: "outSpring",
      composition: "blend",
    })
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    const link = e.currentTarget
    animate(link, {
      scale: 1,
      duration: 200,
      ease: "outSpring",
      composition: "blend",
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 transition-opacity hover:opacity-70"
        >
          Products
        </Link>
        <ul
          ref={navRef}
          className="relative flex items-center gap-8 text-sm"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`relative transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute -bottom-1 h-px bg-zinc-900"
          />
        </ul>
      </nav>
    </header>
  )
}
