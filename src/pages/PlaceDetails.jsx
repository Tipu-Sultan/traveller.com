// pages/PlaceDetails.js
import React from 'react';
import Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import ServiceCard from '../components/ServiceCard';

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-4xl font-semibold text-orange-500">{place.name}</h2>
        <img src={place.image} alt={place.name} className="w-full h-64 object-cover mt-4 rounded-lg" />
        <p className="mt-6 text-gray-700">{place.description}</p>

        <section className="my-8">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Recommended Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {place.hotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Available Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {place.services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaceDetails;
