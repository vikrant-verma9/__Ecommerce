import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 2,
      price: 35,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover mr-4 rounded"
          />

          {/* Info + Quantity Controls */}
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-medium text-gray-800">
                ${product.price.toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Size: {product.size} | Color: {product.color}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-3 space-x-3">
              <button className="border px-2 py-1 rounded text-xl font-medium">-</button>
              <span>{product.quantity}</span>
              <button className="border px-2 py-1 rounded text-xl font-medium">+</button>
            </div>
          </div>

          {/* Delete Icon */}
          <button className="ml-4 mt-1">
            <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
