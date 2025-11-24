"use client";
import Link from "next/link";
import React from "react";

export default function NavLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      {...props} 
      className={`
        relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-0 after:h-0.5 after:bg-[#B76E79]
        after:transition-all after:duration-300 
        hover:after:w-full
        ${props.className ?? ""}  
      `}
    >
      {children}
    </Link>
  );
}
