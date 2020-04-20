import {INFLUENCER_LOADING,LOAD_INFLUENCERS,LOAD_SPEC_INFLUENCER} from './types';

const initialState = {
    loading:false,
    influencers:[],
    influencer:{}
};

export default (state=initialState,action ) => {
    switch(action.type){
        case INFLUENCER_LOADING:
            return {
                ...state,
                loading:true
            }
        case LOAD_INFLUENCERS:
            return {
                ...state,
                influencers:action.payload,
                loading:false
            }
        case LOAD_SPEC_INFLUENCER:
            
            return {
                ...state,
                influencer:action.payload,
                loading:false
            }
        default:
            return {
                ...state
            }
    }
}