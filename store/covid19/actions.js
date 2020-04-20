import {LOADING,LOAD_COUNTRIES,CONFIRMED,RECOVERED,DEATHS,LAST_UPDATE} from './types';
import axios from 'axios';

const URL = `https://covid19.mathdro.id/api`;

const setLoading = () => {
    return {
        type:LOADING
    }
};
const setCountries = data => {
    return {
        type:LOAD_COUNTRIES,
        payload:data
    }
};
const setConfirmed = data => {
    return {
        type:CONFIRMED,
        payload:data
    }
};
const setRecovered = data => {
    return {
        type:RECOVERED,
        payload:data
    }
};
const setDeaths = data => {
    return {
        type:DEATHS,
        payload:data
    }
};
const setLastUpdate = data => {
    return {
        type:LAST_UPDATE,
        payload:data
    }
}
//fetching spec data
export const fetchData =  (country) => {

    return async dispatch => {
    dispatch(setLoading());
    let changeableUrl = URL;
    //if a country
    if(country){
        changeableUrl = `${URL}/countries/${country}`;
    };
    //the data format to get 
    await axios.get(changeableUrl).then((response) => {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = response;
        dispatch(setConfirmed(confirmed));
        dispatch(setRecovered(recovered));
        dispatch(setDeaths(deaths));
        return dispatch(setLastUpdate(lastUpdate));        
    });
    }
    
};

//fetching countries data
export const fetchcountries = () => {

    return async dispatch => {
        dispatch(setLoading());

        await axios.get(`${URL}/countries`).then((response) => {
            let {data:{countries}} = response;
            countries = countries.map((country) => country.name);
            return dispatch(setCountries(countries));
        })
        .catch(console.log);
    };
};

