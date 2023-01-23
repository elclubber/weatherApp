import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { setCity } from '../store/reducer';
import { selectCity, selectWeatherData } from '../store/selectors';
import WeatherMap from '../components/weatherMap';

const Main = ({ }) => {
    const dispatch = useDispatch();
    const handleSearch = (value: string) => {
        dispatch(setCity(value));
    }
    const selectedCity = useSelector(selectCity);
    const selectedWeatherData = useSelector(selectWeatherData);

    useEffect(() => {
    }, [selectedCity]);

    return (
        <>
            <header className="App-header">
                <div className="title">Meteo
                    <span>
                        <a href="http://www.celaneo.com/" className="logo-celaneo" data-cursor-action="" title="revenir à l'accueil">
                            Cela<b>neo</b>
                        </a>
                    </span>
                </div>
                <SearchBar onSearch={handleSearch} />
            </header>
            <div className="details">
                <WeatherMap selectedWeatherData={selectedWeatherData} />
            </div>
        </>
    );
}

export default Main;