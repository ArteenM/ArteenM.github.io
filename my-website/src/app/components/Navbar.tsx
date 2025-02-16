import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="text-xl font-bold"
        >
          arteenmo.me
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
