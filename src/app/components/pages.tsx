// src/app/pages/shop-grid-default.tsx
import React from "react";

const ShopGridDefault = () => {
  return (
    <div className="container mx-auto py-12">
      {/* First Heading */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Shop Grid Default
      </h1>

      {/* Second Section Heading */}
      <h2 className="text-center text-2xl font-semibold text-gray-600 mb-8">
        Featured Products
      </h2>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product Item 1 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src="/path/to/your/image1.jpg" // Replace with actual image path
            alt="Product 1"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-700">Product 1</h3>
          <p className="text-gray-500">$29.99</p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

        {/* Product Item 2 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src="/path/to/your/image2.jpg" // Replace with actual image path
            alt="Product 2"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-700">Product 2</h3>
          <p className="text-gray-500">$49.99</p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

        {/* Product Item 3 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src="/path/to/your/image3.jpg" // Replace with actual image path
            alt="Product 3"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-700">Product 3</h3>
          <p className="text-gray-500">$39.99</p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

        {/* Product Item 4 */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src="/path/to/your/image4.jpg" // Replace with actual image path
            alt="Product 4"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-700">Product 4</h3>
          <p className="text-gray-500">$59.99</p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopGridDefault;
