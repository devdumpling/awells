import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link className="font-semibold" href="#">
          Devon Wells
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
        </nav>
      </div>
    </nav>
  );
}
