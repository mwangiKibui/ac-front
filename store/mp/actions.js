import {PRODUCTS_FETCH,PRODUCTS_LOADING} from './types';
import axios from 'axios';
const URL = `https://karuapi.herokuapp.com/api`;

const setLoading = () => {
    return {
        type:PRODUCTS_LOADING
    }
};
const setBasicProducts = data => {
    return {
        type:PRODUCTS_FETCH,
        payload:data
    }
};
export const fetchProductsBasic  = () => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/marketPlace/products/fetchBasic`).then((response) => {
            return dispatch(setBasicProducts(response.data.message));
        }).catch(console.log);
    };
};