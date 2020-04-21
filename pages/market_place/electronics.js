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

const Electronics = ({premiums,basic,services,related}) => {

    const [items] = useState([...premiums,...basic,...services].filter(prod => prod.type === "electronics"));
    
    return (
        <Layout>
            <Meta
                title="Electronics at allcomrades marketplace"
                description="Sell and buy for electronics easily at allcomrades platform at your own convenience"
                url="https://allcomrades.co.ke/market_place/electronics"
                image={"https://karu-api.s3.amazonaws.com/adverts/1587473496023.jpg"}
            />
            <section className="electronics">
                <div className="container">
                    <div className="row"> 

                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Electronics at allcomrades" />
                        </div>
                        <Items items={items} page={true}/>
                        

                    </div>
                    <Related data={related} title="Related" card="products"/>
                </div>                
            </section>
        </Layout>        
    )
};
Electronics.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let premiums = store.getState().products.premium;
    let basic = store.getState().products.basic;
    let services = store.getState().services.services;
    let related = [...premiums,...basic,...services].filter(prod => prod.type !== "electronics");
    return {
        premiums,basic,related,services
    };
};
export default Electronics;