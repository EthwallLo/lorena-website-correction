"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          <Image src="/logo.svg" alt="Logo" width={160} height={100} />
        </Link>

        <div className="flex space-x-8 text-gray-800 text-lg">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/prestations">Prestations</NavLink>
          <NavLink href="/qui-suis-je">Qui suis-je</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
