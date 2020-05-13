//React
import React,{useState} from 'react';
//third-party
import {ClipLoader} from 'react-spinners';
//components
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import Error from '../../components/shared/Error';
import BlockHeader from '../../components/shared/BlockHeader';
import BreadCrumb from '../../components/shared/breadcrumbs';
import {fetchPremiums,fetchProducts} from '../../store/products';
import {loadServices} from '../../store/services';
import Items from '../../components/mp/Items';
import Related from '../../components/shared/Related';
import Meta from '../../partials/seo-meta';

const Electronics = ({premiums,basic,services,related}) => {

    const [items] = useState([...premiums,...basic,...services].filter(prod => prod.type === "electronics"));
    const [pending,setPending] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);

    const paginate = number => {

        setTimeout(() => {
            setCurrentPage(number);            
            return setPending(false);
        },1000);

        setPending(true);
        
    };
    
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
                        <BreadCrumb
                        breadcrumb={
                            [
                                {title:'Home',url:'/'},
                                {title:'Market Place',url:'/market_place'},
                                {title:'Electronics',url:'/market_place/electronics'}
                            ]
                        }
                        />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Electronics at allcomrades" />
                        </div>
                        {
                            pending ? (
                                <div className="col-12 col-sm-12 col-md-12">
                                    <ClipLoader size="30px" color="#009933" />
                                </div>
                            ) : (
                                items.length > 0 ? (
                                    <Items items={items} currentPage={currentPage}/>
                                ) : (
                                    <Error message={'No electronics uploaded yet!'} btn={true}/>
                                )
                            )
                        }
                        <div className="col-12 col-sm-12 col-md-12">
                            <Pagination elementsPerPage={8} totalElements={items.length} paginate={paginate}
                            currentPage={currentPage}/>
                        </div>
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