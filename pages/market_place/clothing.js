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

const Clothing = ({premiums,basic,services,related}) => {

    const [items] = useState([...premiums,...basic,...services].filter(prod => prod.type === "clothing"));
    
    return (
        <Layout>
            <Meta
                title="Clothings at allcomrades marketplace"
                description="Sell and buy for tshirt,hoodies and much more easily at allcomrades platform at your own convenience"
                url="https://allcomrades.co.ke/market_place/clothing"
                image={"https://karu-api.s3.amazonaws.com/adverts/1587474987692.jpg"}
            />
            <section className="clothing">
                <div className="container">
                    <div className="row"> 

                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Clothing(s) at allcomrades" />
                        </div>
                        <Items items={items} page={true}/>
                        

                    </div>
                    <Related data={related} title="Related" card="products"/>
                </div>                
            </section>
        </Layout>        
    )
};
Clothing.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let premiums = store.getState().products.premium;
    let basic = store.getState().products.basic;
    let services = store.getState().services.services;
    let related = [...premiums,...basic,...services].filter(prod => prod.type !== "clothing");
    return {
        premiums,basic,related,services
    };
};
export default Clothing;