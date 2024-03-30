import type { Metadata } from "next";
import "./globals.css";

import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "awells.dev",
  description: "hmm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
