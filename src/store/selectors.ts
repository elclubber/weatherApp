import { createSelector } from 'reselect';

const selectAppState = (state: {
    weatherData: any;
    city: any; 
}) => state;

export const selectCity = createSelector(
  [selectAppState],
  (appState) => appState.city
);

export const selectWeatherData = createSelector(
  [selectAppState],
  (appState) => appState.weatherData
);