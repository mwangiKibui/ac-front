//React
import React from 'react';
//third-party
// import {connect} from 'react-redux';
//core-components
import Layout from '../../../components/Layout';
import BlockHeader from '../../../components/shared/BlockHeader';
import BsCard from '../../../components/shared/BsCard';
import Meta from '../../../partials/seo-meta';
import {fetchProducts} from '../../../store/bs';
const Drinks = ({drinks}) => {
    return (
        <Layout>
            <Meta
            title='Drinks from Ovo at allcomrades platform'
            description="Enjoy cool drinks at affordable prices from Ovo fry's inn through allcomrades platform"
            url="https://allcomrades.co.ke/bs/ovo_fries/drinks"
            image={drinks[0]['profile']}
            />
            <section className="ovo_fries">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title={'Drinks from Ovo'} />
                    </div>

                    {
                        drinks.map((drink,index) => (
                            <div className="col-12 col-sm-4 col-md-4" key={index}>
                                <BsCard data={drink} />
                            </div>
                        ))
                    }

                </div>
                </div>                
            </section>
        </Layout>
    )
};
Drinks.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    let drinks = store.getState().bs.drinks;
    return {
        drinks
    }
};
export default Drinks;