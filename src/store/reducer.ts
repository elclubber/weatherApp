import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    city: string,
    weatherData: object,

}

const initialState = { city: 'Paris', weatherData: {} } as AppState;

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setWeatherData(state, action: PayloadAction<object>) {
            console.log(action.payload)
            state.weatherData = action.payload;
        }
    },
})

export const { setCity, setWeatherData } = appSlice.actions
export type { AppState }
export default appSlice.reducer
