export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="https://github.com/chanaten" className="transition-colors hover:text-zinc-900">
            GitHub
          </a>
          <a href="/contact" className="transition-colors hover:text-zinc-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
