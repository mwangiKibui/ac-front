//third-party
import axios from 'axios';
//components
import {SERVICES_LOADING,LOAD_ERROR,LOAD_SERVICE,LOAD_SERVICES,LOAD_MESSAGE,
        LOAD_USER_SERVICES,DELETE_SERVICE,ADD_REVIEW,LOAD_REVIEWS,DELETE_REVIEW,
        SET_OFF_SERVICES_LOADING} from './types';

const URL = `https://karuapi.herokuapp.com/api`;

const setLoading = () => {
    return {
        type:SERVICES_LOADING
    }
};
const setOffLoading = () => {
    return {
        type:SET_OFF_SERVICES_LOADING
    }
}
const setError = data => {
    return {
        type:LOAD_ERROR,
        payload:data
    }
};

const setMessage = data => {
    return  {
        type:LOAD_MESSAGE,
        payload:data
    }
}

const setService = data => {
    return {
        type:LOAD_SERVICE,
        payload:data
    }
};

const setServices = data => {
    return {
        type:LOAD_SERVICES,
        payload:data
    }
};

const setUserServices = data => {
    return {
        type:LOAD_USER_SERVICES,
        payload:data
    }
};

const deleteService = data => {
    return {
        type:DELETE_SERVICE,
        payload:data
    }
};

const setReviews = data => {
    return {
        type:LOAD_REVIEWS,
        payload:data
    }
};

const addReview = data => {
    return {
        type:ADD_REVIEW,
        payload:data
    }
};

const deleteReview = data => {
    return {
        type:DELETE_REVIEW,
        payload:data
    }
}

export const  loadServices = () => {
    return async dispatch => {
        dispatch(setLoading());

        await axios.get(`${URL}/services/fetchServices`).then(response => {
            return dispatch(setServices(response.data.message));
        }).catch(console.log);

    }
};

//loading a specific service
export const loadService = (slug) => {
    return async dispatch => {
        dispatch(setLoading());

        await axios.get(`${URL}/services/fetchService/${slug}`).then(response => {
            return dispatch(setService(response.data.message));
        }).catch(console.log);

    }
};

//Push a service
export const pushService = data => {

    return async dispatch => {
        dispatch(setLoading());

        await axios.post(`${URL}/services/addService`,data,{
            headers:{'Content-Type':'application/form-data'}
        }).then((response) => {

            let success = response.data.success;
            if(!success) return dispatch(setError(response.data.message));
            return dispatch(setMessage(response.data.message));

        }).catch(console.log);
    };

};

//fetching user specific services
export const fetchUserServices = _id => {

    return async dispatch => {
        dispatch(setLoading());

        await axios.get(`${URL}/services/${_id}`).then(response => {
            return dispatch(setUserServices(response.data.message));
        }).catch(console.log);
    }
};

//updating a service
export const updateService = (data,_id) => {

    return async  dispatch => {
        dispatch(setLoading());

        await axios.post(`${URL}/services/update/${_id}`,data,{
            headers:{'Content-Type':'application/form-data'}
        }).then(response => {
            let success = response.data.success;
            if(!success) return dispatch(setError(response.data.message));
            return dispatch(setMessage(response.data.message));
        });
    }
};


//deleting a service
export const pullService = (_id) => {
    
    return async dispatch => {

        dispatch(setLoading());
        await axios.delete(`${URL}/services/delete/${_id}`).then(() => {
            return dispatch(deleteService(_id))
        }).catch(console.log);

    }
};

//loading the reviews
export const loadReviews = data => {
    return async dispatch => {
        dispatch(setLoading());
        return dispatch(setReviews(data));
    }
};

//pushing a review
export const pushReview = (data,slug,added_review) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/services/addReview/${slug}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then((response) => {
            dispatch(setService(response.data.message));
            return dispatch(addReview(added_review))
        }).catch(console.log);
    }
};

//deleting a review
export const pullReview = (slug,reviewId) => {
    const data = {review:reviewId};
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/services/deleteReview/${slug}`,data).then(
            (response) => {
            dispatch(deleteReview(reviewId));
            return dispatch(setService(response.data.message))
        }).catch(console.log);
    }
};

//adding views for a service
export const addServiceViews = slug => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/services/addViews/${slug}`,null,{
            headers:{'Content-Type':'application/json'}
        }).then(() => {
            return dispatch(setOffLoading());
        }).catch(console.log);
    }
}