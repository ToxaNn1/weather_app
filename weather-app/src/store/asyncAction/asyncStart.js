import axios from "axios";
import { createrAddCity } from "../reducer/reducerAuth";
import { createrError } from "../reducer/reducerMain";
// Викликаю функцію asyncNoAuthAddCity в фалі NoAuthPAge, куда передаю назву міста, яку беру з редакса, де в свою чергу беру з інпута
export const asyncStartAuth = (startedArr) => {
    console.log(startedArr);
    return async function (dispatch) {
        let res = startedArr.map(
            async (data) =>
                await axios
                    .get(
                        `http://api.weatherapi.com/v1/current.json?key=b802d83390424b758a9192354222907&q=${data}&lang=uk`
                    )
                    .then((response) => response.data)
        );
        return Promise.all(res).then((responce) => dispatch(createrAddCity(responce)));
    };
};

export const asyncAddCity = (city) => {
    return async function (dispatch) {
        await axios
            .get(
                `https://api.weatherapi.com/v1/current.json?key=b802d83390424b758a9192354222907&q=${city}&aqi=yes`
            )
            .then((response) => dispatch(createrAddCity([response.data])))
            .catch((reject) => dispatch(createrError(reject.response.data.error.message))); // add responce to arr
        // після чого, аксіос вертає мені всю дату і я закидую її в редакс через креатор
    };
};
