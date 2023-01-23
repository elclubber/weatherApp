import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from 'isomorphic-fetch';
import SearchBar from '../components/SearchBar';
import { setCity } from '../store/reducer';

const API_KEY = 'f825344b0cf0672c689378549f9868db';
const CITY = 'Paris';


const fetchWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}



const Header = ({ }) => {
    const dispatch = useDispatch();
    const handleSearch = (value: string) => {
        dispatch(setCity(value));
    }

    return (
        <header className="App-header">
            <SearchBar onSearch={handleSearch} />
            <button onClick={fetchWeather}>
                click Me
            </button>
        </header>
    );
}

export default Header;