import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <Link className="font-semibold" href="#">
          Devon Wells
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
        </nav>
      </div>
    </nav>
  );
}
