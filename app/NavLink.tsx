"use client";
import Link from "next/link";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-0 after:h-0.5 after:bg-[#B76E79]
        after:transition-all after:duration-300 
        hover:after:w-full">
      {children}
    </Link>
  );
}
