import React from "react";

const ClientSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Our Client Say!</h2>
        <div className="flex justify-center gap-4 mb-6">
          <img
            src="/about/client1.jpg"
            alt="Client 1"
            className="rounded-full w-20 h-20"
          />
          <img
            src="/about/client2.jpg"
            alt="Client 2"
            className="rounded-full w-20 h-20"
          />
          <img
            src="/about/1.jpg"
            alt="Client 3"
            className="rounded-full w-20 h-20"
          />
        </div>
        <p className="text-xl italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum lorem, non elementum arcu."
        </p>
        <h4 className="text-lg font-semibold mt-4">Selina Gomez</h4>
      </div>
    </section>
  );
};

export default ClientSection;
