import Link from "next/link";
import { categories } from "@/categories";
import DarkMode from "@/components/darkmode";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between font-bold gap-x-4">
        <div className="flex gap-x-4">
          <Link href="/">
            Home
          </Link>
          {categories.map((cat) => (
            <Link key={cat} href={`/category/${cat}`}>
              {cat}
            </Link>
          ))}
        </div>
        <DarkMode />
      </nav>
    </header>
  );
}
