// pages/Home.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import Layout from '../layout/Layout';
import FeaturedDestinations from '../components/FeaturedDestinations';

const featuredDestinations = [
  { name: 'Kasol', description: 'Beautiful place in Himachal Pradesh.', image: 'https://www.trawell.in/admin/images/upload/454282191Kullu_Kasol_Main.jpg' },
  { name: 'Spiti', description: 'Known for its natural beauty.', image: 'https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg' },
  { name: 'Kullu', description: 'Known for its natural beauty.', image: 'https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg' },
  { name: 'Manali', description: 'Known for its natural beauty.', image: 'https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg' }

];

const Home = () => {
  return (
    <Layout title="Home | Traveller.com" description="Explore the best destinations with Traveller.com">
      <div>
        <header className="relative h-80"> {/* Set height to control carousel height */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="carousel-wrapper"
          >
            <div className="h-80 overflow-hidden">
              <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/31174154/Hidden-Gems-Himachal.jpg" alt="Destination 1" className="object-cover w-full h-full" />
              <p className="legend">Explore the mountains of Himachal</p>
            </div>
            <div className="h-80 overflow-hidden">
              <img src="https://www.ehimachal.org/wp-content/themes/ehimachal/assets/img/lakes/chandra-taal-lake.webp" alt="Destination 2" className="object-cover w-full h-full" />
              <p className="legend">Find peace in the valleys</p>
            </div>
            <div className="h-80 overflow-hidden">
              <img src="https://www.ehimachal.org/wp-content/themes/ehimachal/assets/img/lakes/chandra-taal-lake.webp" alt="Destination 3" className="object-cover w-full h-full" />
              <p className="legend">Adventure awaits</p>
            </div>
          </Carousel>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
            <h1 className="text-4xl font-bold">Explore Your Next Adventure</h1>
            <p className="mt-4 text-lg">Discover the best places, hotels, and services for your travel.</p>
          </div>
        </header>
        <SearchBar />

        {/* Featured Destinations Section */}
        <section className="my-8 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-orange-500 mb-6">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <FeaturedDestinations key={destination.name} destination={destination} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
