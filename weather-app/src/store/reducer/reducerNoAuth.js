const defaultValue = {
    noAuthCities: [],
    query: "",
};

//constans
// actions with cards
const ADD_CITY_NO_AUTH = "ADD_CITY_NO_AUTH";
const DELETE_NO_AUTH_CITY = "DELETE_NO_AUTH_CITY";
// input value
const QUERY = "QUERY";

export const reducerNoAuth = (state = defaultValue, action) => {
    switch (action.type) {
        case ADD_CITY_NO_AUTH:
            return { ...state, noAuthCities: [...state.noAuthCities, action.payload] };
        case DELETE_NO_AUTH_CITY:
            return {
                ...state,
                noAuthCities: state.noAuthCities.filter(
                    (city) =>
                        city.location.name !== action.payload.name &&
                        city.location.region !== action.payload.region
                ),
            };
        case QUERY: // add to redux inputLoginValue
            return { ...state, query: action.payload };

        default:
            return state;
    }
};

export const createrAddCityNoAuth = (payload) => ({ type: ADD_CITY_NO_AUTH, payload });
export const createrDelCityNoAuth = (payload) => ({ type: DELETE_NO_AUTH_CITY, payload }); // delete city
export const createrQuery = (payload = "") => ({ type: QUERY, payload }); // return '' if creater no params: else return city name
