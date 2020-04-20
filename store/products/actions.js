
import { PRODUCT_FETCH,PRODUCTS_FETCH,PRODUCT_LOADING,MESSAGE_LOAD,PRODUCT_ERROR,
    PRODUCT_DELETE,OPEN_TOGGLER,CLOSE_TOGGLER,PREMIUM_LOAD,LOAD_USER_PRODUCTS,
   LOAD_REVIEWS,ADD_REVIEW,DELETE_REVIEW,SET_OFF_PRODUCT_LOADING } from './types';

import axios from 'axios';
const URL = 'https://karuapi.herokuapp.com/api/';

const setLoading = () => {
return {
   type:PRODUCT_LOADING
};
};
const setOffLoading = () => {
return {
   type:SET_OFF_PRODUCT_LOADING
}
}
const messageLoad = data => {
return {
   type:MESSAGE_LOAD,
   payload:data
};
};
const loadProducts = (data) => {
return {
   type: PRODUCTS_FETCH,
   payload: data
};
};
const loadProduct = data => {
return {
   type:PRODUCT_FETCH,
   payload:data
}
};
const setError = data => {
return {
   type:PRODUCT_ERROR,
   payload:data
}
};
const productDelete = data => {
return {
   type:PRODUCT_DELETE,
   payload:data
}
};
const setPremium = data => {
return {
   type:PREMIUM_LOAD,
   payload:data
}
};
const setUserProducts = data => {
return {
   type:LOAD_USER_PRODUCTS,
   payload:data
}
};
//loading reviews
const setReviews = data => {
return {
   type:LOAD_REVIEWS,
   payload:data
}
};
//adding reviews
const addReview = data => {
return {
   type:ADD_REVIEW,
   payload:data
}
};
//deleting reviews
const deleteReview = data => {
return {
   type:DELETE_REVIEW,
   payload:data
}
}
export const openToggle = () => {
return {
   type:OPEN_TOGGLER
}
};
export const closeToggle = () => {
return {
   type:CLOSE_TOGGLER
}
};

//this is for the marketplace view for all users
export const fetchProducts = () => {
   return async  dispatch => {
      dispatch(setLoading());
      await axios.get(`${URL}/marketPlace/products/fetchBasic`).then(result => {
         return dispatch(loadProducts(result.data.message))
      }).catch(console.log);
   }
};

//this is for the user dashboard.
export const fetchUserStock = (_id) => {
   return async dispatch => {
      dispatch(setLoading());
      await axios.get(`${URL}/marketPlace/products/${_id}`).then(result => {
         return dispatch(setUserProducts(result.data.message))
      }).catch(console.log);
   }
}

//fetching a specific product
export const fetchProduct = (slug) => {
   return async dispatch => {
   dispatch(setLoading());
   await axios.get(`${URL}/marketPlace/product/fetchProduct/${slug}`).then(result => {
      return dispatch(loadProduct(result.data.message));
   }).catch(console.log);
   }
};



export const updateProduct = (data,_id) => {

return async dispatch => {
   dispatch(setLoading());
   await axios.put(`${URL}/marketPlace/updateProduct/${_id}`,data,{
       headers:{'Content-Type':'multipart/form-data'}
   }).then(result => {
     return dispatch(loadProduct(result.data.message))
   }).catch(console.log);
}
};

//loading the premiums.
export const fetchPremiums = () => {

return async dispatch => {
   dispatch(setLoading());
   await axios.get(`${URL}/marketPlace/products/fetchPremium`)
   .then(result => {
       console.log('result from premium', result.data.message)
       return dispatch(setPremium(result.data.message));
   }).catch(console.log);

};

}

//uploading a product --> whenever you add a product return it
export const uploadProduct = (data) => { 
   return async dispatch => {

      dispatch(setLoading());
      await axios.post(`${URL}/marketPlace/product/addProduct`,data,{
         headers:{'Content-Type':'multipart/form-data'}
      }).then(result => {
         let response = result.data.success;
         if(!response) return dispatch(setError(result.data.message));
         return dispatch(messageLoad(result.data.message));
      }).catch(console.log);

   }
};

//deleting a specific product

export const deleteProduct = (_id) => {
   return  async dispatch => {
      dispatch(setLoading());
      await axios.delete(`${URL}/marketPLace/deleteProduct/${_id}`).then( () => {
         return dispatch(productDelete(_id));
      }).catch(console.log);
   }
};

//loading the reviews
export const loadReviews = data => {
   return async dispatch => {
      dispatch(setLoading());
      return dispatch(setReviews(data));
   };
};

//adding a review
export const pushMpReview = (data,slug,added_review) => {
   return async dispatch => {
      dispatch(setLoading());
      await axios.post(`${URL}/marketPlace/addReview/${slug}`,data,{
         headers:{'Content-Type':'application/json'}
      }).then((response) => {

         dispatch(loadProduct(response.data.message));
         return dispatch(addReview(added_review));

      }).catch(console.log);
   };
};

//deleting a review
export const pullMpReview = (slug,review) => {
   let data = {review};
   return async dispatch => {
      dispatch(setLoading());
      await axios.post(`${URL}/marketPlace/products/deleteReview/${slug}`,data,{
         headers:{'Content-Type':'application/json'}
      }).then((response) => {

         dispatch(loadProduct(response.data.message));
         return dispatch(deleteReview(review));

      }).catch(console.log);
   };
};

//adding the product views
export const addProductViews = (slug) => {
   return async dispatch => {
      dispatch(setLoading());
      await axios.post(`${URL}/marketPlace/addViews/${slug}`,null,{
         headers:{'Content-Type':'application/json'}
      }).then(() => {
         return dispatch(setOffLoading());
      }).catch(console.log);
   };
};

//setting a product off stock
export const updateStock = slug => {
   return async dispatch => {
      dispatch(setLoading());
      await axios.put(`${URL}/marketPlace/updateStock`,{slug},{
         headers:{'Content-Type':'application/json'}
      }).then(() => {
         return dispatch(setOffLoading());
      }).catch(console.log);
   };
};