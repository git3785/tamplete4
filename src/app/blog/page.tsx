import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSection from "../components/logos";
import { FaCalendarAlt } from 'react-icons/fa';

export default function Blog() {
  return (
    <div className="bg-[rgba(246, 245, 255, 1)] text-gray-800">
      {/* Header */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold">Blog Page</h1>
          <p className="text-sm text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="text-pink-600 font-bold hover:underline">
              Blog Page
            </Link>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-8 space-y-8">
            {[
              {
                image: "/blog/b1.jpg",
                title: "Mauris at orci non vulputate diam tincidunt nec.",
                author: "Surf Author",
                authorIcon: "/blog/b15.png",
                date: "Aug 29 2020",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
                url: "/firstblog",
              },
              {
                image: "/blog/b2.jpg",
                title: "Aenean lacinia bibendum nulla sed consectetur.",
                author: "Jane Doe",
                authorIcon: "/blog/b15.png",
                date: "Sep 12 2020",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
                url: "/firstblog",
              },
              {
                image: "/blog/b3.jpg",
                title: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
                author: "John Smith",
                authorIcon: "/blog/b15.png",
                date: "Oct 5 2020",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
                url: "/firstblog",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Link href={post.url}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full cursor-pointer"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-lg">
                    {/* Author Section */}
                    <div className="flex items-center bg-pink-200 space-x-2">
                      {/* Author Icon */}
                      <Image
                        src={post.authorIcon}
                        alt={post.author}
                        width={32} // 32px for width
                        height={32} // 32px for height
                        className="rounded-full border-2 border-pink-400"
                      />
                      <span>{post.author}</span>
                    </div>

                    {/* Date Section with Calendar Icon */}
                    <div className="flex items-center space-x-2  text-pink-500">
                      <FaCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-blue-900 mt-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mt-4">{post.description}</p>

                  {/* Read More Link */}
                  <Link href={post.url} className="text-blue-900 hover:underline font-semibold text-lg mt-4 inline-block">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center space-x-2 mt-8">
              {/* Page Numbers */}
              <div className="flex space-x-2">
                <div className="px-4 py-2 text-sm font-medium border rounded-lg bg-pink-600 text-white ">
                  1
                </div>
                <div className="px-4 py-2 text-sm font-medium border rounded-lg text-gray-600  hover:bg-pink-600 hover:text-white">
                  2
                </div>
                <div className="px-4 py-2 text-sm font-medium border rounded-lg text-gray-600  hover:bg-pink-600 hover:text-white">
                  3
                </div>
                <div className="px-4 py-2 text-sm font-medium border rounded-lg text-gray-600  hover:bg-pink-600 hover:text-white">
                  4
                </div>
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Search</h3>
              <input
                type="text"
                placeholder="Search for Posts"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex space-x-4 text-blue-900">
                  <span className="bg-pink-500 text-white rounded-sm">Hobbies (14)</span>
                  <span>Women (21)</span>
                </li>
                <li className="flex space-x-4 text-blue-900">
                  <span>Women (21)</span>
                  <span>Women (21)</span>
                </li>
                <li className="flex space-x-4 text-blue-900">
                  <span>Women (21)</span>
                  <span>Women (21)</span>
                </li>
              </ul>
            </div>



            {/* Recent Posts */}
            <div className="bg-white  rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Recent Posts</h3>
              <div className="mt-4">
                {[
                  {
                    image: "/blog/b4.jpg",
                    title: "It is a long established fact",
                    date: "Aug 09 2020",
                    url: "/recent/post-1",
                  },
                  {
                    image: "/blog/b5.jpg",
                    title: "It is a long established fact",
                    date: "Aug 09 2020",
                    url: "/recent/post-2",
                  },
                  {
                    image: "/blog/b6.jpg",
                    title: "It is a long established fact",
                    date: "Aug 09 2020",
                    url: "/recent/post-1",
                  },
                  {
                    image: "/blog/b7.jpg",
                    title: "It is a long established fact",
                    date: "Aug 09 2020",
                    url: "/recent/post-2",
                  },
                ].map((recent, index) => (
                  <Link href={recent.url} key={index}>
                    <div className="flex space-x-4 mb-4 cursor-pointer">
                      <div className="relative" style={{ width: "70px", height: "51px" }}>
                        <Image
                          src={recent.image}
                          alt={recent.title}
                          layout="fill" // Fills the parent div
                          objectFit="cover" // Ensures the image covers the container and maintains aspect ratio
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-blue-900">{recent.title}</p>
                        <span className="text-sm text-gray-600">{recent.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sale Products */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Sale Product</h3>
              {[
                { name: "Product 1", price: "$15.00", url: "/blog/b8.jpg" },
                { name: "Product 2", price: "$25.00", url: "/blog/b9.jpg" },
                { name: "Product 3", price: "$35.00", url: "/blog/b10.jpg" },
              ].map((product, index) => (
                <Link href="#" key={index} legacyBehavior>
                  <a className="block mt-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative" style={{ width: "70px", height: "57px" }}>
                        <Image
                          src={product.url}
                          alt={product.name}
                          layout="fill" // Fills the parent div
                          objectFit="cover" // Ensures the image covers the container and maintains aspect ratio
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-blue-900">{product.name}</p>
                        <span className="text-sm ">{product.price}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            {/* Offer Products */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Offer Products</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  {
                    image: "/blog/b11.jpg",
                    title: "Duis lectus est.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    image: "/blog/b12.jpg",
                    title: "Sed placerat.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    image: "/blog/b13.jpg",
                    title: "Duis lectus est.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    image: "/blog/b14.jpg",
                    title: "",
                    price: "$12.00 - $15.00",
                  },
                ].map((product, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative mb-2" style={{ width: "100%", height: "150px" }}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">{product.title}</p>
                      <span className="text-lg text-gray-800">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Section */}
            <div className="bg-white  rounded-lg p-6">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">Follow</h3>

              {/* Social Media Icons */}
              <div className="flex rounded-full space-x-6 mt-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-3xl"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.475V14.708h-3.125v-3.708h3.125V8.345c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.311h3.591l-.467 3.707h-3.124V24h6.116c.729 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 text-3xl"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.748 0 8.332.015 7.052.074 5.773.132 4.582.366 3.515 1.434 2.448 2.501 2.214 3.692 2.156 4.971 2.097 6.25 2.082 6.666 2.082 12s.015 5.75.074 7.029c.058 1.279.292 2.47 1.359 3.537 1.067 1.067 2.258 1.301 3.537 1.359 1.279.058 1.696.074 7.029.074s5.75-.015 7.029-.074c1.279-.058 2.47-.292 3.537-1.359 1.067-1.067 1.301-2.258 1.359-3.537.058-1.279.074-1.696.074-7.029s-.015-5.75-.074-7.029c-.058-1.279-.292-2.47-1.359-3.537-1.067-1.067-2.258-1.301-3.537-1.359C16.75.015 16.332 0 12 0z"
                    />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-3xl"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      d="M23.954 4.569c-.885.392-1.833.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.426.729-.666 1.574-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.381 4.6 3.421-1.68 1.318-3.808 2.104-6.102 2.104-.395 0-.786-.023-1.17-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.142 0 14.307-7.721 14.307-14.432 0-.22-.005-.439-.015-.657.985-.711 1.839-1.6 2.515-2.611z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* tag  */}
            <div className="bg-white  rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-900">Tags</h3>
              <div className="text-blue-900 flex flex-wrap mt-4 gap-2 group">
                {[
                  { name: "General", url: "/tags/general" },
                  { name: "Atsanil", url: "/tags/atsanil" },
                  { name: "Insas", url: "/tags/insas" },
                  { name: "Bibsaas", url: "/tags/bibsaas" },
                  { name: "Nulla", url: "/tags/nulla" },
                ].map((tag, index) => (
                  <Link href={tag.url} key={index} legacyBehavior>
                    <a
                      className={`text-xs px-2 py-1 rounded-md ${tag.name === "Atsanil" ? "text-red-500" : "text-blue-800"
                        } group-hover:text-red-500 hover:bg-gray-300`}
                    >
                      {tag.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSection />
    </div>

  );
}
