import { products, type Product } from "@/data/products"

export function getProducts(): Product[] {
  return products
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  products.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags)
}
