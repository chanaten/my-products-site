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
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-900"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
          <path d="M10 12L6 8L10 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </Link>
      <header className="mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {meta.title}
        </h1>
        {meta.date && (
          <p className="text-sm text-zinc-400">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </header>
      <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-zinc-900 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-zinc-300 hover:prose-a:decoration-zinc-900 prose-code:rounded-lg prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-pre:rounded-xl prose-pre:border prose-pre:border-zinc-200/60 prose-pre:bg-white prose-img:rounded-xl">
        {content}
      </div>
    </article>
  )
}
