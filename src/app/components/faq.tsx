import React from "react";
import Image from "next/image";
import Link from "next/link";
const FAQPage = () => {
  return (
    <div className="bg-[rgba(246, 245, 255, 1);
] text-gray-800">
<header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl mt-10 md:text-3xl font-bold">FAQ</h1>
        <p className="text-sm text-gray-500">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/pages" className="text-black hover:underline">
            Pages
          </Link>{" "}
          /{" "}
          <Link href="/myaccount" className="text-pink-600 font-bold hover:underline">
            FAQ
          </Link>
        </p>
      </div>
    </header>
 

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">General Information</h2>
            <ul className="space-y-6">
              {[
                "Eu dictumst cum at sed euismod condimentum?",
                "Magna bibendum at fermentum eros.",
                "Odio muskana hak ers consectetur scelerisque?",
                "Elit id blandit sabara boi velit qua nam.",
              ].map((question, index) => (
                <li key={index}>
                  <h3 className="font-semibold">{question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
                    tristique mollis vitae, consequat gravida sagittis.
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Ask a Question Form */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Ask a Question</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Type Your Message"
                aria-label="Type Your Message"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600"
              >
                Send Mail
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
