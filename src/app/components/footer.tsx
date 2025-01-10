
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-violet-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Newsletter */}
        <div>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Hekto</h3>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-pink-500 text-white py-1 px-2 rounded-md hover:bg-pink-400 text-base">
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-gray-600 ">
            <h4 className="font-bold">Contact Info</h4>
            <p className="leading-relaxed text-sm ">
              17 Princess Road, 
              London, Greater London 
              NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            {[
              { name: "Laptops & Computers", href: "/categories/laptops" },
              { name: "Cameras & Photography", href: "/categories/cameras" },
              { name: "Smart Phones & Tablets", href: "/categories/smartphones" },
              { name: "Video Games & Consoles", href: "/categories/videogames" },
              { name: "Waterproof Headphones", href: "/categories/headphones" },
            ].map((category, index) => (
              <li key={index}>
                <Link href={category.href}>
                  <span className="cursor-pointer hover:text-purple-600">
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-blue-950 ">Customer Care</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            {[
              { name: "My Account", href: "/account" },
              { name: "Discount", href: "/discount" },
              { name: "Returns", href: "/returns" },
              { name: "Order History", href: "/order-history" },
              { name: "Order Tracking", href: "/order-tracking" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <span className="cursor-pointer hover:text-purple-600">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            {[
              { name: "Blog", href: "/blog" },
              { name: "Browse the Shop", href: "/shop" },
              { name: "Category", href: "/categories" },
              { name: "Pre-Built Pages", href: "/prebuilt-pages" },
              { name: "Visual Composer Elements", href: "/visual-elements" },
              { name: "WooCommerce Pages", href: "/woocommerce-pages" },
            ].map((page, index) => (
              <li key={index}>
                <Link href={page.href}>
                  <span className="cursor-pointer hover:text-purple-600">
                    {page.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
{/* <div className="bg-gray-100 py-4"> */}
  <div className="container mt-10 mb-2 mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
    {/* Footer Text */}
    <p className="text-gray-500 text-sm mb-4 md:mb-0">
      &copy; Webecy - All Rights Reserved
    </p>

    {/* Social Media Icons */}
    <div className="flex justify-center md:justify-end space-x-4">
      {[
        {
          href: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .6 0 1.326v21.348C0 23.4.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.729 0 1.325-.6 1.325-1.326V1.326C24 .6 23.404 0 22.675 0z" />
            </svg>
          ),
        },
        {
          href: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.653c-1.125 0-2.038-.93-2.038-2.077C3.287 4.43 4.2 3.5 5.325 3.5c1.126 0 2.04.93 2.04 2.076 0 1.148-.914 2.077-2.04 2.077zm15.128 12.8h-3.528v-5.605c0-1.336-.025-3.057-1.863-3.057-1.866 0-2.15 1.457-2.15 2.962v5.7H9.383V9h3.391v1.563h.048c.472-.894 1.622-1.835 3.342-1.835 3.573 0 4.235 2.349 4.235 5.406v6.318z" />
            </svg>
          ),
        },
        {
          href: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.007.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.825 0-5.107 2.292-5.107 5.119 0 .4.045.79.13 1.166C7.691 8.094 4.067 6.13 1.64 3.161c-.438.748-.688 1.617-.688 2.548 0 1.758.894 3.308 2.252 4.218-.827-.026-1.605-.253-2.29-.633v.064c0 2.451 1.743 4.497 4.054 4.957-.425.116-.874.178-1.338.178-.327 0-.644-.032-.956-.092.645 2.015 2.508 3.479 4.717 3.52-1.734 1.362-3.918 2.172-6.29 2.172-.41 0-.816-.024-1.213-.071 2.244 1.437 4.91 2.276 7.766 2.276 9.325 0 14.42-7.72 14.42-14.42 0-.22-.004-.439-.014-.658.994-.719 1.856-1.62 2.54-2.651z" />
            </svg>
          ),
        },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:text-blue-500 transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  </div>
{/* </div> */}

    </footer>
  );
};

export default Footer;
