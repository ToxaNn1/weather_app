import axios from "axios";
import { createrTomorrowForecast } from "../reducer/reducerForecast";

export const asyncgetTomorrow = (city) => {
    return async function (dispatch) {
        await axios
            .get(
                `http://api.weatherapi.com/v1/forecast.json?key=72e186667470467b9a685654222608&q=${city}&days=2`
                // days 2 beacause day 1 returns current day , day 2 return tommorow day
            )
            .then((response) => dispatch(createrTomorrowForecast(response.data)));
    };
};
