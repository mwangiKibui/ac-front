import {HOSTELS_FETCH,HOSTELS_LOADING,HOSTEL_LOAD,HOSTEL_ERROR} from './types';
import axios from 'axios'
const URL = `https://karuapi.herokuapp.com/api`;


const setLoading = () => {
    return {
        type:HOSTELS_LOADING
    }
};
const setHostels = data => {
    return {
        type:HOSTELS_FETCH,
        payload:data
    }
};
const setHostel = data => {
    return {
        type:HOSTEL_LOAD,
        payload:data
    }
};
const setError = data => {
    return {
        type:HOSTEL_ERROR,
        payload:data
    }
}
export const fetchHostels = () => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/hostels/fetchHostels`).then((response) => {
            return dispatch(setHostels(response.data.message))
        }).catch(console.log);
    }
};
export const fetchHostel = slug => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/hostels/${slug}`).then(response => {
            let success = response.data.success;
            if(!success) return dispatch(setError(response.data.message));
            return dispatch(setHostel(response.data.message));
        })
    }
}