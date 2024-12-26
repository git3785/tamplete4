import React from "react";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="bg-[rgba(246, 245, 255, 1);
  ] text-gray-800">
  <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold">FAQ</h1>
          <p className="text-sm text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link href="/myaccount" className="text-pink-600 font-bold hover:underline">
              FAQ
            </Link>
          </p>
        </div>
      </header>
      </div>
  )}