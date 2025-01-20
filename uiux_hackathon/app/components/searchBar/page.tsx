import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Navigate to the Product Page and pass the search term as a query parameter
      router.push(`/products?search=${searchTerm.trim().toLowerCase()}`);
    }
  };

  return (
    <div className="hidden lg:flex lg:ml-20 2xl:ml-0">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 px-2">
        <input
          type="text"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-6 py-1 text-sm focus:outline-none"
        />
      </div>
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-secondary text-white px-2 py-1"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
