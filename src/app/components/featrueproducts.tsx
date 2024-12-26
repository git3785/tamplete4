import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featureproduct/fp1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featureproduct/fp2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featureproduct/fp3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featureproduct/fp4.png",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-blue-950">
        Featured Products
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden relative transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative w-full pb-[100%]"> {/* Adjust to maintain aspect ratio */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-contain" // Use 'object-contain' to prevent cropping
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-25">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-pink-700">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">Code: {product.code}</p>
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
