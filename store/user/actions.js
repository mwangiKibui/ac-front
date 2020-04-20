import {USER_FETCH,USER_SIGNUP,USER_LOGIN_ERROR,USER_SIGNUP_ERROR,
        USER_LOADING,USER_LOGOUT, USER_MESSAGE,RECOVERY_ERROR,LOAD_SEARCHED_USER,SET_TOKEN,
        LOAD_SEARCHED_USER_PRODUCTS,LOAD_SEARCHED_USER_SERVICES} from './types';
import axios from 'axios';
const URL = `http://karuapi.herokuapp.com/api/`;

const load_user = (data) => {
     return {
         type:USER_FETCH,
         payload:data
     }
};
const login_error = data => { //showing the error
     return {
         type:USER_LOGIN_ERROR,
         payload:data
     }
}
const logout = () => {
    return {
        type:USER_LOGOUT
    }
}
const signup_error = data => { //the signup error
      return {
          type:USER_SIGNUP_ERROR,
          payload:data
      }
};
const signup = data => { 
      return {
          type:USER_SIGNUP,
          payload:data
      }
};
const loading  = () => {
      return {
          type:USER_LOADING
      }
};
const setMessage = (data) => {
    return {
        type:USER_MESSAGE,
        payload:data
    }
};
const setToken = (data) => {
    return {
        type:SET_TOKEN,
        payload:data
    }
};
const setError = data => {
    return {
        type:RECOVERY_ERROR,
        payload:data
    }
};
const loadSearchedUser = data => {
    return {
        type:LOAD_SEARCHED_USER,
        payload:data
    };
};  
const loadSearchedUserProducts = data => {
    return {
        type:LOAD_SEARCHED_USER_PRODUCTS,
        payload:data
    }
};
const loadSearchedUserServices = data => {
    return {
        type:LOAD_SEARCHED_USER_SERVICES,
        payload:data
    }
};
//decode the token

export const fetchUser = (token) => {
    return async dispatch => {
        
            await axios.post(`${URL}/users/decodeToken`,null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(result => {
                return dispatch(load_user(result.data.message))
            })                
        .catch(console.log);
    }
};

//login user

export const user_login = (data) => {
    return async  dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/users/login`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(result => {
            
            console.log('result we are getting',result.data.message)
            let response = result.data.success;
            if(!response){
                return dispatch(login_error(result.data.message))
            };
            return dispatch(setToken(result.data.message))
        }).catch(console.log)
    }
};

//provider user login

export const provider_userlogin = data => {
    return async dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/users/provider_login`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(result => {
            let response = result.data.success;
            if(!response) return dispatch(login_error(result.data.message));
            return dispatch(setToken(result.data.message));
        }).catch(console.log);
    };
};

//signup user

export const user_signup = (data) => {
    return async dispatch => {        
        dispatch(loading());
        await axios.post(`${URL}/users/signup`, data, {
            headers: { 'Content-Type': 'application/json' }
        }).then(result => {
            if (!result.data.success) {
                return dispatch(signup_error(result.data.message))
            };
            //this is the message
            console.log('the message',result.data.message)
            return dispatch(signup(result.data.message));
        }).catch(console.log);
    }
};

//provider signup
export const provider_usersignup = data => {
    return async dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/users/provider_signup`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(result => {
            let response = result.data.success;
            if(!response) return dispatch(signup_error(result.data.message));
            return dispatch(setToken(result.data.message));
        }).catch(console.log);
    };
};

//logout the user
export const user_logout = () => {
    return async dispatch => {
        dispatch(loading());
        return dispatch(logout())
    }
}

//updating the user
export const update_user_details = (data,_id) => {
    return async dispatch => {
        dispatch(loading());
        await axios.put(`${URL}/users/updateDetails/${_id}`,data).then(result => {
            console.log(`the result `,result)
            return dispatch(load_user(result.data.message))
        }).catch(console.log);
    }
};

//updating a profile pic
export const update_profile = (data,_id) => {
    return async dispatch => {
        dispatch(loading());
        await axios.put(`${URL}/users/updateProfile/${_id}`,data,{
           headers:{'Content-Type':'multipart/form-data'}
        }).then(result => {
           return dispatch(load_user(result.data.message))
        }).catch(console.log);
    }
};

//recovering an account -- this shall return either an error, or a message
export const recover_account = data => {
    return async dispatch => {

        dispatch(loading());

        await axios.post(`${URL}/users/recover_account`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(result => {
            
            let response = result.data.success;

            if(!response) return dispatch(setError(result.data.message));

            return dispatch(setMessage(result.data.message));

        }).catch(console.log);
    }
};

//setting new password --- this shall return a message
export const reset_password = (data,slug) => {
    return async dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/users/reset_password/${slug}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(result => {
            return dispatch(setMessage(result.data.message))
        }).catch(console.log);
    }
};

//following a club
export const follow_club = (user_id,club_id) => {
    return async dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/clubs/follow/${club_id}`,{
            user_id
        },{
            headers:{'Content-Type':'application/json'}
        }).then(
            result => {
                //we set the new user who has followed the club
                return dispatch(load_user(result.data.message));
            }
        ).catch(console.log);
    }   
};

//searching user by id --- update on the db
export const fetchUserById = _id => {
    return async dispatch => {
        dispatch(loading());
        await axios.get(`${URL}/users/spec_user/${_id}`)
        .then(response => {
            let result = response.data.success;
            if(!result) return dispatch(setError(response.data.message))
            //we have the user,products and services of that user
            dispatch(loadSearchedUserProducts(response.data.products));
            dispatch(loadSearchedUserServices(response.data.services));
            return dispatch(loadSearchedUser(response.data.user));
        }).catch(console.log);
    };
};

//subscribing to another users profile
export const subscribe = (data,_id) => {
    return async dispatch => {
        dispatch(loading());
        await axios.post(`${URL}/users/subscribe/${_id}`,data,{
            headers:{'Content-Type':'application/json'}
        }).then(response => {
            let success = response.data.success;
            if(!success) return dispatch(setError('already subscribed'))
            return dispatch(loadSearchedUser(response.data.message));
        }).catch(console.log);
    }
}