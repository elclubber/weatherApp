import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCity, selectWeatherData } from '../store/selectors';


const Content = ({ }) => {
    const selectedCity = useSelector(selectCity);
    const selectedWeatherData = useSelector(selectWeatherData);

    useEffect(() => {
    }, [selectedCity]);

    return (
        <>
            <div className="weather-map">
                <div className="location-info">
                    <h2>{selectedWeatherData.name}</h2>
                    <div className="current-weather">
                        <div className="icon">
                            <img src="https://openweathermap.org/img/wn/04d.png" alt="Overcast clouds" />
                        </div>
                        <div className="temperature">
                            <p>Temperature: <span>{selectedWeatherData?.main?.temp}</span> &#8451;</p>
                        </div>
                        <div className="feels-like">
                            <p>Feels like: <span>{selectedWeatherData?.main?.feels_like}</span> &#8451;</p>
                        </div>
                        <div className="wind">
                            <p>Wind: <span>{selectedWeatherData?.wind?.speed}</span> m/s</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;