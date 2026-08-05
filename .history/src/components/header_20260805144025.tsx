import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0d1321] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-xl font-bold text-blue-400">
          EmperorCloud<span className="text-white">.io</span>
        </Link>
        <div className="flex gap-6 font-mono text-sm">
          <Link href="/projets" className="hover:text-blue-400 transition">
            Projets
          </Link>
          <Link href="/competences" className="hover:text-blue-400 transition">
            Compétences
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}