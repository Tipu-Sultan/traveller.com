// pages/TripCalculator.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const TripCalculator = () => {
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');

  const calculateTrip = () => {
    const total = days * budget;
    alert(`Estimated Trip Cost: $${total}`);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-semibold text-orange-500">Trip Calculator</h2>
        <div className="my-4">
          <label className="block text-gray-700">Number of Days</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700">Daily Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button onClick={calculateTrip} className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default TripCalculator;
