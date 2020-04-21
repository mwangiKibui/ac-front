//React
import React from 'react';
//core-components
//components
import Layout from '../../components/Layout';
import Meta from '../../partials/seo-meta';
import {fetchPremiums,fetchProducts} from '../../store/products';
import {fetchCategories} from '../../store/categories';
import {loadServices} from '../../store/services';
import MarketPlace from '../../components/mp';

const Mp = ({products,services}) => {
    return (
        <Layout>
            <Meta
            title="Marketplace on allcomrades"
            description="Sell and buy electronics,furnitures,clothings,footwears,beauties and also publish your service with us"
            url="https://allcomrades.co.ke/market_place"
            image={products[0]['profiles'][0]}
            />
            <section className="mp">
                <div className="container">
                    <MarketPlace products={products} services={services} />
                </div>                
            </section>
        </Layout>
    )
};
Mp.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    await store.dispatch(fetchCategories());
    let products = [...store.getState().products.premium,...store.getState().products.basic];
    let services = [...store.getState().services.services];
    return {
        products,services
    };
};
export default Mp;