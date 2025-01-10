import Image from "next/image";
import Link from "next/link";

const LatestBlogs = () => {
  return (
    <div className="py-12 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-8">Latest Blogs</h1>

      {/* Grid for Blogs */}
      <div className="flex flex-wrap justify-center gap-[30px]">
        {/* Blog 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col w-[370px] h-[493px] opacity-100">
          <Image
            src="/b1.jpg" // Replace with your image path
            alt="Blog 1"
            width={370}
            height={220}
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-4">Blog Title 1</h2>
          <p className="text-gray-600 mb-4">
            A brief description of the blog. This is where you can add a summary of the content.
          </p>
          <Link href="/blogs/blog1">
            <span className="text-blue-500 hover:underline cursor-pointer">Read More</span>
          </Link>
        </div>

        {/* Blog 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col w-[370px] h-[493px] opacity-100">
          <Image
            src="/3.jpg" // Replace with your image path
            alt="Blog 2"
            width={370}
            height={220}
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-4">Blog Title 2</h2>
          <p className="text-gray-600 mb-4">
            A brief description of the blog. This is where you can add a summary of the content.
          </p>
          <Link href="/blogs/blog2">
            <span className="text-red-500 hover:underline cursor-pointer">Read More</span>
          </Link>
        </div>

        {/* Blog 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col w-[370px] h-[493px] opacity-100">
          <Image
            src="/b3.jpg" // Replace with your image path
            alt="Blog 3"
            width={370}
            height={220}
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-4">Blog Title 3</h2>
          <p className="text-gray-600 mb-4">
            A brief description of the blog. This is where you can add a summary of the content.
          </p>
          <Link href="/blogs/blog3">
            <span className="text-blue-500 hover:underline cursor-pointer">Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
