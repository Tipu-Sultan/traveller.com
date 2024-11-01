// components/DestinationCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedDestinations = ({ destination }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-orange-500">{destination.name}</h2>
        <p className="text-gray-600 mt-2">{destination.description}</p>
        <button to="/place" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Link to='/place'>Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
