import Image from "next/image";

const TrendingSection = () => {
  return (
    <section className="py-10 px-4 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
      </div>

      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          {[ 
            "/trendingsection/ts1.png",
            "/trendingsection/ts2.png",
            "/trendingsection/ts3.png",
            "/trendingsection/ts4.png"
          ].map((imageSrc, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md text-center"
            >
              <div
                className="relative mx-auto"
                style={{
                  width: '247px',
                  height: '244px',
                  padding: '15px 0px 18px 0px',
                  opacity: '1'
                }}
              >
                <Image
                  src={imageSrc}
                  alt={`Cantilever Chair ${index + 1}`}
                  layout="intrinsic"
                  width={247}
                  height={244}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-gray-700 font-semibold">Cantilever chair {index + 1}</h3>
              <p className="text-blue-900 font-bold">$26.00</p>
              <p className="text-gray-400 line-through">$40.00</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto">
  {/* First Promo Section */}
  <div
    className="flex items-center justify-center bg-pink-50 p-6 rounded-lg"
    style={{
      width: '420px',
      height: '270px',
      opacity: '1',
    }}
  >
    <div className="space-y-3 -mt-2 text-center">
      <h3 className="text-lg font-bold text-blue-900 whitespace-nowrap">
        23% off in all products
      </h3>
      <a
        href="#"
        className="text-pink-600 font-semibold hover:underline block break-words"
      >
        Shop Now
      </a>
    </div>
    <Image
      src="/trendingsection/ts6.png"
      alt="Promo Product"
      width={213}
      height={207}
      className="ml-auto object-contain"
    />
  </div>

  {/* Second Promo Section */}
  <div
    className="flex items-center justify-center bg-blue-50 p-6 rounded-lg"
    style={{
      width: '420px',
      height: '270px',
      opacity: '1',
      overflow: 'hidden',
    }}
  >
    <div className="space-y-3 text-center">
      <h3 className="text-lg font-bold top-0 text-blue-900 whitespace-nowrap">
        23% off in all products
      </h3>
      <a
        href="#"
        className="text-pink-600 font-semibold hover:underline block break-words"
        style={{
          maxWidth: '269px',
        }}
      >
        View Collection
      </a>
    </div>

    <div>
      <Image
        src="/trendingsection/ts5.png"
        alt="Promo Collection"
        width={380}
        height={173}
        className="object-contain"
      />
    </div>
  </div>

  {/* Executive Chairs List */}
  <div className="bg-white p-4 rounded-lg w-full sm:w-auto">
    <ul className="space-y-4">
      {[ 
        { imgSrc: "/trendingsection/ts7.png", price: "$32.00", url: "/product/chair-1" },
        { imgSrc: "/trendingsection/ts8.png", price: "$35.00", url: "/product/chair-2" },
        { imgSrc: "/trendingsection/ts9.png", price: "$40.00", url: "/product/chair-3" },
      ].map(({ imgSrc, price, url }, index) => (
        <li key={index} className="flex items-center space-x-4 justify-center">
          <Image
            src={imgSrc}
            alt="Executive Chair"
            width={50}
            height={50}
            className="rounded-md object-contain"
          />
          <div>
            <p className="text-blue-950 font-semibold">Executive Seat Chair</p>
            <p className="text-blue-950 font-semibold">{price}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
    </section>
  );
};

export default TrendingSection;
