import WeatherData from '../../utils/types';

interface WeatherMapProps {
    selectedWeatherData: WeatherData | undefined;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ selectedWeatherData }) => {
    if (!selectedWeatherData || !selectedWeatherData.hasOwnProperty('weather')) {
        return <div className="loading">Please enter a valid city name</div>
    }
    return (
        <div className="weather-map">
            <div className="location-info">
                <h2>{selectedWeatherData.name}</h2>
                <div className="current-weather">
                    <div className="icon">
                        <img src={`https://openweathermap.org/img/wn/${selectedWeatherData.weather[0].icon}.png`} alt={`${selectedWeatherData.weather[0].icon}`} />
                    </div>
                    <div className="temperature">
                        <p>Temperature: <span>{selectedWeatherData.main.temp}</span> &#8451;</p>
                    </div>
                    <div className="feels-like">
                        <p>Feels like: <span>{selectedWeatherData.main.feels_like}</span> &#8451;</p>
                    </div>
                    <div className="wind">
                        <p>Wind: <span>{selectedWeatherData.wind.speed}</span> m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherMap;