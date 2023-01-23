import { delay, put, select, takeLeading, call, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

import { setCity, setWeatherData } from './reducer';
import { API_URLS, API_KEY } from '../utils/constants';
import { requestGet } from '../utils/request';


function* setCitySaga(action: { payload: any; }): IterableIterator<any> {
    try {
        const selectedCity = action.payload;
        const weatherResponse = yield call(requestGet, `${API_URLS.GET_WEATHER}${selectedCity}&appid=${API_KEY}`);
        if (weatherResponse) {
            yield put(
                setCity(action.payload)
            );
            yield put(
                setWeatherData(weatherResponse)
            );
        }
    } catch (error) {
        console.log('error');
    }
}

export default function* appSaga() {
    yield takeLeading(setCity, setCitySaga);
}
