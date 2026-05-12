export interface Product {
  slug: string
  title: string
  description: string
  longDescription: string
  images: string[]
  tags: string[]
  link: string
  featured: boolean
  year: number
}

export const products: Product[] = [
  {
    slug: "example-product",
    title: "Example Product",
    description: "A short description of what this product does.",
    longDescription:
      "A longer, more detailed description of the product. Explain what problem it solves, what tech it uses, and why you built it. This section can be a few paragraphs.",
    images: ["/images/example-1.jpg", "/images/example-2.jpg"],
    tags: ["React", "TypeScript", "API"],
    link: "https://example.com",
    featured: true,
    year: 2026,
  },
  {
    slug: "another-project",
    title: "Another Project",
    description: "A different project with its own description.",
    longDescription:
      "Details about this project. What makes it interesting? What did you learn building it?",
    images: ["/images/another-1.jpg"],
    tags: ["Python", "CLI"],
    link: "https://example.com",
    featured: false,
    year: 2025,
  },
]
