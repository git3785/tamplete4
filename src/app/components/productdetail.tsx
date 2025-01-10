import React from "react";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="p-6 md:flex md:space-x-8 bg-gray-50 min-h-screen">
      {/* Sidebar with Images */}
      <div className="flex-shrink-0 w-full md:w-1/4 grid grid-cols-2 md:grid-cols-1 gap-4">
        {/* Three smaller images */}
        <Image
          src="https://via.placeholder.com/150"
          alt="Thumbnail 1"
          width={150}
          height={150}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        <Image
          src="https://via.placeholder.com/150"
          alt="Thumbnail 2"
          width={150}
          height={150}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        <Image
          src="https://via.placeholder.com/150"
          alt="Thumbnail 3"
          width={150}
          height={150}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        {/* Larger image spanning 3 rows */}
        <Image
          src="https://via.placeholder.com/150"
          alt="Large Thumbnail"
          width={150}
          height={450} // Adjusted height to match the calculated CSS height
          className="w-full h-[calc(3*10rem+2*16px)] object-cover rounded-lg shadow-md row-span-3"
        />
      </div>

      {/* Main Product Details Section */}
      <div className="flex-grow bg-white rounded-lg shadow-md p-6">
        <Image
          src="https://via.placeholder.com/600"
          alt="Main Product"
          width={600}
          height={256} // Adjusted for a height of 64px in the design
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Playwood Arm Chair</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1 text-yellow-400">
            {/* Stars */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <p className="text-gray-600 text-sm">(22 reviews)</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl font-bold text-green-600">$32.00</span>
          <span className="text-lg line-through text-gray-500">$42.00</span>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          porttitor purus, et volutpat sit.
        </p>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Color</h3>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-black border"></div>
            <div className="w-6 h-6 rounded-full bg-white border"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border"></div>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
        <div className="mt-6">
          <p>
            <strong>Categories:</strong> Furniture, Chairs
          </p>
          <p>
            <strong>Tags:</strong> Modern, Stylish
          </p>
          <div className="flex space-x-4 mt-4">
            <p className="font-bold">Share:</p>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-600 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
