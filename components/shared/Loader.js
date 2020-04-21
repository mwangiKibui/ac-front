//React
import React from 'react';

//third-party
import {ClipLoader} from 'react-spinners';
import {css} from '@emotion/core';

const overide_css = css`
  display:block,
  margin:0 auto,
  border-color:rgb(19,38,57)
`;


const Loader = ({loading}) => {
    return (
        <div className="loader_container">
            <div className="loader_inner">
                <div className="loader">
                    <ClipLoader 
                    css={overide_css}
                    size={40}
                    color={'#009933'}
                    loading={loading}
                    />
                    <h2 className="loader_text">allcomrades</h2>
                </div>
            </div>
        </div>
    )
};
export default Loader;