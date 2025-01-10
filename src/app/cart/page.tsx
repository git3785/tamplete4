"use client";
import Link from "next/link";
import Image from "next/image"; // Updated import
import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    color: "Brown",
    size: "XL",
    price: 32.0,
    total: 219.0,
    imageUrl: "/cart/c1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    color: "Black",
    size: "M",
    price: 45.0,
    total: 90.0,
    imageUrl: "/cart/c2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    color: "Blue",
    size: "L",
    price: 50.0,
    total: 150.0,
    imageUrl: "/cart/c3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    color: "Red",
    size: "S",
    price: 28.0,
    total: 56.0,
    imageUrl: "/cart/c4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    color: "Green",
    size: "XL",
    price: 40.0,
    total: 80.0,
    imageUrl: "/cart/c5.jpg",
  },
];

const CartPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    city: "",
    postalCode: "",
  });

  const handleQuantityChange = (id: number, quantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              total: product.price * quantity,
            }
          : product
      )
    );
  };

  const handleUpdateCart = () => {
    alert("Cart updated successfully!");
  };

  const handleClearCart = () => {
    setProducts([]);
    alert("Cart cleared!");
  };

  const handleCalculateShipping = () => {
    if (!shippingInfo.country || !shippingInfo.city || !shippingInfo.postalCode) {
      alert("Please fill out all shipping details.");
      return;
    }
    alert(`Shipping calculated for ${shippingInfo.city}, ${shippingInfo.country}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-8 bg-gray-100 text-center w-full h-60 md:text-left">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mt-10 md:text-3xl font-bold text-blue-950">
            Shopping Cart
          </h1>
          <p className="text-sm text-gray-500">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/pages" className="text-black hover:underline">
              Pages
            </Link>{" "}
            /{" "}
            <Link
              href="/myaccount"
              className="text-pink-600 font-bold hover:underline"
            >
              Shopping Cart
            </Link>
          </p>
        </div>
      </header>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left - Products Table */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Cart</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-blue-950">
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-4 flex items-center space-x-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Color: {product.color}
                        </p>
                        <p className="text-sm text-gray-500">
                          Size: {product.size}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 text-sm md:text-base">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <input
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="w-12 border border-gray-300 rounded text-center"
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                      />
                    </td>
                    <td className="py-4 text-sm md:text-base">
                      £{product.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-6 flex-wrap gap-4">
              <button
                className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 w-full sm:w-auto"
                onClick={handleUpdateCart}
              >
                Update Cart
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 w-full sm:w-auto"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right - Cart Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Cart Totals</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-blue-950">Subtotal:</span>
                <span className="text-blue-950">
                  £
                  {products
                    .reduce((sum, product) => sum + product.total, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-950 mt-4">
              Shipping & taxes calculated at checkout
            </p>
            <Link href="/billingdetail">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-500">
                Proceed To Checkout
              </button>
            </Link>
            <h4 className="text-lg font-bold text-blue-950 mt-8 mb-4">
              Calculate Shipping
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCalculateShipping();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
                value={shippingInfo.country}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, country: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
                value={shippingInfo.city}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, city: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-green-500 focus:border-green-500"
                value={shippingInfo.postalCode}
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    postalCode: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500"
              >
                Calculate Shipping
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
