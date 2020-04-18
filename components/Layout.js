import React from 'react';
//core-components
import Head from 'next/head';
//css has to be imported here
import '../styles/styles.scss';

const Layout = (props) => {
    return (

        <div className="component">
            <Head>
                <title>allcomrades</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            </Head>
            <div className="container">
                {
                    props.children
                }
            </div>            
        </div>
    )
};
export default Layout;