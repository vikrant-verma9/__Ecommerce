import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const newArrivals = [
  {
    _id: "1",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "2",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "3",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "4",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "5",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "6",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "7",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Stylish Jacket Image" }],
  },
  {
    _id: "8",
    name: "Stylish Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Stylish Jacket Image" }],
  },
];

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
  };

  const scrollContainerBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Listen to scroll changes to update button state
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();

    return () => container.removeEventListener('scroll', updateScrollButtons);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const isAtEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway. Freshly added to keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 -bottom-6 flex space-x-2">
          <button
            onClick={() => scrollContainerBy(-300)}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black shadow ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scrollContainerBy(300)}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black shadow ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Product List */}
      <div ref={scrollRef} className="container mx-auto overflow-x-auto">
        <div className="flex space-x-6 w-max">
          {newArrivals.map((product) => (
            <div key={product._id} className="min-w-[250px] bg-white rounded shadow p-4 transition-transform hover:scale-105">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[300px] object-cover rounded mb-4"
              />
              <Link to={`/product/${product._id}`} className="block">
                <h3 className="font-medium">{product.name}</h3>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
