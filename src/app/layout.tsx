import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lion's Sporting Club",
  description:
    "Building Unity, Building Community. Established in 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
