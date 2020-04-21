//React
import React,{useState} from 'react';
//third-party
//components
import Layout from '../../components/Layout';
import BlockHeader from '../../components/shared/BlockHeader';
import {fetchPremiums,fetchProducts} from '../../store/products';
import {loadServices} from '../../store/services';
import Items from '../../components/mp/Items';
import Related from '../../components/shared/Related';
import Meta from '../../partials/seo-meta';
import Error from '../../components/shared/Error';

const Services = ({services,related}) => {

    const [items] = useState([...services]);
   
    return (
        <Layout>
            <Meta
                title="Services offered at allcomrades marketplace"
                description="Watch and enjoy other services offerred by other students at allcomrades platform."
                url="https://allcomrades.co.ke/market_place/services"
                image="https://karu-api.s3.amazonaws.com/adverts/1587493230510.jpg"
            />
            <section className="services">
                <div className="container">
                    <div className="row"> 

                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Services Offered at allcomrades" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                        {
                            items.length > 0 ? (
                                <Items items={items} page={true} />
                            ) : (
                                <Error message="No services added yet!" btn={true} />
                            )
                        }
                        </div>
                    </div>
                    <Related data={related} title="Related" card="products"/>
                </div>                
            </section>
        </Layout>        
    )
};
Services.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let premiums = store.getState().products.premium;
    let basic = store.getState().products.basic;
    let services = store.getState().services.services;
    let related = [...premiums,...basic];
    return {
        related,services
    };
};
export default Services;