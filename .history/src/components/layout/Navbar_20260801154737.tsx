import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          Ulrich Tchiem
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}