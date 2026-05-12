import { animate, stagger } from "animejs"

export type AnimTarget = string | HTMLElement | SVGElement | NodeList

export function fadeInUp(
  target: AnimTarget,
  delay: number | string = 0,
  duration = 600,
) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration,
    delay,
    ease: "outCubic",
  })
}

export function fadeInDown(
  target: AnimTarget,
  delay: number | string = 0,
  duration = 600,
) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [-24, 0],
    duration,
    delay,
    ease: "outCubic",
  })
}

export function fadeIn(
  target: AnimTarget,
  delay: number | string = 0,
  duration = 500,
) {
  return animate(target, {
    opacity: [0, 1],
    duration,
    delay,
    ease: "outCubic",
  })
}

export function scaleIn(
  target: AnimTarget,
  delay: number | string = 0,
  duration = 500,
) {
  return animate(target, {
    opacity: [0, 1],
    scale: [0.92, 1],
    duration,
    delay,
    ease: "outBack",
  })
}

export function staggerFadeInUp(
  target: AnimTarget,
  staggerDelay = 80,
  duration = 600,
) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration,
    delay: stagger(staggerDelay, { from: "first" }),
    ease: "outCubic",
  })
}

export function springHover(
  target: AnimTarget,
  onLeave = false,
) {
  return animate(target, {
    scale: onLeave ? 1 : 1.02,
    translateY: onLeave ? 0 : -4,
    boxShadow: onLeave
      ? "0 1px 2px rgba(0,0,0,0)"
      : "0 8px 24px rgba(0,0,0,0.08)",
    duration: 400,
    ease: "outSpring",
    composition: "blend",
  })
}
