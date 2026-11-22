"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link
          className="brand-mark"
          href="/"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Krishan Kant Sen home"
        >
          <span className="brand-symbol">K.</span>
          <span>KRISHAN KANT SEN</span>
        </Link>

        <div className="desktop-navigation">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {isMenuOpen && (
          <div className="mobile-navigation" id="mobile-navigation">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
