import React, { useState } from 'react';
import ProductGrid from './ProductGrid';

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion.",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1"
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2"
    },
  ]
};

const similarProducts = [
    {
        _id:  1,
        name: "Product 1",
        price: 100,
        images: [{url: "https://piscum.photos/500/500?random=3"}]
    },
 {
        _id:  2,
        name: "Product 2",
        price: 100,
        images: [{url: "https://piscum.photos/500/500?random=4"}]
    },
     {
        _id:  3,
        name: "Product 3",
        price: 100,
        images: [{url: "https://piscum.photos/500/500?random=5"}]
    },
     {
        _id:  4,
        name: "Product 4",
        price: 100,
        images: [{url: "https://piscum.photos/500/500?random=6"}]
    },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setCartMessage("Product added to cart!");

      setTimeout(() => {
        setCartMessage("");
      }, 3000); // Message disappears after 3 seconds
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              ${selectedProduct.originalPrice}
            </p>
            <p className="text-xl text-gray-900 mb-2">${selectedProduct.price}</p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'hover:bg-black hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedSize || isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition ${
                !selectedColor || !selectedSize || isButtonDisabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-800'
              }`}
            >
              {isButtonDisabled ? 'Adding...' : 'Add to Cart'}
            </button>

            {/* Success Message */}
            {cartMessage && (
              <div className="text-green-600 font-medium mb-6">
                ✅ {cartMessage}
              </div>
            )}

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <h2 className="text-2xl text-cneter font-meduim mb-4">
You May Also Like
            </h2>
            <ProductGrid products={similarProducts}/>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
