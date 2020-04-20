import {combineReducers} from 'redux';

//custom reducers
import hostelReducer from './hostels';
import productsReducer from './products';
import userReducer from './user';
import mobileMenuReducer from './mobile-menu';
import quickViewReducer from './quickview';
import servicesReducer from './services';
import influencersReducer from './influencers';
import covid19Reducer from './covid19';
import bsReducer from './bs';

export default combineReducers({
    hostels:hostelReducer,
    products:productsReducer,
    user:userReducer,
    mobileMenu:mobileMenuReducer,
    quickview:quickViewReducer,
    services:servicesReducer,
    influencers:influencersReducer,
    covid19:covid19Reducer,
    bs:bsReducer
});