import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import LogoSection from "../components/logos";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="bg-[rgba(246, 245, 255, 1)] text-gray-800">
      {/* Header */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 mb-3 md:text-3xl font-bold">Single Blog</h1>
          <p className="text-sm text-[rgba(150,156,180,1)]">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="text-pink-600 font-bold hover:underline">
              Single Blog
            </Link>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-8 space-y-8">
            {[{
              image: "/blog/b1.jpg",
              title: "Mauris at orci non vulputate diam tincidunt nec.",
              author: "Surf Author",
              authorIcon: "/blog/b15.png",
              date: "Aug 29 2020",
              description: (
                <>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <br /><br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
                  </p>
                  <br /><br /><br />
                  <p className="text-lg text-[rgba(150,156,180,1)] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at volutpat nisi, non scelerisque lorem. Sed vel lacus eu ante sollicitudin feugiat. Cras volutpat, odio nec malesuada lobortis, leo odio tincidunt magna, vitae facilisis lorem metus vitae libero.
                  </p>
                </>
              ),
            }].map((post, index) => (
              <div key={index} className=" rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full cursor-pointer"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-lg">
                    <div className="flex items-center bg-pink-200 space-x-2">
                      {/* Author Icon */}
                      <Image
                        src={post.authorIcon}
                        alt={post.author}
                        width={32}  // Equivalent to w-8 in Tailwind
                        height={32} // Equivalent to h-8 in Tailwind
                        className="rounded-full border-2 border-pink-400"
                      />
                      <span>{post.author}</span>
                    </div>



                    {/* Date Section with Calendar Icon */}
                    <div className="flex items-center space-x-2 text-pink-500">
                      <FaCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-blue-900 mt-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <div className="text-gray-400 mt-4">{post.description}</div>
                  {/* 4 images */}
                  <div className="flex flex-wrap mt-8">
                    {[
                      {
                        image: "/firstblog/fb3.jpg",
                        alt: "Quam Sed",
                        title: "Quam Sed",
                        price: "$56.00",
                        oldPrice: "$32.00",
                        rating: 5,
                      },
                      {
                        image: "/firstblog/fb4.jpg",
                        alt: "Dictum Magna",
                        title: "Dictum Magna",
                        price: "$45.00",
                        oldPrice: "$25.00",
                        rating: 4,
                      },
                      {
                        image: "/firstblog/fb5.jpg",
                        alt: "Amet Mattis",
                        title: "Amet Mattis",
                        price: "$70.00",
                        oldPrice: "$40.00",
                        rating: 4,
                      },
                      {
                        image: "/firstblog/fb6.jpg",
                        alt: "Egestas Urna",
                        title: "Egestas Urna",
                        price: "$80.00",
                        oldPrice: "$50.00",
                        rating: 5,
                      },
                    ].map((product, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                      >
                        <div className="bg-white rounded-lg shadow-lg p-4">
                          <div className="relative w-full h-[254.7px]">
                            <Image
                              src={product.image}
                              alt={product.alt}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                          <h3 className="text-lg font-semibold mt-4 text-gray-800">
                            {product.title}
                          </h3>
                          <div className="flex items-center mt-2 space-x-4">
                            <span className="text-lg text-gray-800 font-bold">
                              {product.price}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              {product.oldPrice}
                            </span>
                          </div>
                          <div className="flex items-center mt-2 space-x-1">
                            {[...Array(product.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>{/* Add the paragraph below the product listings */}
                  <div className="mt-8">
                    <p className="text-lg text-[rgba(150,156,180,1)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    </p><br /><br /><br />
                    <p className="text-lg text-[rgba(150,156,180,1)] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                    </p>

                  </div>
                  <div className="flex space-x-6 justify-center mt-8">
                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com" // Replace with your Facebook page URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <FaFacebook size={30} />
                    </a>

                    {/* Instagram Icon */}
                    <a
                      href="https://www.instagram.com" // Replace with your Instagram page URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                    >
                      <FaInstagram size={30} />
                    </a>

                    {/* Twitter Icon */}
                    <a
                      href="https://www.twitter.com" // Replace with your Twitter page URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaTwitter size={30} />
                    </a>
                  </div>
                  <div className="flex justify-between items-center mt-12 px-4 sm:px-8 md:px-16">
                    {/* Previous Post Button */}
                    <Link
                      href="/blog" // Replace with your actual previous post URL
                      className="inline-flex items-center text-lg text-blue-900 hover:text-blue-950 border hover:border-pink-600 py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      <span className="mr-2">←</span> Previous Post
                    </Link>

                    {/* Next Post Button */}
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-lg text-blue-900 hover:text-blue-950 border hover:border-pink-600 py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      Next Post <span className="ml-2">→</span>
                    </Link>

                    {/* 2 blog box */}
                  </div>
                  <div className="w-full max-w-lg ml-10 mt-32 p-4 flex flex-col md:flex-row items-center border shadow-gray-200">
                    <div className="p-4">
                      <Image
                        src="/firstblog/fb7.jpg"
                        alt="Image description"
                        width={103} // Set the pixel width
                        height={107} // Set the pixel height
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full md:w-auto p-4">
                      <h1 className="text-xl text-blue-900 font-semibold mb-4">Sapien ac</h1>
                      <p className="text-xs text-[rgba(150,156,180,1)] leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>

                  <div className="w-full max-w-lg ml-10 mt-5 p-4 flex flex-col md:flex-row items-center border shadow-gray-200">
                    <div className="p-4">
                      <Image
                        src="/firstblog/fb8.jpg"
                        alt="Image description"
                        width={103}
                        height={107}
                        className="object-cover"
                      />
                    </div>

                    <div className="w-full md:w-auto p-4">
                      <h1 className="text-xl text-blue-900 font-semibold mb-4">Augue conva</h1>
                      <p className="text-xs text-[rgba(150,156,180,1)] leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                  {/* continue shipping */}
                  <div className="p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <form className="space-y-4">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                          <div className="w-full md:w-[341px]">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Your Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              className="mt-1 block w-full h-[42.71px] p-2 border border-gray-300 rounded-md"
                              placeholder="Enter your name"
                            />
                          </div>

                          <div className="w-full md:w-[341px]">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Your Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="mt-1 block w-full h-[42.71px] p-2 border border-gray-300 rounded-md"
                              placeholder="Write your email"
                            />
                          </div>
                        </div>

                        {/* Comment Field */}
                        <div>
                          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            Your Comment
                          </label>
                          <textarea
                            id="comment"
                            rows={4}
                            className="mt-1 block w-full md:w-[717px] h-[205px] p-2 border border-gray-300 rounded-md"
                            placeholder="Write your comment*"
                          />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center space-x-2">
                          <input
                            id="save-details"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="save-details" className="text-xs text-gray-600">
                            Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="py-3 w-full md:w-[697.89px] h-[49.45px] bg-pink-600 text-white rounded-md hover:bg-pink-500"
                        >
                          <a href="#continue-shipping" className="text-white">
                            Continue Shipping
                          </a>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">Search</h3>
              <input
                type="text"
                placeholder="Search for Posts"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2 text-sm sm:text-base"
              />
            </div>



            {/* Categories */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-blue-900">
                  <span className="bg-pink-500 text-white rounded-sm px-2 py-1 text-sm sm:text-base">
                    Hobbies (14)
                  </span>
                  <span className="text-sm sm:text-base">Women (21)</span>
                </li>
                <li className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-blue-900">
                  <span className="text-sm sm:text-base">Women (21)</span>
                  <span className="text-sm sm:text-base">Women (21)</span>
                </li>
                <li className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-blue-900">
                  <span className="text-sm sm:text-base">Women (21)</span>
                  <span className="text-sm sm:text-base">Women (21)</span>
                </li>
              </ul>
            </div>




            {/* Recent Posts */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">Recent Posts</h3>
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
                    <div className="flex flex-wrap md:flex-nowrap space-x-4 mb-4 cursor-pointer">
                      <div
                        className="relative w-[70px] h-[51px] flex-shrink-0"
                      >
                        <Image
                          src={recent.image}
                          alt={recent.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-blue-900">{recent.title}</p>
                        <span className="text-xs sm:text-sm text-[rgba(150,156,180,1)]">
                          {recent.date}
                        </span>
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
                        <span className="text-sm text-[rgba(150,156,180,1)] ">{product.price}</span>
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
                    title: "Platea in.",
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
                      <p className="text-blue-900 text-lg font-semibold">{product.title}</p>
                      <span className="text-lg text-[rgba(150,156,180,1)]">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Section */}
            <div className="bg-white  rounded-lg p-6">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">Follow</h3>
              <div className="flex space-x-6 mt-8">
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com" // Replace with your Facebook page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaFacebook size={30} />
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com" // Replace with your Instagram page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                >
                  <FaInstagram size={30} />
                </a>

                {/* Twitter Icon */}
                <a
                  href="https://www.twitter.com" // Replace with your Twitter page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter size={30} />
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
                      className={`text-xs px-2 py-1 rounded-md ${tag.name === "Atsanil" ? "text-red-500" : "text-blue-900"
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
};
