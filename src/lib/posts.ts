import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(source)
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((s) => getPostMeta(s.replace(/\.mdx$/, "")))
    .filter((p): p is PostMeta => p !== null)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getPostSource(slug: string): string | null {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, "utf-8")
}
