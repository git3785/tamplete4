import Link from "next/link";
import Image from "next/image";

const Productdetail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl text-blue-950 font-bold">Product Details</h1>
          <p className="text-sm mt-3 text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link href="/myaccount" className="text-pink-600 font-bold hover:underline">
              Product Details
            </Link>
          </p>
        </div>
      </header>
      <div className="relative flex justify-center items-center py-24 px-6">
        {/* Outer Box */}
        <div className="w-[1170px] h-[509px] bg-purple-50 flex justify-between items-center p-4 rounded-lg shadow-lg">

          {/* First Smaller Image */}
          <div className="w-[151px] h-[155px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <Image
              src="/path/to/image1.png"
              alt="Image 1"
              width={500} // Replace with your desired width
              height={500} // Replace with your desired height
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Second Smaller Image */}
          <div className="w-[151px] h-[155px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <Image
              src="/path/to/image2.png"
              alt="Image 2"
              width={500} // Replace with your desired width
              height={500} // Replace with your desired height
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Third Smaller Image */}
          <div className="w-[151px] h-[155px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <Image
              src="/path/to/image2.png"
              alt="Image 2"
              width={500} // Replace with your desired width
              height={500} // Replace with your desired height
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Larger Image */}
          <div className="w-[375px] h-[487px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <Image
              src="/path/to/image2.png"
              alt="Image 2"
              width={500} // Replace with your desired width
              height={500} // Replace with your desired height
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

    </div>

  )
}

export default Productdetail;