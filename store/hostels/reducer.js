import {HOSTELS_FETCH,HOSTEL_FETCH,HOSTEL_LOADING,LOAD_REVIEWS,ADD_REVIEW,DELETE_REVIEW,RESET_HOSTEL_LOADING} from './types';

const initialState = {
    loading:false,
    hostels:[],
    hostel:{},
    reviews:[]
};

export default  (state=initialState,action) => {
    switch(action.type){
        case HOSTEL_LOADING:
            return {
                ...state,
                loading:true
            }
        case RESET_HOSTEL_LOADING:
            return {
                ...state,
                loading:false
            }
        case HOSTELS_FETCH:
            return {
                ...state,
                loading:false,
                hostels:action.payload
            }
        case HOSTEL_FETCH:
            return {
                ...state,
                loading:false,
                hostel:action.payload
            };
        case LOAD_REVIEWS:
            return {
                ...state,
                reviews:action.payload,
                loading:false
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews:[...state.reviews,action.payload],
                loading:false
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews:state.reviews.filter(review => review._id !== action.payload),
                loading:false
            }
        default:
            return {
                ...state
            }
    }
};