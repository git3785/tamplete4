"use client";
import React, { useState } from "react";
import Image from "next/image"; // Importing Image from next/image

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "/hero/hero1.png",
      title: "New Furniture Collection Trends in 2020",
      subtitle: "Best Furniture For Your Castle...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      buttonText: "Shop Now",
      url: "/shop-list", 
    },
    {
      id: 2,
      image: "/latestproduct/lp1.png",
      title: "Discover Modern Lighting",
      subtitle: "Illuminate Your Space",
      description:
        "Explore a variety of stylish lighting solutions for every room in your home.",
      buttonText: "Explore Now",
      url: "/gird", 
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-purple-50">
      <div className="flex items-center justify-center py-24 px-6">
        <div className="flex items-center w-full max-w-screen-xl">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-8 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8592;
          </button>

          {/* Slide Content */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 w-full ${
                currentSlide === index ? "block" : "hidden"
              }`}
            >
              {/* Text Content */}
              <div className="text-center md:text-left px-4 order-1 md:order-1">
                <p className="text-pink-500 text-lg md:text-xl uppercase font-semibold">
                  {slide.subtitle}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg md:text-xl my-6">
                  {slide.description}
                </p>
                <a href={slide.url}>
                  <button className="bg-pink-500 text-white px-8 py-3 rounded-md shadow-lg hover:bg-pink-600 transition duration-300">
                    {slide.buttonText}
                  </button>
                </a>
              </div>

              {/* Image Content */}
              <div className="flex justify-center order-2 md:order-2">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg w-full md:max-w-xl lg:max-w-2xl object-cover"
                  width={500} // Add width for optimization
                  height={500} // Add height for optimization
                />
              </div>
            </div>
          ))}

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-8 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="flex justify-center gap-4 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
