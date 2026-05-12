import Link from "next/link"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import { getPostSlugs, getPostSource, getPostMeta } from "@/lib/posts"

export async function generateStaticParams() {
  return getPostSlugs().map((s) => ({ slug: s.replace(/\.mdx$/, "") }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const source = getPostSource(slug)
  const meta = getPostMeta(slug)

  if (!source || !meta) notFound()

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  })

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        &larr; Back to blog
      </Link>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {meta.title}
        </h1>
        {meta.date && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </header>
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        {content}
      </div>
    </article>
  )
}
