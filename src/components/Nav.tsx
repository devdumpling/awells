import Link from "next/link";

export function Nav() {
  return (
    <nav className="translate-y-0/hidden fixed inset-x-0 top-0 z-50 bg-white shadow-sm md:translate-y-0.5 dark:bg-gray-950">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link className="font-semibold" href="#">
          Devon Wells
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link className="transition-colors hover:text-gray-500 dark:hover:text-gray-400" href="#">
            Posts
          </Link>
          <Link className="transition-colors hover:text-gray-500 dark:hover:text-gray-400" href="#">
            About
          </Link>
          <Link className="transition-colors hover:text-gray-500 dark:hover:text-gray-400" href="#">
            Work
          </Link>
        </nav>
      </div>
    </nav>
  );
}
