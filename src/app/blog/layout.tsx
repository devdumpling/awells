export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-md px-4">
      <main>{children}</main>
    </div>
  );
}
