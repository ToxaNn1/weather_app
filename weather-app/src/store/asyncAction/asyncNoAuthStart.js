import axios from "axios";
import { createrAddCityNoAuth } from "../reducer/reducerNoAuth";
import { createrError } from "../reducer/reducerMain";
// Викликаю функцію asyncNoAuthAddCity в фалі NoAuthPAge, куда передаю назву міста, яку беру з редакса, де в свою чергу беру з інпута
export const asyncNoAuthAddCity = (city) => {
    return async function (dispatch) {
        await axios
            .get(
                `https://api.weatherapi.com/v1/current.json?key=72e186667470467b9a685654222608&q=${city}&aqi=yes`
            )
            .then((response) => dispatch(createrAddCityNoAuth(response.data)))
            .catch((reject) => dispatch(createrError(reject.response.data.error.message)));
        // після чого, аксіос вертає мені всю дату і я закидую її в редакс через креатор
    };
};
