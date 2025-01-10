import Image from "next/image"; // Importing Next.js Image component
import Link from "next/link";

const DiscountItemPage = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-blue-950 text-4xl font-bold mb-6">Discount Item</h2>

      {/* Category Navigation */}
      <div className="flex justify-center space-x-4 md:space-x-6 mb-6">
        <Link href="/new-arrival" className="text-red-500 hover:underline text-sm md:text-base">
          Wood Chair
        </Link>
        <Link href="/best-seller" className="text-blue-500 hover:underline text-sm md:text-base">
          Plastic Chair
        </Link>
        <Link href="/featured" className="text-blue-500 hover:underline text-sm md:text-base">
          Sofa Collection
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        {/* Flex container for text and image */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Left Side Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              20% Discount On All Products
            </h1>
            <h2 className="text-sm sm:text-base text-pink-700 font-semibold mb-4">Eams Sofa Compact</h2>
            <p className="text-gray-400 mb-6 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br className="hidden md:block" />
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-400 mb-6">
              <p>✓ Material exposed like metals.</p>
              <p>✓ Clear lines and geometric figures.</p>
              <p>✓ Simple neutral colours.</p>
              <p>✓ Material exposed like metals.</p>
            </div>
            <button className="bg-pink-600 text-white px-4 sm:px-6 py-2 rounded-sm hover:bg-pink-400 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/discount/p1.png" // Replace with the path to your image
              alt="Discounted Item"
              width={500}
              height={500}
              className="w-64 sm:w-72 md:w-96 lg:w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItemPage;
