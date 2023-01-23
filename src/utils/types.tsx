interface WeatherData {
    name: string,
    main: {
        temp: number,
        feels_like: number,
    },
    wind: {
        speed: number
    },
    weather: [{
        icon: string
    }]
}

export default WeatherData;