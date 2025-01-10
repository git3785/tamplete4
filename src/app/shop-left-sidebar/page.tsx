"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../components/product-cart";

const ShopLeftSidebar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedPrice, setSelectedPrice] = useState(100);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(Number(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold">Shop Left Sidebar</h1>
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
              Shop Left Sidebar
            </Link>
          </p>
        </div>
      </header>

      <div className="px-4 md:px-16 lg:px-64 py-20 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-800">
          <h2 className="font-bold text-xl text-blue-950">Ecommerce Accessories & Fashion Items</h2>
          <p className="text-gray-500 text-sm">About 9,620 results (0.62 seconds)</p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 text-sm mt-4 md:mt-0">
          {/* Per Page Dropdown */}
          <div className="flex items-center space-x-1">
            <span className="text-blue-900 font-semibold">Per Page:</span>
            <select className="border rounded px-2 py-1 text-gray-700">
              <option>12</option>
              <option>24</option>
              <option>36</option>
              <option>48</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-900 font-semibold">Sort By:</span>
            <select className="border rounded px-2 py-1 text-gray-700">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>New Arrivals</option>
            </select>
          </div>

          {/* View Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-900 font-semibold">View:</span>
            <select className="border rounded px-2 py-1 text-gray-700" style={{ width: "100px", height: "40px" }}>
              <option>12</option>
              <option>24</option>
              <option>36</option>
              <option>48</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap">
        {/* Sidebar */}
        <aside className="p-6 w-full md:w-1/4 md:ml-[300px]">
          {/* Product Brand */}
          <div className="mb-6">
            <h3 className="font-bold underline text-blue-900 mb-2">Product Brand</h3>
            <ul className="space-y-2">
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Unique Furniture Restor",
                "Dream Furniture Flipping",
                "Young Repurposed",
                "Green DIY furniture",
              ].map((brand) => (
                <li key={brand} className="flex items-center space-x-2">
                  <input type="checkbox" id={brand} className="form-checkbox" />
                  <label htmlFor={brand} className="text-gray-600">
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Offer */}
          <div className="mb-6">
            <h3 className="font-bold underline text-blue-900 mb-2">Discount Offer</h3>
            <ul className="space-y-2">
              {[
                "20% Cashback",
                "5% Cashback Offer",
                "25% Discount Offer",
              ].map((offer) => (
                <li key={offer} className="flex items-center space-x-2">
                  <input type="checkbox" id={offer} className="form-checkbox" />
                  <label htmlFor={offer} className="text-gray-600">
                    {offer}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Items */}
          <div className="mb-6">
            <h3 className="font-bold underline text-blue-900 mb-2">Rating</h3>
            <ul className="space-y-2">
              {[
                { stars: 5, count: "(2341)" },
                { stars: 4, count: "(1726)" },
                { stars: 3, count: "(258)" },
                { stars: 2, count: "(25)" },
              ].map((rating, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input type="checkbox" id={`rating-${index}`} className="form-checkbox" />
                  <label htmlFor={`rating-${index}`} className="text-gray-600 flex items-center space-x-1">
                    <span>
                      {"★".repeat(rating.stars)}{"☆".repeat(5 - rating.stars)}
                    </span>
                    <span>{rating.count}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-bold underline text-blue-900 mb-2">Categories</h3>
            <ul className="space-y-2">
              {[
                "Prestashop",
                "Magento",
                "Bigcommerce",
                "osCommerce",
                "3dcart",
                "Bags",
                "Accessories",
                "Jewellery",
                "Watches",
              ].map((category) => (
                <li key={category} className="flex items-center space-x-2">
                  <input type="checkbox" id={category} className="form-checkbox" />
                  <label htmlFor={category} className="text-gray-600">
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-bold underline text-blue-900 mb-2">Price Filter</h3>

            {/* Price Filter Options */}
            <ul>
              {[
                "$0.00 - $150.00",
                "$150.00 - $350.00",
                "$150.00 - $504.00",
                "$450.00 +",
              ].map((range) => (
                <li key={range} className="flex items-center space-x-2">
                  <input type="checkbox" id={range} className="form-checkbox" />
                  <label htmlFor={range} className="text-gray-600">
                    {range}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input type="text" placeholder="Search..." className="w-72 p-2 border border-gray-300 rounded" />
          </div>

          {/* Filter by Color */}
          <div>
            <h3 className="font-bold underline text-blue-900 mb-2">Filter by Color</h3>
            <div className="flex space-x-4">
              {["Blue", "Orange", "Brown", "Green", "Purple", "Sky"].map((color) => (
                <div key={color} className="flex flex-col items-center">
                  <input type="radio" id={color} name="color" className="hidden" />
                  <label htmlFor={color} className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer" style={{ backgroundColor: color.toLowerCase() }}></label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Cards */}
        <ProductCard />
      </div>
    </div>
  );
};

export default ShopLeftSidebar;
