import { PRODUCT_FETCH,PRODUCTS_FETCH,PRODUCT_LOADING,PRODUCT_ERROR,
    MESSAGE_LOAD,PRODUCT_DELETE,OPEN_TOGGLER,CLOSE_TOGGLER,PREMIUM_LOAD,
    LOAD_USER_PRODUCTS,LOAD_REVIEWS,ADD_REVIEW,DELETE_REVIEW,SET_OFF_PRODUCT_LOADING
  } from './types';

const initialState = {
    loading:false,
    basic:[],
    success:null,
    message:'',
    error:'',
    product:{},
    toggle:false,
    premium:[],
    user_products:[],
    reviews:[]
}

export default  (state=initialState,action) => {
switch(action.type){
   case PRODUCT_LOADING:
       return {
           ...state,
           error:'',
           loading:true
       }
   case SET_OFF_PRODUCT_LOADING:
       return {
           ...state,
           loading:false
       }
   case PRODUCT_ERROR:
       return {
           ...state,
           loading:false,
           success:false,
           error:action.payload
       }
   case MESSAGE_LOAD:
       return {
           ...state,
           loading:false,
           success:true,
           error:'',
           message:action.payload
       }
   case PRODUCTS_FETCH:
       console.log('being called')
       return {
           ...state,
           loading:false,
           success:true,
           basic:action.payload
       }
   case PRODUCT_FETCH:
       return {
           ...state,
           loading:false,
           success:true,
           product:action.payload
       }
   case PRODUCT_DELETE:
       return {
           ...state,
           loading:false,
           basic:state.basic.filter(product => product._id !== action.payload),
           user_products:state.user_products.filter(product => product._id !== action.payload)
       }
   case OPEN_TOGGLER:
       return {
           ...state,
           toggle:true
       }
   case CLOSE_TOGGLER:
       return {
           ...state,
           toggle:false
       }
   case PREMIUM_LOAD:
       return {
           ...state,
           premium:action.payload,
           loading:false
       }
   case LOAD_USER_PRODUCTS:
       return {
           ...state,
           user_products:action.payload,
           loading:false
       }
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