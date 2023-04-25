import React from 'react';
import {useEffect, useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



const Movie = () => {

const {user} = useSelector((state) => state.user);

console.log(user)

console.log("hi")






};

export default Movie;