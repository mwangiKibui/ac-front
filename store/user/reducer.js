import {USER_FETCH,USER_SIGNUP,USER_LOGIN_ERROR,
        USER_SIGNUP_ERROR,USER_LOADING,USER_LOGOUT,USER_MESSAGE,
        RECOVERY_ERROR,LOAD_SEARCHED_USER,SET_TOKEN,LOAD_SEARCHED_USER_PRODUCTS,
        LOAD_SEARCHED_USER_SERVICES} from './types';

const initialState = {
    loading:false,
    message:'',
    token:'',
    success:false,
    user:{},
    searched_user:{},
    searched_user_products:[],
    searched_user_services:[],
    error:''
};

export default (state=initialState,action) => {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,                
                error:'',
                loading:true
            }
        case USER_FETCH:
            return {
                ...state,
                loading:false,
                error:'',
                user:action.payload
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading:false,
                success:false,
                message:'',
                error:action.payload
            }
        case USER_MESSAGE:
            return {
                ...state,
                loading:false,
                error:'',
                message:action.payload
            }
        case RECOVERY_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case USER_SIGNUP_ERROR:
            return {
                ...state,
                loading:false,
                success:false,
                error:action.payload
            }
        case USER_SIGNUP:
            return {
                ...state,
                loading:false,
                success:true,
                error:'',
                message:action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loading:false,
                error:'',
                token:'',
                user:null
            }
        case LOAD_SEARCHED_USER:
            return {
                ...state,
                searched_user:action.payload,
                loading:false                
            }
        case SET_TOKEN:
            return {
                ...state,
                token:action.payload,
                loading:false
            }
        case LOAD_SEARCHED_USER_SERVICES:
            return {
                ...state,
                searched_user_services:action.payload,
                loading:false
            }
        case LOAD_SEARCHED_USER_PRODUCTS:
            return {
                ...state,
                searched_user_products:action.payload,
                loading:false
            }
        default:
            return {
                ...state
            }
    }
};