"use client";

import { useState } from "react";
import Link from "next/link";
import Header1 from "./header1";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <header className="bg-white shadow-md">
      <Header1/>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-bold text-black cursor-pointer">
            Hekto
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about/page.tsx" },
            { name: "Products", href: "/products" },
            { name: "Blog", href: "src/app/blog/page.tsx" },
            { name: "Shop", href: "/shop" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span className="hover:text-pink-500 cursor-pointer">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="hidden md:flex items-center border border-gray-300 rounded">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none"
          />
          <button className="bg-pink-500 text-white px-4 py-2">
            🔍
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-50 text-gray-700 space-y-4 px-4 py-4">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/pages" },
            { name: "Products", href: "/products" },
            { name: "Blog", href: "/blog" },
            { name: "Shop", href: "/shop" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-pink-500"
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
