import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerNoAuth } from "./reducer/reducerNoAuth";
// import { reducerMain } from './reducer/reducerMain'
import {reducerForecast} from './reducer/reducerForecast'
import { reducerAuth } from "./reducer/reducerAuth";
import { reducerMain } from "./reducer/reducerMain";

const reducers = combineReducers({
    auth: reducerAuth,
    noAuth: reducerNoAuth,
    forecast: reducerForecast,
    main: reducerMain
});
export const store = createStore(reducers, applyMiddleware(thunk));
