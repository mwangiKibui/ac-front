import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN } from './types';


const initialState = {
    open: false,
    element: null,
};

export default function quickviewReducer(state = initialState, action) {
    switch(action.type){

        case QUICKVIEW_OPEN:
            return {
                ...state,
                open:true,
                element:action.payload
            }

        case QUICKVIEW_CLOSE:
            return {
                ...state,
                open:false
            }

        default:{
            return {
                ...state
            }
        }
    }
};