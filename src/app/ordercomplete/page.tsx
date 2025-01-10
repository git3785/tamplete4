import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSection from "../components/logos";

const OrderComplete = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold  text-blue-950">Order Completed</h1>
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
              Order Completed
            </Link>
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col my-40 items-center justify-center  text-center">
      <Image
  src="/ordercomplete/oc1.jpg" // Replace with your actual image URL
  alt="Order Completed"
  width={128} // Corresponds to w-32
  height={128} // Corresponds to h-32
  className="mb-6 object-cover rounded-full"
/>
        <h1 className="text-3xl font-bold mb-4  text-blue-950">Your Order Is Completed!</h1>
        <p className="mb-6 text-lg">
          Thank you for your order! Your order is being processed and will be completed within 3-6 <br />
          hours. You will receive an email confirmation when your order is completed.
        </p>
        <Link href="/shop-list">
  <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-500">
    Continue Shopping
  </button>
</Link>

      </div>

      {/* Logo Section */}
      <LogoSection />
    </div>
  );
};

export default OrderComplete;
