import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Krishan Kant Sen — Full Stack Developer",
    template: "%s | Krishan Kant Sen",
  },
  description:
    "Portfolio of Krishan Kant Sen, a full stack developer building thoughtful digital products, reliable APIs and modern web applications.",
  openGraph: {
    title: "Krishan Kant Sen — Full Stack Developer",
    description:
      "Full stack developer focused on thoughtful interfaces and reliable software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
