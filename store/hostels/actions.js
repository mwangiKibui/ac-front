import {HOSTELS_FETCH,HOSTEL_FETCH,HOSTEL_LOADING,LOAD_REVIEWS,ADD_REVIEW,DELETE_REVIEW,RESET_HOSTEL_LOADING} from './types';

import axios from 'axios';
const URL = `https://karuapi.herokuapp.com/api/`;

const load_hostels = (data) => {
    return {
        type:HOSTELS_FETCH,
        payload:data
    }
};

const load_hostel = (data) => {
    return {
        type:HOSTEL_FETCH,
        payload:data
    }
};
const setLoading = () => {
    return {
        type:HOSTEL_LOADING
    }
};

const resetLoading = () => {
    return {
        type:RESET_HOSTEL_LOADING
    }
}

//setting the reviews
const setReviews = data => {
    return {
        type:LOAD_REVIEWS,
        payload:data
    }
};
//adding a single review
const addReview = data => {
    return {
        type:ADD_REVIEW,
        payload:data
    }
};
//deleting review
const deleteReview = data  => {
    return {
        type:DELETE_REVIEW,
        payload:data
    }
};

export const fetchHostels = () => {
     return async dispatch => {
         dispatch(setLoading());
         await axios.get(`${URL}/hostels/fetchHostels`).then(result => {
             return dispatch(load_hostels(result.data.message))
         }).catch(console.log);
     }
};

export const fetchSpecificHostel = (slug) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/hostels/${slug}`).then(result => {
              return dispatch(load_hostel(result.data.message))
        }).catch(console.log);
    }
};

//loading the reviews
export const loadReviews = data => {
    return async dispatch => {
        dispatch(setLoading());
        return dispatch(setReviews(data))
    }
};

//adding a review
export const pushHostelReview = (data,slug,added_review) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/hostels/addReview/${slug}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then((response) => {

            dispatch(load_hostel(response.data.message));
            return dispatch(addReview(added_review));

        }).catch(console.log);
    }
};

//removing a review
export const pullHostelReview = (slug,review) => {
    let data = {review};
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/hostels/deleteReview/${slug}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then((response) => {

            dispatch(load_hostel(response.data.message));
            return dispatch(deleteReview(review));
            
        }).catch(console.log);
    }
};

//adding views
export const addHostelView = (slug) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/hostels/addViews`,{slug},{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
            let success = response.data.success;
            if(success) return dispatch(resetLoading());
        }).catch(console.log);
    }
}