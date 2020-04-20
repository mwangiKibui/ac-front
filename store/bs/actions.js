import {BS_LOADING,BS_ERROR,LOAD_BS,BS_MESSAGE,REQUEST_ORDER,LOAD_MEALS,LOAD_DRINKS,LOAD_OFFERS} from './types';
import axios from 'axios';

const URL = `https://karuapi.herokuapp.com/api`;
const setLoading = () => {
    return {
        type:BS_LOADING
    }
};
const setError = data => {
    return {
        type:BS_ERROR,
        payload:data
    }
};
const setBs = data => {
    return {
        type:LOAD_BS,
        payload:data
    }
};
const setMessage = data => {
    return {
        type:BS_MESSAGE,
        payload:data
    }
};
const setRequest = data => {
    return {
        type:REQUEST_ORDER,
        payload:data
    }
};
const setMeals = data => {
    return {
        type:LOAD_MEALS,
        payload:data
    }
};
const setDrinks = data => {
    return {
        type:LOAD_DRINKS,
        payload:data
    }
};
const setOffers = data => {
    return {
        type:LOAD_OFFERS,
        payload:data
    }
};

export const fetchOvo = () => {
    //we are fetching ovo by their username
    const data = {username:'ovo_fries'};
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/bs/fetchBs`,data,{
            headers:{'Content-Type':'application/json'}
        })
        .then(response => {
            return dispatch(setBs(response.data.message));
        }).catch(console.log);
    }
};


//request for order
export const requestOrder = data => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/bs/addOrder`,data,{
            headers:{'Content-Type':'application/json'}
        })
        .then(response => {
            return dispatch(setRequest(response.data.message));
        }).catch(console.log);
    }
};
//leaving a review
export const sendReview = data => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/bs/addReview`,data,{
            headers:{'Content-Type':'application/json'}
        })
        .then(() => {
            return dispatch(setMessage(`Review sent`))
        }).catch(console.log);
    };
};

//change on the server side
//today is the night 
// we are going live

export const bsSub = (id,data) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/bs/addSubs/${id}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
           return dispatch(setMessage(response.data.message));
        }).catch(console.log);
    }
};

export const claimOrder = data => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/orders/claimOrder`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
            let result = response.data.success;
            
            if(!result) return dispatch(setError(response.data.message));
            
            return dispatch(setMessage(response.data.message));
        }).catch(console.log);
    }
};

//fetching products
export const fetchProducts = () => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/bs/products`)
        .then(response => {
            //we shall set the meals,drinks and the offers
            dispatch(setMeals(response.data.meals));
            dispatch(setDrinks(response.data.drinks));

            return dispatch(setOffers(response.data.offers));
        })
        .catch(console.log);
    };
};