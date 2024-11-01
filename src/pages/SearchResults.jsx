import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import Layout from '../layout/Layout';
import DynamicBreadcrumbs from '../components/Breadcrumbs';

const SearchResults = () => {
  const { results, loading, error } = useSelector(state => state.search);

  return (
    <Layout title="Search | Traveller.com" description="Explore the best destinations with Traveller.com">
      <div>
        <SearchBar />
        <div className="max-w-6xl mx-auto px-4 mt-8">
        <DynamicBreadcrumbs />
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Search Results</h2>

          {/* Display the total number of results */}
          <p className="text-lg text-gray-700 mb-4">
            {results.length} {results.length === 1 ? 'result' : 'results'} found
          </p>

          {/* Loading spinner */}
          {loading && (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="ml-2 text-blue-500">Loading...</p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="bg-red-100 text-red-700 border border-red-400 p-4 rounded-lg text-center">
              <p className="font-semibold">!Places not founds</p>
              <p>{error}</p>
            </div>
          )}

          {/* Display the search results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {results.map((place) => (
              <DestinationCard key={place._id} destination={place} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
