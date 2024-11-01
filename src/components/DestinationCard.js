// components/DestinationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StartRating';

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-55 hover:shadow-2xl duration-300 ease-in-out">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={destination.media.photos[0]} 
          alt={destination.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-500 mb-2 leading-tight">{destination.name}</h2>
        
        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {destination.description}
        </p>

        {/* Details */}
        <div className="text-sm text-gray-800 space-y-1 mb-4">
          <p>
            <span className="font-semibold">Category:</span> {destination.category}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {destination.location.city}, {destination.location.state}
          </p>
          <div className="flex items-center">
            <span className="font-semibold mr-1">Average Rating:</span> 
            <span className="flex items-center">
              {destination.average_rating} 
              <StarRating rating={destination.average_rating} />
            </span>
          </div>
        </div>

        {/* Button */}
        <Link 
          to={`/search/place/${destination.place_id}`} 
          className="block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-center py-2 rounded-md hover:bg-gradient-to-l transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
