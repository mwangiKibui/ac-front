import {SERVICES_LOADING,LOAD_SERVICE,LOAD_SERVICES,LOAD_ERROR,LOAD_MESSAGE,
        LOAD_USER_SERVICES,DELETE_SERVICE,LOAD_REVIEWS,ADD_REVIEW,DELETE_REVIEW,
        SET_OFF_SERVICES_LOADING} from './types';

const initialState = {
    loading:false,
    error:'',
    services:[],
    service:{},
    user_services:[],
    message:'',
    reviews:[]
};

export default (state=initialState,action) => {
    switch(action.type){

        case SERVICES_LOADING:
            return {
                ...state,
                error:'',
                loading:true
            }
        case SET_OFF_SERVICES_LOADING:
            return {
                ...state,
                loading:false
            }
        case LOAD_SERVICES:
            return {
                ...state,
                services:action.payload,
                loading:false
            };

        case LOAD_SERVICE:
            return {
                ...state,
                service:action.payload,
                loading:false
            };
        
        case LOAD_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            };
            
        case LOAD_MESSAGE:
            return {
                ...state,
                message:action.payload,
                loading:false
            }
        
        case LOAD_USER_SERVICES:
            return {
                ...state,
                user_services:action.payload,
                loading:false
            };

        case DELETE_SERVICE:
            return {
                ...state,
                services:state.services.filter((service) => service._id !== action.payload),
                user_services:state.user_services.filter((service) => service._id !== action.payload),
                loading:false
            };

        case LOAD_REVIEWS:
            return {
                ...state,
                reviews:action.payload,
                loading:false
            };
        
        case DELETE_REVIEW:
            return {
                ...state,
                reviews:state.reviews.filter(review => review._id !== action.payload),
                
            };

        case ADD_REVIEW:
            return {
                ...state,
                reviews:[...state.reviews,action.payload],
                loading:false
            };
        
        default:
            return {
                ...state
            };
        
    }
};
