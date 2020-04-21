import {CATEGORIES_FETCH,CATEGORIES_LOADING} from './types';

const initialState = {
    loading:false,
    categories:[]
};

export default  (state=initialState,action) => {
    switch(action.type){
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading:true
            }
        case CATEGORIES_FETCH:
            return {
                ...state,
                loading:false,
                categories:action.payload
            }
        default:
            return {
                ...state
            }
    }
};