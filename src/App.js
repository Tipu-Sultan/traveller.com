// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Login from './auth/Login';
import Register from './auth/Register';
import PlaceDetails from './pages/PlaceDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/search/place/:placeId" element={<PlaceDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
