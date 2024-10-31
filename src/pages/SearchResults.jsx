// pages/SearchResults.js
import React from 'react';
import Navbar from '../components/Navbar';
import DestinationCard from '../components/DestinationCard';

const SearchResults = ({ results }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-semibold text-orange-500 mb-4">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((place) => (
            <DestinationCard key={place.name} destination={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
