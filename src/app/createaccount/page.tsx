import React from "react";
import Link from "next/link";
import LogoSection from "../components/logos";
const CreateAccount = () => {
  return (
    <div className="bg-[rgba(246, 245, 255, 1);
] text-gray-800">
<header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl mt-10 md:text-3xl font-bold  text-blue-950">Create Account</h1>
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
          Create Account
          </Link>
        </p>
      </div>
    </header>

    <div className="mt-32 flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">
          Create Account
        </h2>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
    <LogoSection/>
    </div>
  );
};

export default CreateAccount;
