"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname();
  const isCurrentPage = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      aria-current={isCurrentPage ? "page" : undefined}
      className={`
        relative pb-1 rounded-sm
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-0 after:h-0.5 after:bg-[#B76E79]
        after:transition-all after:duration-300
        hover:after:w-full
        focus-visible:after:w-full
        ${props.className ?? ""}
      `}
    >
      {children}
    </Link>
  );
}
