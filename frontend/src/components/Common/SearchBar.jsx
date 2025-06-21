import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      {/* Overlay Search Bar */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white h-24 z-50 flex items-center justify-center transition-all duration-300">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center w-full px-4 relative"
          >
            <div className="relative w-1/2 flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 px-4 py-2 pr-20 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              />

              {/* Search Button */}
              <button
                type="submit"
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <HiMagnifyingGlass className="h-5 w-5" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleSearchToggle}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-500"
              >
                <HiMiniXMark className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Default Search Icon */}
      {!isOpen && (
        <div className="flex items-center justify-center w-auto">
          <button onClick={handleSearchToggle}>
            <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
