//React
import React,{useState} from 'react';
//third-party
import {ClipLoader} from 'react-spinners';
//components
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import BlockHeader from '../../components/shared/BlockHeader';
import BreadCrumb from '../../components/shared/breadcrumbs';
import {fetchPremiums,fetchProducts} from '../../store/products';
import {loadServices} from '../../store/services';
import Items from '../../components/mp/Items';
import Related from '../../components/shared/Related';
import Meta from '../../partials/seo-meta';
import Error from '../../components/shared/Error';

const Footwear = ({premiums,basic,services,related}) => {

    const [items] = useState([...premiums,...basic,...services].filter(prod => prod.type === "footwear"));
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
                title="Footwear at allcomrades marketplace"
                description="sell and buy shoes and all footwears  at allcomrades platform at your own convenience"
                url="https://allcomrades.co.ke/market_place/footwear"
                image="https://karu-api.s3.amazonaws.com/adverts/1587493181360.jpg"
            />
            <section className="footwear">
                <div className="container">
                    <div className="row"> 
                        <div className="col-12 col-sm-12 col-md-12">
                        <BreadCrumb 
                        breadcrumb={[
                            {title:'Home',url:'/'},
                            {title:'Market Place',url:'/market_place'},
                            {title:'Footwear',url:'/market_place/footwear'}
                        ]}
                        />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Footwear at allcomrades" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12">
                        {
                            pending ? (
                                <div className="col-12 col-sm-12 col-md-12">
                                    <ClipLoader size="30px" color="#009933" />
                                </div>
                            ) : (
                            items.length > 0 ? (
                                <Items items={items} currentPage={currentPage} />
                            ) : (
                                <Error message="No footwear products added yet!" btn={true} />
                            ))
                        }
                        </div>
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
Footwear.getInitialProps = async ({store}) => {
    await store.dispatch(fetchPremiums());
    await store.dispatch(fetchProducts());
    await store.dispatch(loadServices());
    let premiums = store.getState().products.premium;
    let basic = store.getState().products.basic;
    let services = store.getState().services.services;
    let related = [...premiums,...basic,...services].filter(prod => prod.type !== "footwear");
    return {
        premiums,basic,related,services
    };
};
export default Footwear;