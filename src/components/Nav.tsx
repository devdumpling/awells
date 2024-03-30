import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <div className="p-4 md:p-6">
        <Link className="font-mono font-semibold" href="/">
          /dev.wells
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/blog">/blg</Link>
          <Link href="/about">/abt</Link>
          <Link href="/work">/wrk</Link>
        </nav>
      </div>
    </nav>
  );
}
