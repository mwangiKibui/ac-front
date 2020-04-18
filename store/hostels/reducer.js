import {HOSTELS_LOADING,HOSTELS_FETCH,HOSTEL_LOAD,HOSTEL_ERROR} from './types';

const initialState = {
    hostels:[],
    loading:false,
    hostel:{},
    error:''
};

export default (state=initialState,action ) => {
    switch(action.type){

        case HOSTELS_LOADING:
            return {
                ...state,
                loading:true
            }

        case HOSTELS_FETCH:
            return {
                ...state,
                hostels:action.payload,
                loading:false                
            }

        case HOSTEL_LOAD:
            return {
                ...state,
                hostel:action.payload,
                loading:false
            }

        case HOSTEL_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
            
        default:
            return {...state}
    }
}