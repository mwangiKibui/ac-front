import {combineReducers} from 'redux';

//custom reducers
import hostelReducer from './hostels';
import mpReducer from './mp';

export default combineReducers({
    hostels:hostelReducer,
    mp:mpReducer
});