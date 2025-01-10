"use client"
import Link from "next/link";
import React from "react";
import LogoSection from "../components/logos";

const ForgotPassword = () => {
  return (
    <div className=" bg-white flex flex-col items-center justify-center">

    <header className="py-8 bg-violet-50 text-center w-full h-60 md:text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl mt-10 md:text-3xl font-bold  text-blue-950">Forgot Password</h1>
        <p className="text-sm text-gray-500">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/pages" className="text-black hover:underline">
            Pages
          </Link>{" "}
          /{" "}
          <Link href="/forgetpassword" className="text-pink-600 font-bold hover:underline">
          Forgot Password
          </Link>
          
        </p>
      </div>
    </header>
    <div className=" mt-40 flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-950 mb-6 text-center">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your email address, and we’ll send you instructions to reset your password.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/login" className="text-purple-600 hover:underline text-sm">
            Back to Login
          </a>
        </div>
      </div>
    </div>
    <LogoSection/>
    </div>
  );
};

export default ForgotPassword;
