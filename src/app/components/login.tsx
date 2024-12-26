import React from "react";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className=" bg-white flex flex-col items-center justify-center">

    <header className="py-8 bg-violet-50 text-center w-full h-60 md:text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl mt-10 md:text-3xl font-bold">My Account</h1>
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
            My Account
          </Link>
        </p>
      </div>
    </header>

    {/* Login Section */}
<div className="w-full h-auto flex justify-center items-center pt-20">
  <div className="bg-white shadow-lg rounded-lg px-8 py-10 max-w-md w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
    <p className="text-sm text-center text-gray-600 mt-2">
      Please login using account details below.
    </p>

    {/* Login Form */}
    <form className="mt-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />
      </div>
      <div className="text-right">
        <a
          href="#"
          className="text-sm text-purple-600 hover:underline"
        >
          Forgot your password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
      >
        Sign In
      </button>
    </form>

    {/* Footer */}
    <p className="mt-6 text-center text-sm text-gray-600">
      Don’t have an account?{" "}
      <a href="#" className="text-purple-600 hover:underline">
        Create account
      </a>
    </p>
  </div>
</div>
</div>
  )}