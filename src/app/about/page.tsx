export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">About</h1>
      <div className="prose prose-zinc dark:prose-invert">
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Hi, I am a builder. I create digital products — tools, apps, and
          experiments — mostly because I find the process fascinating.
        </p>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          This site is where I keep track of what I have made. Each project has
          a story: what problem I was trying to solve, what I learned, and how
          it turned out.
        </p>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Feel free to poke around and reach out if something catches your
          interest.
        </p>
      </div>
    </div>
  )
}
