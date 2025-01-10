import React from "react";
import Image from "next/image";
import LogoSection from "./logos";

// Define the type for the product prop
interface Product {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  rating: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mx-auto"
      style={{ maxWidth: "921px", height: "auto" }}
    >
      {/* Product Image */}
      <div className="w-full h-[200px] sm:w-[284px] sm:h-[197px] mb-4 sm:mb-0">
        <Image
          src={product.image}
          alt={product.title}
          width={284} // Actual image width
          height={197} // Actual image height
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-grow sm:space-y-2">
        <h3 className="font-bold text-lg sm:text-xl">{product.title}</h3>
        <p className="text-blue-900 text-sm sm:text-base">
          ${product.price}{" "}
          <span className="line-through text-pink-600">${product.originalPrice}</span>
        </p>
        <p className="text-sm sm:text-base text-gray-600">{product.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex space-x-1">{renderStars(product.rating)}</div>

          {/* Action Buttons */}
          <div className="flex space-x-2 mt-2 sm:mt-0 text-gray-600">
            <button className="hover:text-red-500 text-xl sm:text-lg">
              ❤️
            </button>
            <button className="hover:text-green-500 text-xl sm:text-lg">
              🛒
            </button>
            <button className="hover:text-blue-500 text-xl sm:text-lg">
              👁️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products: Product[] = [
    {
      image: "/shop-left-sidebar/slsb1.jpg",
      title: "Dictum Morbi",
      price: 150,
      originalPrice: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 5,
    },
    {
      image: "/shop-left-sidebar/slsb2.jpg",
      title: "Nibh Varius",
      price: 26,
      originalPrice: 52,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
    },
    {
      image: "/shop-left-sidebar/slsb3.jpg",
      title: "Mauris Quis",
      price: 300,
      originalPrice: 400,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
    },
    {
      image: "/shop-left-sidebar/slsb4.jpg",
      title: "Morbi Sagittis",
      price: 75,
      originalPrice: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 3,
    },
    {
      image: "/shop-left-sidebar/slsb5.jpg",
      title: "Ultricies Venenatis",
      price: 65,
      originalPrice: 90,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 5,
    },
    {
      image: "/shop-left-sidebar/slsb6.jpg",
      title: "Scelerisque Dignissim",
      price: 80,
      originalPrice: 120,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 4,
    },
    {
      image: "/shop-left-sidebar/slsb7.jpg",
      title: "Sodales Sit",
      price: 50,
      originalPrice: 70,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      rating: 5,
    },
  ];

  return (
    <div className="p-4 mt-36 flex flex-col gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <LogoSection />
    </div>
  );
};

export default ProductList;
