import {BS_LOADING,BS_ERROR,LOAD_BS,BS_MESSAGE,REQUEST_ORDER,LOAD_MEALS,LOAD_DRINKS,LOAD_OFFERS} from './types';

const initialState = {
    loading:false,
    error:'',
    message:'',
    bs:null,
    meals:[],
    drinks:[],
    offers:[]
};

export default  (state=initialState,action) => {
    switch(action.type){
        case BS_LOADING:
            return {
                ...state,
                error:'',
                message:'',
                loading:true
            }
        case BS_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case LOAD_BS:
            return {
                ...state,
                loading:false,
                bs:action.payload
            }
        case BS_MESSAGE:
            return {
                ...state,
                loading:false,
                message:action.payload
            }        
        case REQUEST_ORDER:
            return {
                ...state,
                loading:false,
                message:action.payload
            }
        case LOAD_MEALS:
            return {
                ...state,
                meals:action.payload
            }
        case LOAD_DRINKS:
            return {
                ...state,
                drinks:action.payload
            }
        case LOAD_OFFERS:
            return {
                ...state,
                offers:action.payload,
                loading:false
            }       
        default:
            return {
                ...state
            }
    }
};