
import { createSelector } from 'reselect';

const selectAppState = (state: { app: any; }) => state.app;

export const selectCity = createSelector(
  [selectAppState],
  (appState) => appState.city
);

export const selectWeatherData = createSelector(
  [selectAppState],
  (appState) => appState.weatherData
);
