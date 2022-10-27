"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
      isActive: false,
    },
    {
      name: "Blog",
      href: "/blog",
      isActive: false,
    },
    {
      name: "About",
      href: "/about",
      isActive: false,
    },
    {
      name: "Contact",
      href: "/contact",
      isActive: false,
    },
  ];

  const pathname = usePathname();
  for (let link of navLinks) {
    if (pathname === link.href) {
      link.isActive = true;
    }
  }

  return (
    <nav className="flex items-center justify-between max-w-sm mx-auto capitalize">
      {navLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={
            "text-md md:text-lg mr-4 md:mr-6 font-medium " +
            (link.isActive && "text-amber-200")
          }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
