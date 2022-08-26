const defaultValue = {
    id: 1,
    auth: false,
    query: "",
    error: ''
};

//constans
// input value
const QUERY = "QUERY";
const NEW_ID = "NEW_ID";
const AUTH = "AUTH";
const ERROR = 'ERROR'

export const reducerMain = (state = defaultValue, action) => {
    switch (action.type) {
        case NEW_ID:
            return { ...state, id: state.id + 1 };
        case QUERY: // add to redux inputLoginValue
            return { ...state, query: action.payload };
        case ERROR: // add to redux inputLoginValue
            return { ...state, error: action.payload };
        case AUTH: {
            let bool = action.payload === null ? false : true;
            return { ...state, auth: bool };
        }
        default:
            return state;
    }
};

export const createrAuth = (payload = null) => ({ type: AUTH, payload }); //auth in system
export const createrError = (payload = '') => ({ type: ERROR, payload }); //auth in system

export const createrQuery = (payload = "") => ({ type: QUERY, payload }); // return '' if creater no params: else return city name
export const createrNewId = (payload) => ({ type: NEW_ID, payload });
