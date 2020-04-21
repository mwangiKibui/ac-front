import axios from 'axios';
import {CATEGORIES_FETCH,CATEGORIES_LOADING} from './types';
const URI = `https://karuapi.herokuapp.com/api/`;

const load_categories = (data) => {
    return {
        type:CATEGORIES_FETCH,
        payload:data
    }
};

const setLoading = () => {
    return {
        type:CATEGORIES_LOADING
    }
}

export const fetchCategories = () => {
    return async dispatch => {
         dispatch(setLoading());
         await axios.get(`${URI}/prodCategories/fetchProdCategories`).then(result => {
             let data = result.data.message;
             return dispatch(load_categories(data));
         }).catch(console.log);
    }
}