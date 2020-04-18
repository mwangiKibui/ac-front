//React
import React from 'react';
//core-components
import Link from 'next/link';
//third-party
import {connect} from 'react-redux';
//components
import Layout from '../components/Layout';
import {fetchHostels} from '../store/hostels';
// import {fetchProductsBasic} from '../store/mp';
// import ProductCard from '../components/shared/ProductCard';
import HostelCard from '../components/shared/HostelCard';
import Meta from '../partials/seo-meta';
//your scss styles
import '../styles/styles.scss'

const  Default = (props) => {
        return (
            <Layout>

                <Meta />

                <p>The real content of redux </p>
                <Link href="/table">
                    <a>Go to table</a>
                </Link>

                <div className="row">
                {
                    props.hostels.map((hostel,i) => (
                        <div className="col-12 col-sm-3" key={i}>
                        <HostelCard data={hostel} />
                        </div>
                    ))
                }
                </div>
                
            </Layout>
        )
    
};
Default.getInitialProps = async ({store,isServer,pathname,query}) => {
    await store.dispatch(fetchHostels()).then(() => {});
    // await store.dispatch(fetchProductsBasic());
    return {
        loading:store.getState().hostels.loading,
        hostels:store.getState().hostels.hostels,
        // products:store.getState().mp.products
    }
};
export default connect()(Default);