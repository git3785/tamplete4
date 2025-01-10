import React from "react";

const features = [
  {
    icon: "🚚",
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "💸",
    title: "100% Cash Back",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "🏆",
    title: "Quality Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "🕒",
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ShopexOffer = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold my-8 text-blue-950">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;
