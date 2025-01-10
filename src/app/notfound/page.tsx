import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSection from "../components/logos";

const Notfound = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl  text-blue-950 font-bold">404 Not Found</h1>
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
            404 Not Found
            </Link>
          </p>
        </div>
      </header>
 {/* Centered Image */}
 <div className="flex justify-center mb-4">
  <Image
    src="/notfound/404.png" // Replace with your image path
    alt="404 Not Found"
    width={913} // Set the width
    height={527} // Set the height (rounded from 526.6px)
    className="object-contain"
  />
</div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center">
  <p className="text-lg font-bold text-blue-900 mb-6">
    Oops! The page you requested was not found!
  </p>
  <Link href="/" legacyBehavior>
  <a className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300">
    Back To Home
  </a>
</Link>

</div>

      {/* Footer Section */}
      <LogoSection />
    </div>
  );
};

export default Notfound;
