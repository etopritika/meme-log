"use client";

import { Link } from "@heroui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Table", href: "/table" },
  { name: "List", href: "/list" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center">
      <Link as={NextLink} href="/" className="font-bold text-xl">
        MemeLog
      </Link>
      <div className="flex space-x-6 w-full justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            as={NextLink}
            href={link.href}
            className={
              pathname === link.href ? "underline underline-offset-4" : ""
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
