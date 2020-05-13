// react
import React, { useState } from 'react';
//core-components
import Link from 'next/link';
// third-party
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Share} from '@material-ui/icons';
// application
import ProductGallery from '../../components/shared/ProductGallery';
import Error from '../../components/shared/Error';
import Breadcrumb from '../../components/shared/breadcrumbs';
import Layout from '../../components/Layout';
// import Loader from '../../components/shared/Loader';
import Related from '../../components/shared/Related';
import ModalShare from '../../components/shared/ModalShare';
import {loadReviews,fetchProduct,addProductViews,fetchProducts} from '../../store/products';

const Product =  (props) =>  {

    const [prodSlug] = useState(props.slug);
    const [related] = useState(props.related);
    const [product] = useState(props.product);
    const [showNumber,setShowSellerNumber] = useState(false);
    const [action,setAction] = useState('Show seller phone number');
    const [error] = useState(props.error);
    const [isOpen,setIsOpen] = useState(false);


    const shareToggle = () => setIsOpen(!isOpen);


    //handling the show number
    const handleShowNumber = async () => {
        setAction('Loading')
        await props.addProductViews(prodSlug).then( () => {
            return setShowSellerNumber(true)
        }).catch(console.log);
    }

        

    let title = `Shop for ${product['name']} from allcomrades platform`;
    let link =   `https://allcomrades.co.ke/platform/products/${prodSlug}`;
    let message = `Share ${product['name']} with your friends`;

    

    return (
        <Layout>
        {
            error ? (
                <Error message={error} />
            ) : (
        <>
        <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
                <Breadcrumb 
                breadcrumb={[
                    {title:'Home',url:'/'},
                    {title:'Market Place',url:'/market_place'},
                    {title:`${product['name']}`,url:`/market_place/${product['slug']}`}
                ]}
                />
            </div>
        </div>
        <div className={`product product--layout--'standard'`}>
            <div className="product__content">
                <ProductGallery layout={'layout'} images={product['profiles']} />
                <div className="product__info">                        
                    <h1 className="product__name">{product.name}</h1>
                    {/* <div className="product__reviews"> 
                            <Link href={`/platform/products/${prodSlug}/reviews`}>
                            <a className="product_reviews-link">{`${product['reviews'].length} Review(s)`}</a>
                            </Link>
                    </div> */}
                    <div className="product__description">
                        <p>{product['description']}</p>
                    </div>
                    <ul className="product__meta">
                        <li className="product__meta-availability">
                            Availability:
                            {' '}
                            {
                                product['availability'] ? (
                                    product['availability'] === "In Stock" ? <span className="text-success">In Stock</span> :
                                    <span className="text-danger">Out of stock</span>
                                ) : null                                
                            }
                        </li>
                    </ul>
                </div>
                <div className="product__sidebar">
                    <div className="product__availability">
                        <p className="text-white">Availability:</p>
                        {' '}
                        {
                        product['availability'] === "In Stock" ? <span className="text-success">In Stock</span> :
                                <span className="text-danger">Out of stock</span>
                        }
                    </div>

                    <div className="product__prices">
                        {
                            product.price ? <span className="product__price">KSHS:{parseInt(product.price).toLocaleString()}.</span> : null
                        } 
                        {'    '}
                        {
                            product.price_type ? <span className="product__price">The price is {product.price_type}</span> : null
                        }
                    </div>                        

                </div>

                <div className="product__footer">
                        <button className='btn btn-outline-success' onClick={shareToggle}><Share /> share</button>
                        <ModalShare isOpen={isOpen} toggle={shareToggle} link={link} title={title} message={message} />
                        {
                            showNumber ? (
                            <p className="product__footer_text">+254{product.seller.phone}</p>
                            ) : (
                            <button className="btn btn-outline-info" onClick={handleShowNumber}>
                            {action}
                            </button> 
                            )
                        }
                                        
                </div>

            </div>
        </div>
        {
            related.length > 0 ? (
                <div className="row">
                    <Related title={'Related products'} data={related} card="products" />
                </div>
            ) : null
        }
        </div>  
        </>
        )}
        </Layout>
    );
    }


Product.propTypes = {
    /** product object */
    product: PropTypes.object.isRequired,
    /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
    layout: PropTypes.oneOf(['standard', 'sidebar', 'columnar', 'quickview']),
};

Product.defaultProps = {
    layout: 'standard',
};
Product.getInitialProps = async ({store,query}) => {
    await store.dispatch(fetchProduct(query.slug));
    await store.dispatch(fetchProducts());
    let product = store.getState().products.product;
    // await store.dispatch(loadReviews(product['reviews']));
    let error = store.getState().products.error;
    let products = store.getState().products.basic;
    let related = products.filter(prod => prod.slug !== query.slug);
    return {
        product,related,slug:query.slug,error
    }

};
const dispatchToProps = {
    addProductViews
}
export default connect(null,dispatchToProps)(Product);