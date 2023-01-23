import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCity, selectWeatherData } from '../store/selectors';
import WeatherMap from '../components/weatherMap';


const Content = ({ }) => {
    const selectedCity = useSelector(selectCity);
    const selectedWeatherData = useSelector(selectWeatherData);

    useEffect(() => {
    }, [selectedCity]);

    return (
        <WeatherMap selectedWeatherData={selectedWeatherData} />
    );
}

export default Content;