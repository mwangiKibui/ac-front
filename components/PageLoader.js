//React
import React from 'react';
//third-party
import {ClipLoader} from 'react-spinners';
import {css} from '@emotion/core';
//components
import Layout from './Layout';


const overide_css = css`
  display:block,
  margin:0 auto,
  border-color:rgb(19,38,57)
`;


const PageLoader = () => {
    return (
        <Layout>
            <div className="container">
               < div className="loader_container">
                        <div className="loader">
                            <ClipLoader 
                            css={overide_css}
                            size={40}
                            color={'#009933'}
                            />
                            <h2 className="loader_text">Please Wait</h2>
                        </div>
                    </div>
            </div>
        </Layout>
    )
};

export default PageLoader;