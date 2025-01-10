"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header1() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setIsLangOpen(false);
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:atifahmed@gmail.com"
              className="flex items-center gap-1 hover:underline"
            >
              <span className="md:hidden">✉️</span>
              <span className="hidden md:block">✉️ atifahmed@gmail.com</span>
            </a>
            {/* Phone */}
            <div className="flex items-center gap-1">
              <span className="md:hidden">☎️</span>
              <span className="hidden md:block">☎️ (12345)666660</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative dropdown">
              <span
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsCurrencyOpen(false); // Close other dropdown
                }}
                aria-expanded={isLangOpen}
                aria-haspopup="true"
              >
                {selectedLanguage} ▼
              </span>
              {isLangOpen && (
                <ul className="absolute bg-white text-black mt-2 shadow-md rounded-md w-32 z-10">
                  {["English", "Español", "Français", "Deutsch", "中文"].map(
                    (language) => (
                      <li
                        key={language}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedLanguage(language);
                          setIsLangOpen(false);
                        }}
                      >
                        {language}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative dropdown">
              <span
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setIsCurrencyOpen(!isCurrencyOpen);
                  setIsLangOpen(false); // Close other dropdown
                }}
                aria-expanded={isCurrencyOpen}
                aria-haspopup="true"
              >
                {selectedCurrency} ▼
              </span>
              {isCurrencyOpen && (
                <ul className="absolute bg-white text-black mt-2 shadow-md rounded-md w-32 z-10">
                  {["USD", "EUR", "GBP", "JPY", "INR"].map((currency) => (
                    <li
                      key={currency}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setIsCurrencyOpen(false);
                      }}
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Links */}
            <Link href="\login" className="hover:underline">
              Login
            </Link>
            <span className="hover:underline cursor-pointer">Wishlist ♡</span>
            <Link href="/cart" className="hover:underline cursor-pointer">
              🛒
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
