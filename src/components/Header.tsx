"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("eulim-theme", next);
    setTheme(next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brand" href="/#home" onClick={closeMenu} aria-label="Eulim Science Club home">
          <Image src="/10.jpg" alt="Eulim Science Club logo" width={38} height={38} priority />
          <span className="brandText">
            <b>EULIM</b>
            <small>SCIENCE CLUB</small>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <button className="iconBtn" type="button" onClick={toggleTheme} aria-label="Toggle colour theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="btn btnPrimary headerCta" href="/#registration">
            Register
          </Link>
          <button
            className="iconBtn menuToggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <nav className={menuOpen ? "mobileNav open" : "mobileNav"} aria-label="Mobile" aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
        <Link className="btn btnPrimary" href="/#registration" onClick={closeMenu}>
          Register now
        </Link>
      </nav>
    </header>
  );
}
