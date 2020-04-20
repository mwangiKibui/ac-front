import React from 'react';
//core-components
import Head from 'next/head';
import Navbar from '../components/header/navbar';
import Footer from '../components/footer';
//css has to be imported here
import '../styles/style.scss';

const Layout = (props) => {
    return (

        <div className="site">
            <Head>
                <title>allcomrades</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            </Head>
            <div className="site__body">
            <Navbar />
            <>
                {
                    props.children
                }
            </>  
            </div>
            <div className="site__footer">
            <Footer />
            </div>
        </div>
    )
};
export default Layout;