// ═══════════════════════════════════════════════════════════
// 📁 src/components/footer.tsx
// ═══════════════════════════════════════════════════════════

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0d1321] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ulrich Tchiem — Infrastructure & Cloud Solutions Architect
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link
            href="https://github.com/emperorCloud"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/ulrich-tchiem-a98334281"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}