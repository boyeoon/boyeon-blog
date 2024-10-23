import Link from "next/link";
import DarkMode from "@/components/darkmode";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between font-bold gap-x-4">
        <div className="flex gap-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/project">
            Projects
          </Link>
          <Link href="/resume">
            Resume
          </Link>
        </div>
        <DarkMode />
      </nav>
    </header>
  );
}
