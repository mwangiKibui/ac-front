import {INFLUENCER_LOADING,LOAD_INFLUENCERS,LOAD_SPEC_INFLUENCER} from './types';
import axios from 'axios';
const URL = `https://karuapi.herokuapp.com/api/`;

const setLoading = () => {
    return {
        type:INFLUENCER_LOADING
    }
};

const setInfluencers = data => {
    return {
        type:LOAD_INFLUENCERS,
        payload:data
    }
};

const setInfluencer = data => {
    return {
        type:LOAD_SPEC_INFLUENCER,
        payload:data
    }
};

//load influencers
export const loadInfluencers = ( ) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/influencers/getInfluencers`)
        .then(data => dispatch(setInfluencers(data.data.message)))
        .catch(console.log);
    }
};

//fetch an influencer
export const fetchInfluencer = name => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.get(`${URL}/influencers/${name}`)
        .then(data => dispatch(setInfluencer(data.data.message)))
        .catch(console.log);
    }
};

//vote for an influencer
export const vote = (influencer,data) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/influencers/vote/${influencer}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(data => {
            console.log(`data received`,data.data.message)
           return  dispatch(setInfluencer(data.data.message))})
        .catch(console.log);
    }
};

//adding a comment for an influencer
export const comment = (name,data) => {
    return async  dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/influencers/comment/${name}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
            return dispatch(setInfluencer(response.data.message));
        }).catch(console.log);
    }
};

//following an influencer
export const followInfluencer = (data,slug) => {
    return async dispatch => {
        dispatch(setLoading());
        await axios.post(`${URL}/influencers/follow/${slug}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
            return dispatch(setInfluencers(response.data.message));
        }).catch(console.log);
    }
}