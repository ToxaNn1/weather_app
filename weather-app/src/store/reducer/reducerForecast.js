const defaultValue = {
    forecast: [],
};

//constans
// forecast
const TODAY_FORECAST = "TODAY_FORECAST";
const TOMORROW_FORECAST = "TOMORROW_FORECAST";
const YESTERDAY_FORECAST = "YESTERDAY_FORECAST";


export const reducerForecast = (state = defaultValue, action) => {
    switch (action.type) {
        // forecast
        case TOMORROW_FORECAST: {
            // вертає масив з сьогоднішінм днем і завтрашнім
            // я витягую тіки масив з даними завтрашнього дня
            return { ...state, forecast: [action.payload.forecast.forecastday[1]] };
        }
        case YESTERDAY_FORECAST: {
            return { ...state, forecast: action.payload.forecast.forecastday };
        }

        case TODAY_FORECAST: {
            return { ...state, forecast: [action.payload.forecast.forecastday[0]] }; // сюда прийде масив з обектами де буде інфа про прогноз погоди
        }

        default:
            return state;
    }
};
export const createrTodayForecast = (payload) => ({ type: TODAY_FORECAST, payload });
export const createrTomorrowForecast = (payload) => ({ type: TOMORROW_FORECAST, payload });
export const createrYesterdayForecast = (payload) => ({ type: YESTERDAY_FORECAST, payload });
