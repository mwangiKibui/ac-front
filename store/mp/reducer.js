import {PRODUCTS_FETCH,PRODUCTS_LOADING} from './types';

const initialState = {
    loading:false,
    products:[]
};

export default (state=initialState,action) => {
    switch(action.type){
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading:true
            };
        case PRODUCTS_FETCH:
            return {
                ...state,
                products:action.payload,
                loading:false
            }
        default:
            return {...state}
    }
}