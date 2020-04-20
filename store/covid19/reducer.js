import {LOADING,LOAD_COUNTRIES,CONFIRMED,RECOVERED,DEATHS,LAST_UPDATE} from './types';

const initialState = {
    loading:false,
    countries:[],
    confirmed:{},
    recovered:{},
    deaths:{},
    last_update:''
};

export default (state=initialState,action) => {
    switch(action.type){

        case LOADING:
            return {
                ...state,
                loading:true
            };

        case LOAD_COUNTRIES:
            return {
                ...state,
                countries:action.payload,
                loading:false
            };

        case CONFIRMED:
            return {
                ...state,
                confirmed:action.payload,
            };
        
        case RECOVERED:
            return {
                ...state,
                recovered:action.payload,
            };

        case DEATHS:
            return {
                ...state,
                deaths:action.payload,
            };
        
        case LAST_UPDATE:
            return {
                ...state,
                last_update:action.payload,
                loading:false
            };
            
        default:
            return {
                ...state
            }
    }
}