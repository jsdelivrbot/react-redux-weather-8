import axios from 'axios';

const API_KEY = '90e19fef79f6ccb45b771dc67d4c2b76';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    
    //API call
    const request = axios.get(url);
    
    //Because we have redux-promise middleware, the promise will be resolved before being sent to reducer
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}