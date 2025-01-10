
import Link from "next/link";
import Image from "next/image";
import LogoSection from "../components/logos";

const products = [
  { id: 1, name: "Vel elit euismod", price: "$50.00", oldPrice: "$60.00", imgSrc: "/gird/g1.png" },
  { id: 2, name: "Ultrices condimentum imperdiet", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g2.png" },
  { id: 3, name: "Vitae suspendisse sed", price: "$60.00", oldPrice: "$70.00", imgSrc: "/gird/g3.png" },
  { id: 4, name: "Sed et fermentum", price: "$90.00", oldPrice: "$120.00", imgSrc: "/gird/g4.png" },
  { id: 5, name: "Fusce pellentesque at", price: "$55.00", oldPrice: "$65.00", imgSrc: "/gird/g5.png" },
  { id: 6, name: "Vestibulum magna laoreet", price: "$85.00", oldPrice: "$110.00", imgSrc: "/gird/g6.png" },
  { id: 7, name: "Sollicitudin amet orci", price: "$50.00", oldPrice: "$60.00", imgSrc: "/gird/g7.png" },
  { id: 8, name: "Ultrices mauris sit", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g8.png" },
  { id: 9, name: "Pellentesque condimentum ac", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g9.png" },
  { id: 10, name: "Cras scelerisque velit", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g10.png" },
  { id: 11, name: "Lectus vulputate faucibus", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g11.png" },
  { id: 12, name: "Purus risus, ut", price: "$80.00", oldPrice: "$100.00", imgSrc: "/gird/g4.png" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl text-blue-950 font-bold">Shop Grid Default</h1>
          <p className="text-sm mt-3 text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link href="/myaccount" className="text-pink-600 font-bold hover:underline">
              Shop Grid Default
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

      {/* Product Section */}
      <div className="px-4 md:px-16 lg:px-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-xs  rounded-lg p-4 bg-gray-50 hover:scale-105 transition transform duration-300 flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="w-full h-48 flex justify-center items-center relative">
  <Image
    src={product.imgSrc}
    alt={product.name}
    width={154}
    height={158}
    className="object-cover rounded-lg"
  />
</div>
              {/* Product Details */}
              <h3 className="text-lg font-medium text-gray-800 text-center mt-4">{product.name}</h3>
              <div className="text-center text-gray-500 mt-2">
                <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mx-1"></span>
                <span className="inline-block w-2 h-2 bg-pink-600 rounded-full mx-1"></span>
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mx-1"></span>
              </div>
              <div className="mt-2 flex justify-center items-center space-x-2 text-center">
                <p className="text-purple-600 font-bold">{product.price}</p>
                <p className="text-pink-600 line-through">{product.oldPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LogoSection/>
    </div>
  );
};

export default HomePage;
