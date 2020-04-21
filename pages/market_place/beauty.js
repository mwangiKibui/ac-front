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

const Beauty = ({premiums,basic,services,related}) => {

    const [items] = useState([...premiums,...basic,...services].filter(prod => prod.type === "beauty"));
   
    return (
        <Layout>
            <Meta
                title="Beauty Products at allcomrades marketplace"
                description="view all sorts of beauty products being sold out at allcomrades platform at your own convenience"
                url="https://allcomrades.co.ke/market_place/beauty"
                image="https://karu-api.s3.amazonaws.com/adverts/1587492770696.jpg"
            />
            <section className="beauty">
                <div className="container">
                    <div className="row"> 

                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Beauties at allcomrades" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                        {
                            items.length > 0 ? (
                                <Items items={items} page={true} />
                            ) : (
                                <Error message="No beauty products added yet!" btn={true} />
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
Beauty.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let premiums = store.getState().products.premium;
    let basic = store.getState().products.basic;
    let services = store.getState().services.services;
    let related = [...premiums,...basic,...services].filter(prod => prod.type !== "beauty");
    return {
        premiums,basic,related,services
    };
};
export default Beauty;