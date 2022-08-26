const defaultValue = {
    id: 1,
    authCities: [],
    auth: false,
    query: "",
    citieSearch: [],
    allCities: [],
    starterCities: ["Ternopil", "Kiev", "Paris", "London"]
};

//constans
// actions with cards
const ADD_CITY = "ADD_CITY";
const DELETE_CITY = "DELETE_CITY";
const ADD_CITY_SEARCH = "ADD_CITY_SEARCH";
const CLEAR_CITIES  = 'CLEAR_CITIES'
// input value
const QUERY = "QUERY";

const NEW_ID = "NEW_ID";
const AUTH = "AUTH";


export const reducerAuth = (state = defaultValue, action) => {
    switch (action.type) {
        case NEW_ID:
            return { ...state, id: state.id + 1 };
        case ADD_CITY:
            // action payload = [responce from server] return data in arr
            return { ...state, authCities: [...state.authCities, ...action.payload] };
        case CLEAR_CITIES:
            // action payload = [responce from server] return data in arr
            return { ...state, authCities: [...state.authCities] };
        case DELETE_CITY: {
            return {
                ...state,
                authCities: state.authCities.filter(
                    (city) =>
                        city.location.name !== action.payload.name &&
                        city.location.region !== action.payload.region
                ),
            };
        }
        case QUERY: // add to redux inputLoginValue
            return { ...state, query: action.payload };
        case AUTH: {
            let bool = action.payload === null || action.payload === undefined ? false : true;
            return { ...state, auth: bool };
        }

        default:
            return state;
    }
};

export const createrAuth = (payload = null) => ({ type: AUTH, payload }); //auth in system
export const createrClearCities = (payload) => ({ type: CLEAR_CITIES, payload }); //auth in system
export const createrAddCity = (payload) => ({ type: ADD_CITY, payload });
export const createrAddCitySeacrh = (payload) => ({ type: ADD_CITY_SEARCH, payload });
export const createrDeleteCity = (payload) => ({ type: DELETE_CITY, payload });

export const createrQuery = (payload = "") => ({ type: QUERY, payload }); // return '' if creater no params: else return city name
export const createrNewId = (payload) => ({ type: NEW_ID, payload });
