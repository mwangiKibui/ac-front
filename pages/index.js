//React
import React from 'react';

//third-party
import {connect} from 'react-redux';

//components
import Layout from '../components/Layout';
import Meta from '../partials/seo-meta';

//core-components
import BlockHome from '../components/blocks/BlockHome';
import BlockAds from '../components/blocks/BlockAds';
import BlockServices from '../components/blocks/BlockServices';
import {fetchProducts} from '../store/products';
import {loadServices} from '../store/services';
import {fetchHostels} from '../store/hostels';
import {loadInfluencers} from '../store/influencers';

//your scss styles
import '../styles/style.scss'

const   Default = (props) =>  {
        return (
            <Layout>

                <Meta image="https://karu-api.s3.amazonaws.com/adverts/1587206512007.webp"/>
                <BlockHome />
                <BlockAds products={props.products}/>
                <BlockServices services={props.services} />
                

            </Layout>
        )
    
};
Default.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let products = store.getState().products.basic;
    let services = store.getState().services.services;
    return {
        "products" : products,
        "services" : services
    };
};
export default connect()(Default);