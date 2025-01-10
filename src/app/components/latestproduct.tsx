import Link from "next/link";
import Image from "next/image";

const LatestProducts = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp1.png",
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp2.png",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp3.png",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp4.png",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp5.png",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestproduct/lp6.png",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-center text-blue-950 text-4xl font-bold mb-6">
        Latest Products
      </h2>

      {/* Category Navigation */}
      <div className="flex justify-center space-x-8 mb-10">
        <Link href="/new-arrival" className="text-red-500 hover:underline">
          New Arrival
        </Link>
        <Link href="/best-seller" className="text-blue-500 hover:underline">
          Best Seller
        </Link>
        <Link href="/featured" className="text-blue-500 hover:underline">
          Featured
        </Link>
        <Link href="/special-offer" className="text-blue-500 hover:underline">
          Special Offer
        </Link>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-24 justify-center"
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
            style={{
              width: "370px",
            }}
          >
            <div
              className="relative w-full"
              style={{
                height: "250px", // Matches your maxHeight
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex justify-between items-center space-x-4">
              <h3 className="text-base font-semibold">{product.name}</h3>
              <div className="flex space-x-2 items-center">
                <p className="text-blue-500">{product.price}</p>
                <p className="text-red-500 line-through">{product.originalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
