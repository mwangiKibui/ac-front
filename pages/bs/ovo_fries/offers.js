//React
import React from 'react';
//third-party
// import {connect} from 'react-redux';
//core-components
import Layout from '../../../components/Layout';
import Meta from '../../../partials/seo-meta';
import BlockHeader from '../../../components/shared/BlockHeader';
import BsCard from '../../../components/shared/BsCard';
import {fetchProducts} from '../../../store/bs';

const Offers = ({offers}) => {
    return (
        <Layout>
            <Meta
            title='Offers from Ovo at allcomrades platform'
            description="Get to browse some cool and amazing offers being sold at Ovo frys inn through allcomrades platform"
            url="https://allcomrades.co.ke/bs/ovo_fries/offers"
            image="https://karu-api.s3.amazonaws.com/adverts/1587388236611.jpg"
            />
            <section className="ovo_fries">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title={'Offers from Ovo'} />
                    </div>

                    {
                        offers.map((offer,index) => (
                            <div className="col-12 col-sm-4 col-md-4" key={index}>
                                <BsCard data={offer} />
                            </div>
                        ))
                    }

                </div>
                </div>                
            </section>
        </Layout>
    )
};
Offers.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    let offers = store.getState().bs.offers;
    return {
        offers
    }
};
export default Offers;