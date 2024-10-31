// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center">
      <h3 className="text-lg font-semibold text-orange-500">{service.name}</h3>
      <p className="text-gray-600 mt-1">{service.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
