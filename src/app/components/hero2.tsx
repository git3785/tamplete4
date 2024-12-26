import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="relative h-[462px] w-full">
      {/* Background Image */}
      <Image
        src="/hero2/h2.jpg" // Replace with your image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-100"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        {/* AI Heading */}
        <h2 className="text-4xl md:text-3xl text-blue-800 font-semibold">Get Leatest Update By Subscribe <br />
        0ur Newslater
        </h2>

        {/* Button */}
        <button className="mt-6 py-2 px-6 bg-pink-600 text-white text-lg rounded-sm hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero2;
