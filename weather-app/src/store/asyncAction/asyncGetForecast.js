import axios from "axios";
import { createrTodayForecast } from "../reducer/reducerForecast";

export const asyncGetForecast = (cityName) => { // в параметри прийде назва міста з карточки, на яку нажав користувач 
    return async function (dispatch) {
        await axios
            .get(
                `https://api.weatherapi.com/v1/forecast.json?key=72e186667470467b9a685654222608&q=${cityName}&days=1&aqi=yes&alerts=yes`
            )
            .then((response) => dispatch(createrTodayForecast(response.data)));
    };
};