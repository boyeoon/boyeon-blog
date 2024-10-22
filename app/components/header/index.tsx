import Link from "next/link";
import DarkMode from "@/components/darkmode";

export default function Header() {
  return (
    <header className="pl-16">
      <nav className="flex font-bold gap-x-4">
        <Link className="rounded p-[0.2rem] no-underline hover:bg-slate-400" href="/">
          Home
        </Link>
        <Link className="rounded p-[0.2rem] no-underline hover:bg-slate-400" href="/blog">
          Blog
        </Link>
        <Link className="rounded p-[0.2rem] no-underline hover:bg-slate-400" href="/project">
          Projects
        </Link>
        <Link className="rounded p-[0.2rem] no-underline hover:bg-slate-400" href="/resume">
          Resume
        </Link>
        <DarkMode />
      </nav>
    </header>
  );
}