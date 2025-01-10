import Image from "next/image";
import React from "react";

const ClientSections = () => {
  return (
    <div className="container mx-auto text-center mb-56 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold font-josefin mb-12  text-blue-950">Our Client Say!</h2>
      
      {/* Image container with responsive layout */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <Image
          src="/about/client1.jpg"
          alt="Client 1"
          width={55}
          height={55}
          className="relative top-2 object-cover sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
        <Image
          src="/about/client2.jpg"
          alt="Client 2"
          width={55}
          height={55}
          className="relative top-0 object-cover sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
        <Image
          src="/about/client3.jpg"
          alt="Client 3"
          width={55}
          height={55}
          className="relative top-2 object-cover sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </div>

      {/* Client's name */}
      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold font-josefin mt-4">Selina Gomez</h4>

      {/* Client's role */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 pb-9 font-josefin">Ceo At Webecy Digital</p>

      {/* Client's testimonial */}
      <p className="text-xs sm:text-sm md:text-base italic font-bold text-gray-500 leading-6 font-josefin">
  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br />
  aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br />
  aliquam lacus volutpat praesent.&quot;
</p>

    </div>
  );
};

export default ClientSections;
