import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <h2 className="mb-1 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-400">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
