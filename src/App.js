import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {useEffect, useContext, useState} from 'react';
import {Provider} from "react-redux";
//components
import Nav from './navigation-bar'
import Movie from './details-page/detailspage';
import Register from './users/register'
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import UsersList from "./users/adminComponent";
const store = configureStore(
    {reducer: {usersMain: usersReducer,
        }});
//    <Route path="/about" element={<h1>About</h1>} />
//           <Route path="/details/:id" element={<div className="movie-wrapper"><Movie /></div>} />
function App() {
  return (
    <><Provider store={store}>
      <Router>
      <Nav/>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminShow" element={<UsersList/>}/>

        </Routes>
        </Router>
        </Provider>
    </>  
  );
}

export default App;