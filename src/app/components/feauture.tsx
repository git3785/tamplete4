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

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
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

export default FeaturesSection;
