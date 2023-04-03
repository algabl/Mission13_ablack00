import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Podcasts from './Podcasts';
import MovieCollection from './movies/MovieCollection';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="pb-3">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/podcasts" Component={Podcasts} />
            <Route path="/moviecollection" Component={MovieCollection} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
