"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 " +
        (scrolled ? "bg-white shadow-sm" : "bg-transparent")
      }
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/logo-moderne.svg" alt="Logo" width={140} height={80} />
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-800 text-lg">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/correction">Correction</NavLink>
          <NavLink href="/qui-suis-je">Qui suis-je</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md p-6 flex flex-col space-y-4 text-lg">
          <NavLink href="/" onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink href="/correction" onClick={() => setOpen(false)}>Correction</NavLink>
          <NavLink href="/qui-suis-je" onClick={() => setOpen(false)}>Qui suis-je</NavLink>
          <NavLink href="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
