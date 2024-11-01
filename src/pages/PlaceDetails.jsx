import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import ServiceCard from '../components/ServiceCard';
import { fetchPlace, fetchPlaceServices } from '../redux/slices/placeSlice';
import Layout from '../layout/Layout';
import Carousel from '../components/Carousel'; // Ensure you have a Carousel component
import DynamicBreadcrumbs from '../components/Breadcrumbs';
import StarRating from '../components/StartRating';

const PlaceDetails = () => {
  const { placeId } = useParams();
  const dispatch = useDispatch();

  // Access place details and nearby data from Redux
  const { place, loading, error, nearbyHotels, bikesorCar, petrolStations } = useSelector((state) => state.place);

  // Fetch place details on initial render or if placeId changes
  useEffect(() => {
    if (!place || place.place_id !== placeId) {
      dispatch(fetchPlace(placeId)); // Fetch place details if not loaded or incorrect place
    }
  }, [dispatch, placeId, place]);

  // Fetch nearby services based on place name and city after place data is loaded
  useEffect(() => {
    if (place?.name && place?.location?.city) {
      dispatch(fetchPlaceServices({ placeId, placeName: place.name, city: place.location.city }));
    }
  }, [dispatch, place?.name, place?.location?.city, placeId]);

  if (loading) return <div className="flex justify-center items-center h-full"><p>Loading...</p></div>;
  if (error) return <div className="flex justify-center items-center h-full"><p>Error: {error}</p></div>;

  return (
    <Layout title="Place Details | Traveller.com" description="Explore the best destinations with Traveller.com">
      <div className="container mx-auto px-4 py-8">
        <DynamicBreadcrumbs />
        <div className="flex flex-col md:flex-row md:space-x-4">

          {/* Left Side: Suggested Hotels */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-4">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Recommended Hotels</h3>
            <div className="space-y-4">
              {nearbyHotels.map((hotel, index) => (
                <div className="transform hover:scale-105 transition-transform duration-300 rounded-lg border shadow-md overflow-hidden" key={index}>
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>
          </div>

          {/* Center: Place Details */}
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h2 className="text-4xl font-semibold text-orange-500">{place?.name}</h2>

            {/* Carousel for Place Photos */}
            <Carousel images={place.media?.photos} />

            <p className="mt-6 text-gray-700">{place?.description}</p>
            <div className="mt-4 text-gray-800 space-y-1">
              <p><strong>Location:</strong> {place.location?.city}, {place.location?.state}, {place.location?.country}</p>
              <p><strong>Category:</strong> {place?.category}</p>
              <p><strong>Best Time to Visit:</strong> {place?.best_time_to_visit}</p>
              <p><strong>Entry Fee:</strong> {place?.entry_fee}</p>
              <p><strong>Tags:</strong> {place?.tags?.join(', ')}</p>
            </div>

            {/* Average Rating */}
            <div className="mt-4 flex items-center">
              <span className="font-semibold text-lg mr-2">Rating:</span>
              <StarRating rating={place.average_rating} />
            </div>
          </div>

          {/* Right Side: Nearby Rentals & Services */}
          <div className="w-full md:w-1/4 pl-4">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Nearby Rentals & Services</h3>
            <div className="space-y-4">
              {bikesorCar.map((rental, index) => (
                <div className="transform hover:scale-105 transition-transform duration-300 rounded-lg border shadow-md overflow-hidden" key={index}>
                  <ServiceCard service={rental} type="Bike Rental" />
                </div>
              ))}
              {petrolStations.map((station, index) => (
                <div className="transform hover:scale-105 transition-transform duration-300 rounded-lg border shadow-md overflow-hidden" key={index}>
                  <ServiceCard service={station} type="Petrol Station" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default PlaceDetails;
