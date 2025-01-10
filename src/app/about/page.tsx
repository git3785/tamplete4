import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturesSection from "../components/feauture";
import ClientSections from "../components/client";


const ClientSection = () => {
    return (
        <section className="bg-white pb-12">

            <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl mt-10 md:text-3xl font-bold  text-blue-950">About Us</h1>
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
                            About Us
                        </Link>
                    </p>
                </div>
            </header>
            <section className="pt-12 mt-16 bg-white">
    <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Left Column */}
            <div className="relative md:left-0 left-0 w-full md:w-[570px] h-[409px]">
                <Image
                    src="/about/about.jpg"
                    alt="About Our Ecommerce Business"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            {/* Right Side */}
            <div className="space-y-6 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl text-blue-950 font-bold">
                    Know About Our Ecommerce <br /> Business History
                </h2>
                <p className="text-gray-500 pb-6 sm:pb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <Link href="/contect" className="inline-block bg-pink-600 w-36 h-11 text-center font-semibold text-white px-6 py-2 rounded-tl-md hover:bg-pink-500 transition">
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
</section>


            <FeaturesSection />
            <ClientSections/>
        </section>
    );
};

export default ClientSection;
