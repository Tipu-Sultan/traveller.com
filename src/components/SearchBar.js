// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      setQuery(''); // Clear the input after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search on Enter key
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for destinations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full h-12 px-4 border border-gray-300 rounded-l-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-white"
          aria-label="Search destinations"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 h-12 px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition duration-300 flex items-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;