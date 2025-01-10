import FeaturedProducts from "../components/featrueproducts";
import LatestProducts from "../components/latestproduct";
import LogoSection from "../components/logos";
import TopCategories from "../components/top";
import TrendingSection from "../components/trendingsection";
import Link from "next/link";
import React from "react";

export default function Products () {
    return(
         <div className="min-h-screen bg-gray-50">
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold"> Products</h1>
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
          Products
            </Link>
          </p>
        </div>
      </header>
      
        <FeaturedProducts/>
        <LatestProducts/>
        <TrendingSection/>
        <TopCategories/>
        <LogoSection/>
       </div>
    )
}