import Image from "next/image";

const TopCategories = () => {
  const products = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/top/t1.png",
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/top/t2.png",
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/top/t3.png",
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/top/t1.png",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 bg-">
      <h2 className="text-center text-5xl md:text-3xl font-bold text-blue-950 mb-8">
        Top Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            {/* Circular Image Container */}
            <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow-lg relative">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />
              
            </div>
            {/* Product Name and Price */}
            <h3 className="text-md md:text-lg font-semibold text-gray-800 mt-4">
              {product.name}
            </h3>
            <p className="text-sm md:text-md text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
