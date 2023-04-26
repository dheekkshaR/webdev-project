import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {useEffect, useContext, useState} from 'react';
import {Provider} from "react-redux";

//components
import Nav from './navigation-bar'
import HomeComponent from './home';
import Movie from './details-page/detailspage';
import Register from './users/register'
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import UsersList from "./users/adminComponent";
//    <Route path="/about" element={<h1>About</h1>} />
//           <Route path="/details/:id" element={<div className="movie-wrapper"><Movie /></div>} />

import FavoriteList from './details-page/FavoriteList';
import PersonDetail from './details-page/PersonDetail';
import ProfilePage from './profile-page/profilePage';
import ProviderPage from './provider-list';

import ProfileDetail from './details-page/ProfileDetail';



import { useDispatch, useSelector } from 'react-redux';
import { fetchUserByIdThunk } from './services/user-thunks';
import SearchPage from './search-page'
import BrowsePage  from './browse-page';
const store = configureStore(
    {reducer: {usersMain: usersReducer,
        }});

function App() {
const dispatch = useDispatch();
const [loading, setLoading] = useState(true);

//   console.log('user');
//     const { user } = useSelector((state) => state.user);
//   useEffect(() => {
//     const fetchUserData = async () => {
//       // Comment out or remove the hard-coded user ID
//        const id = "6441a68499859e1107f4aff2";
//
//       // Check if the user ID is not null before dispatching the fetchUserByIdThunk
// //      const id = false
//       if (id) {
//         console.log('user2');
//         const userData = await dispatch(fetchUserByIdThunk(id));
//         console.log('user3');
//         console.log(userData);
//         setLoading(false); // Set loading to false after fetching the user data
//
//         // Do something with userData, e.g., store it in the Redux store or local state
//       } else {
//         setLoading(false); // Set loading to false as there is no user to fetch
//       }
//     };
//
//     fetchUserData();
//   }, [dispatch]);
  return (
    <><Provider store={store}>
      <Router>
      <Nav/>
        <Routes>

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminShow" element={<UsersList/>}/>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/favorites" element={<FavoriteList/>} />
            <Route path="/person/:id" element={<PersonDetail/>} />
            <Route path="/details/:id" element={<Movie />} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/browse" element={<BrowsePage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/provider" element={<ProviderPage/>} />
            <Route path="/profile/:id" element={<ProfileDetail/>} />

        </Routes>
        </Router>
        </Provider>
    </> );
    // {/*<>*/}
    // {/*{loading ? (*/}
    // {/*          <p>Loading...</p>*/}
    // {/*        ) : (*/}
    //     );

}

export default App;