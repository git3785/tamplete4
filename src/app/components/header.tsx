"use client";

import { useState } from "react";
import Link from "next/link";
import Header1 from "./header1";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); 

  const handleMouseEnter = () => {
    setIsDropdownOpen(true); 
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  return (
    <header className="bg-white shadow-md">
      <Header1 />

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
          {/* Home Link */}
          <li>
            <Link href="/">
              <span className="hover:text-pink-500 cursor-pointer">Home</span>
            </Link>
          </li>

          {/* Page with Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-pink-500">Page</span>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <li>
                  <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
                </li>
                <li>
                  <Link href="/billingdetail" className="block px-4 py-2 hover:bg-gray-100">Billing Details</Link>
                </li>
                <li>
                  <Link href="/ordercomplete" className="block px-4 py-2 hover:bg-gray-100">Order Completed</Link>
                </li>
                <li>
                  <Link href="/shop-list" className="block px-4 py-2 hover:bg-gray-100">Shop List</Link>
                </li>
                <li>
                  <Link href="/gird" className="block px-4 py-2 hover:bg-gray-100">Shop Grid Default</Link>
                </li>
                <li>
                  <Link href="/shop-left-sidebar" className="block px-4 py-2 hover:bg-gray-100">Shop Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                </li>
                <li>
                  <Link href="/contect" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                </li>
                <li>
                  <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
                </li>
                <li>
                  <Link href="/forgetpassword" className="block px-4 py-2 hover:bg-gray-100">Forgot Password</Link>
                </li>
                <li>
                  <Link href="/notfound" className="block px-4 py-2 hover:bg-gray-100">Not Found</Link>
                </li>
                <li>
                  <Link href="/Faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          {[ 
            { name: "About", href: "/about" },
            { name: "Products", href: "/products" },
            { name: "Blog", href: "/blog" },
            { name: "Shop", href: "/shop-list" },
            { name: "Contact", href: "/contect" },
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
          {/* Home Link */}
          <li>
            <Link href="/">
              <span
                onClick={() => setIsOpen(false)}
                className="block hover:text-pink-500"
              >
                Home
              </span>
            </Link>
          </li>

          {/* Page with Mobile Dropdown */}
          <li className="relative">
            <span
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} // Toggle dropdown on mobile
              className="cursor-pointer hover:text-pink-500"
            >
              Page
            </span>
            {isMobileDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <li>
                  <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
                </li>
                <li>
                  <Link href="/billingdetail" className="block px-4 py-2 hover:bg-gray-100">Billing Details</Link>
                </li>
                <li>
                  <Link href="/ordercomplete" className="block px-4 py-2 hover:bg-gray-100">Order Completed</Link>
                </li>
                <li>
                  <Link href="/shop-list" className="block px-4 py-2 hover:bg-gray-100">Shop List</Link>
                </li>
                <li>
                  <Link href="/gird" className="block px-4 py-2 hover:bg-gray-100">Shop Grid Default</Link>
                </li>
                <li>
                  <Link href="/shop-left-sidebar" className="block px-4 py-2 hover:bg-gray-100">Shop Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                </li>
                <li>
                  <Link href="/contect" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                </li>
                <li>
                  <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
                </li>
                <li>
                  <Link href="/forgetpassword" className="block px-4 py-2 hover:bg-gray-100">Forgot Password</Link>
                </li>
                <li>
                  <Link href="/notfound" className="block px-4 py-2 hover:bg-gray-100">Not Found</Link>
                </li>
                <li>
                  <Link href="/Faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          {[ 
            { name: "About", href: "/about" },
            { name: "Products", href: "/products" },
            { name: "Blog", href: "/blog" },
            { name: "Shop", href: "/shop-list" },
            { name: "Contact", href: "/contect" },
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
