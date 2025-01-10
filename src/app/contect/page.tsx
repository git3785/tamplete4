import Link from "next/link";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold  text-blue-950">Contact Us</h1>
          <p className="text-sm mt-3 text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link
              href="/myaccount"
              className="text-pink-600 font-bold hover:underline"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </header>

      {/* Main Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 items-center justify-center gap-10">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-950">Information About Us</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque <br />
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique <br />
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis.
          </p>
          <div className="flex justify-center md:justify-start space-x-2">
            <span className="h-4 w-4 bg-blue-800 rounded-full"></span>
            <span className="h-4 w-4 bg-pink-400 rounded-full"></span>
            <span className="h-4 w-4 bg-blue-400 rounded-full"></span>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-950">Contact Way</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Options */}
            {[
              { color: "bg-blue-800", text1: "Tel: 877-67-88-99", text2: "E-Mail: shop@store.com" },
              { color: "bg-pink-600", text1: "Support Forum", text2: "For over 24hr" },
              { color: "bg-yellow-600", text1: "20 Margaret st, London", text2: "Great Britain, 3NM98-LK" },
              { color: "bg-green-500", text1: "Free standard shipping", text2: "on all orders." },
            ].map(({ color, text1, text2 }, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <span className={`h-10 w-10 ${color} rounded-full`}></span>
                <div>
                  <p className="text-sm font-medium text-gray-500">{text1}</p>
                  <p className="text-sm text-gray-500">{text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Get In Touch</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />
            tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>
          {/* Form */}
          <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
  {/* Left Section - Form */}
  <div>
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full md:w-80 h-[45px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Your E-mail*"
          className="w-full md:w-80 h-[45px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </div>
    <input
      type="text"
      placeholder="Subject*"
      className="w-full md:w-[534px] h-[45px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <textarea
      placeholder="Type Your Message*"
      rows={4}
      className="w-full md:w-[534px] h-[166px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <div className="flex justify-start">
      <button
        type="submit"
        className="w-full md:w-[157px] h-[44px] bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
      >
        Send Mail
      </button>
    </div>
  </form>
</div>
</section>
</div>
  {/* Right Section - Image */}
  <div className="flex justify-center">
  <Image
    src="/contect/contact.png"
    alt="Contact Illustration"
    width={693}
    height={462}
    className="object-contain w-full sm:w-[400px] md:w-[600px] lg:w-[693px] h-auto"
  />
</div>


</section>
</div>
  );
};

export default Contact;
