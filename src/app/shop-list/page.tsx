import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';
import LogoSection from '../components/logos';

const products = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    price: "$26.00",
    oldPrice: "$52.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl1.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "In nulla",
    price: "$600.00",
    oldPrice: "$750.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Vel sem",
    price: "$26.00",
    oldPrice: "$52.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl3.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Porttitor cum",
    price: "$600.00",
    oldPrice: "$750.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl4.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Nunc in",
    price: "$26.00",
    oldPrice: "$52.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl5.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Vitae facilisis",
    price: "$600.00",
    oldPrice: "$750.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl6.jpg",
    rating: 4,
  },
  {
    id: 7,
    name: "Curabitur lectus",
    price: "$26.00",
    oldPrice: "$52.00",
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est",
    line2: "Adipiscing in phasellus non in justo.",
    image: "/shoplist/sl7.jpg",
    rating: 4,
  },
];

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl text-blue-900 font-bold">Shop List</h1>
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
              Shop List
            </Link>
          </p>
        </div>
      </header>

      {/* Sorting and Filter Section */}
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

      {/* Product List */}
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row bg-white overflow-hidden">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-[313.63px]">
              <Image
  src={product.image}
  alt={product.name}
  width={313.63} // Image width for larger screens
  height={217.56} // Image height for larger screens
  className="w-full h-[217.56px] md:w-[313.63px] object-cover md:h-[217.56px] rounded-md"
/>
              </div>

              {/* Text Section */}
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold text-blue-900">{product.name}</h2>
                <div className="flex items-center mt-2 space-x-4">
                  <p className="text-lg font-bold text-pink-600">{product.price}</p>
                  <p className="text-gray-500 line-through">{product.oldPrice}</p>
                  <div className="text-yellow-500">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                </div>
                {/* Product Description */}
                <p className="text-gray-600 mt-4">
                  {product.line1}
                  <br />
                  {product.line2}
                </p>
                {/* Action Icons */}
                <div className="flex items-center space-x-6 mt-6">
                  <FaCartPlus size={20} className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                  <FaHeart size={20} className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                  <FaSearch size={20} className="text-gray-500 hover:text-gray-800 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LogoSection />
    </div>
  );
};
export default ProductList;