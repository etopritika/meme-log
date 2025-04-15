"use client";

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as HeroLink,
} from "@heroui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Table", href: "/table" },
  { name: "List", href: "/list" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <HeroNavbar className="[&>header]:px-0">
      <NavbarBrand>
        <HeroLink as={NextLink} href="/" className="font-bold text-xl">
          MemeLog
        </HeroLink>
      </NavbarBrand>

      <NavbarContent
        justify="center"
        className="w-full flex justify-center space-x-8"
      >
        {navLinks.map((link) => (
          <NavbarItem key={link.name}>
            <HeroLink
              as={NextLink}
              href={link.href}
              className={
                pathname === link.href ? "underline underline-offset-4" : ""
              }
            >
              {link.name}
            </HeroLink>
          </NavbarItem>
        ))}
      </NavbarContent>
    </HeroNavbar>
  );
}
