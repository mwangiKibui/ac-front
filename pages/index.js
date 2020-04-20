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
import BlockHostels from '../components/blocks/BlockHostels';
import BlockAd from '../components/blocks/BlockAd';
import BlockCovid from '../components/blocks/BlockCovid';
import BlockInfluencers from '../components/blocks/BlockInfluencers';
import BlockSellers from '../components/blocks/BlockSellers';
import {fetchProducts,fetchPremiums} from '../store/products';
import {loadServices} from '../store/services';
import {fetchHostels} from '../store/hostels';
import {loadInfluencers} from '../store/influencers';

//your scss styles
import '../styles/style.scss'

const  Default = (props) => {
        return (
            <Layout>

                <Meta image="https://karu-api.s3.amazonaws.com/adverts/1587206512007.webp"/>
                <BlockHome />
                <BlockAds products={props.products}/>
                <BlockServices services={props.services} />
                <BlockAd />
                <BlockHostels hostels={props.hostels} />
                <BlockCovid />
                <BlockInfluencers influencers={props.influencers} />
                <BlockSellers sellers={props.sellers} />

            </Layout>
        )
    
};
Default.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    await store.dispatch(fetchPremiums());
    await store.dispatch(loadServices());
    await store.dispatch(fetchHostels());
    await store.dispatch(loadInfluencers());
    let products = store.getState().products.basic;
    let services = store.getState().services.services;
    let sellers = [...products,...services].map(prod => prod.seller);
    sellers = [...new Set(sellers.map(JSON.stringify))].map(JSON.parse)
    let hostels = store.getState().hostels.hostels;
    let influencers = store.getState().influencers.influencers;
    return {
        "products" : products,
        "services" : services,
        "hostels" : hostels,
        "influencers" : influencers,
        "sellers" : sellers
    }
}
export default connect()(Default);