// components/HotelCard.js
import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
      <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover rounded-md" />
      <h3 className="text-lg font-semibold text-orange-500 mt-2">{hotel.name}</h3>
      <p className="text-gray-600 mt-1">${hotel.price} per night</p>
      <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Now
      </button>
    </div>
  );
};

export default HotelCard;
