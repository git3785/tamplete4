import Image from "next/image";

const TrendingProduct = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-16 bg-violet-100">
      {/* Image Container */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:pr-8">
        {/* Pink Background */}
        <div className="absolute bg-pink-100 rounded-full -z-10 w-[481px] h-[450px] left-[50%] transform -translate-x-1/2 md:left-[200px] md:top-[50px]"></div>
        {/* Sofa Image */}
        <Image
          src="/new/mew1.png"
          alt="B&B Italian Sofa"
          width={509}
          height={550}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Unique Features Of Latest &<br /> Trending Products
        </h2>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span>All frames constructed with hardwood solids and laminates</span>
          </li>
          <li className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </span>
          </li>
          <li className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-3 h-3 rounded-full bg-teal-500"></span>
            <span>Arms, backs and seats are structurally reinforced</span>
          </li>
        </ul>
        {/* Button and Price */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-sm font-semibold hover:bg-pink-600 transition">
            Add To Cart
          </button>
          <div className="text-sm">
            <h3 className="text-blue-900 font-semibold">B&B Italian Sofa</h3>
            <p className="text-gray-700">$32.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
