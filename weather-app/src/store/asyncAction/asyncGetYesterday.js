import axios from "axios";
import { createrYesterdayForecast } from "../reducer/reducerForecast";

export const asyncGetYesterday = (city, date) => {
    return async function (dispatch) {
        await axios
            .get(
                `http://api.weatherapi.com/v1/history.json?key=72e186667470467b9a685654222608&q=${city}&dt=${date}`
                // days 2 beacause day 1 returns current day , day 2 return tommorow day
            )
            .then((response) => dispatch(createrYesterdayForecast(response.data)));
    };
};
