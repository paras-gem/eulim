"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#categories", label: "Categories" },
  { href: "/#guidelines", label: "Guidelines" },
  { href: "/stellar-cipher", label: "Star Cipher" },
  { href: "/#registration", label: "Registration" },
  { href: "/#contact", label: "Contact" },
];

export default function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("eulim-theme", next ? "dark" : "light");
  };
  return (
    <div className="appShell">
      <header className="siteHeader">
        <Link className="brand" href="/#home" onClick={closeMenu} aria-label="Eulim Science Exhibition home">
          <Image src="/10.jpg" alt="Eulim Science Club" width={48} height={48} priority />
          <span><b>EULIM</b><small>SCIENCE CLUB</small></span>
        </Link>
        <nav className={menuOpen ? "siteNav open" : "siteNav"} aria-label="Main navigation">
          {links.map((link) => <Link href={link.href} key={link.href} onClick={closeMenu}>{link.label}</Link>)}
        </nav>
        <div className="headerActions">
          <button className="themeToggle" type="button" onClick={toggleTheme} aria-label="Toggle colour theme"><Moon size={17} /></button>
          <Link className="headerCta" href="/#contact">Connect <span>↗</span></Link>
        </div>
        <button className="menuButton" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <main>{children}</main>
      <ScrollReveal />
      <footer className="siteFooter"><span>© 2025 Eulim Science Club</span><span>CHRIST (Deemed to be University), Delhi NCR</span><span>School of Sciences</span></footer>
    </div>
  );
}
