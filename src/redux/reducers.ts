import { combineReducers } from "redux";
import { citiesReducer } from './citiesReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,

});

export default rootReducer;
export type RootState = ReturnType <typeof rootReducer>;