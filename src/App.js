import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {useEffect, useContext, useState} from 'react';
//components
import Nav from './navigation-bar'
import HomeComponent from './home';
import Movie from './details-page/detailspage';
import SearchPage from './search-page'

function App() {
  return (
    <>
      <Router>
      <Nav/>
        <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/details/:id" element={<div className="movie-wrapper"><Movie /></div>} />
            <Route path="/search" element={<SearchPage/>} />
        </Routes>
        </Router>
    </>  
  );
}

export default App;