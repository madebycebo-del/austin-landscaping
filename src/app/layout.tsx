import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TerraCraft Landscaping | Austin, TX",
  description: "Premium landscape design and installation for Austin's most discerning homeowners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
