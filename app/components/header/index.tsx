import Link from "next/link";
import DarkMode from "@/components/darkmode";

export default function Header() {
  return (
    <header className="pl-16">
      <nav className="flex items-center justify-between font-bold gap-x-4">
        <div className="flex gap-x-4">
          <Link className="p-1 no-underline rounded hover:bg-slate-400" href="/">
            Home
          </Link>
          <Link className="p-1 no-underline rounded hover:bg-slate-400" href="/blog">
            Blog
          </Link>
          <Link className="p-1 no-underline rounded hover:bg-slate-400" href="/project">
            Projects
          </Link>
          <Link className="p-1 no-underline rounded hover:bg-slate-400" href="/resume">
            Resume
          </Link>
        </div>
        <DarkMode />
      </nav>
    </header>
  );
}
