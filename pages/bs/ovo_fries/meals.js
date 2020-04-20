//React
import React from 'react';
//third-party
//core-components
import Layout from '../../../components/Layout';
import BlockHeader from '../../../components/shared/BlockHeader';
import BsCard from '../../../components/shared/BsCard';
import {fetchProducts} from '../../../store/bs';
import Meta from '../../../partials/seo-meta';

const Meals = ({meals}) => {
    return (
        <Layout>
            <Meta
            title='Meals from Ovo at allcomrades platform'
            description="Enjoy tasty meals at affordable prices from Ovo fry's inn through allcomrades platform"
            url="https://allcomrades.co.ke/bs/ovo_fries/meals"
            image={meals[0]['profile']}
            />
            <section className="ovo_fries">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title={'Meals from Ovo'} />
                    </div>

                    {
                        meals.map((meal,index) => (
                            <div className="col-12 col-sm-4 col-md-4" key={index}>
                                <BsCard data={meal} />
                            </div>
                        ))
                    }

                </div>
                </div>                
            </section>
        </Layout>
    )
};
Meals.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    let meals = store.getState().bs.meals;
    return {
        meals
    }
};
export default Meals;