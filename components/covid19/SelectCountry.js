//React
import React from 'react';
//third-party
import {InputLabel,MenuItem,FormControl,Select} from '@material-ui/core';

const CountryPicker = ({handleCountryChange,countries,country}) => {

   
   
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 text-center">
            <FormControl className="material_ui-formControl">
                <InputLabel id="country">Select Country</InputLabel>
                <Select 
                id="country"
                value={country}
                onChange={(e) => handleCountryChange(e.target.value)}
                placeholder="Select country"
                >
                {
                    countries.map((country,index) => (
                        <MenuItem key={index} value={country} className="material_ui-menu">{country}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
            </div>
        </div>
    )
};

export default CountryPicker;