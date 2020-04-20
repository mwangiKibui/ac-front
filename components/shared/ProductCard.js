//React
import React,{useState} from 'react';
//material ui core and stuff
import Link from 'next/link';
import {connect} from 'react-redux';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton} from '@material-ui/core';
import classNames from 'classnames';
import {Edit,Delete} from '@material-ui/icons';
import {confirmAlert} from 'react-confirm-alert';
//components
import {deleteProduct,updateStock} from '../../store/products';
import {quickviewOpen} from '../../store/quickview';
import AsyncAction from './AsyncAction';


function ProdCard(props) {
    
    //state and neccesites
    const [products] = useState([...props.premiums,...props.basic]);
    const [inStock,setStock] = useState(props.data.availability === "In Stock" ? true : false);
    const [action,setAction] = useState(inStock ? 'Out of Stock? ' : 'In Stock?');
    //updating the stock
    const handleUpdateStock = async (slug) => {
        setAction('Loading....');
        await props.updateStock(slug).then(() => {
            //the stock is updated
            setStock(!inStock);
            setAction(action === 'Out of Stock' ? 'In Stock? ' : 'Out of Stock?')
        }).catch(console.log);
    }
    //deleting a product 
    const product_delete = _id => {
        return confirmAlert({
            message:'Are you sure you want to delete product',
            buttons:[
                {
                    label:'Yes',
                    onClick:async () => {
                      props.setPending();
                      await props.deleteProduct(_id).catch(console.log);
                      if(!props.loading){
                          return props.setPending();
                      }
                    }
                },{
                    label:'No',
                    onClick:() => {
                          return;
                    }
                }
            ]
        })
    };
    return (
        <Card className="product_card-root">
           <CardHeader 
             avatar={
                 <Avatar aria-label="seller" className="product_card-avatar">
                  {
                  props.data.seller.name.split(' ')[0][0].toUpperCase()
                  }
                 </Avatar>
             }
             title={
                 props.data.kind === "product" ? (
                 <Link href={`/products/${props.data.slug}`}>
                     <a className="product_card-name">{props.data.name}</a>
                 </Link>
                 ) : (
                 <Link href={`/services/${props.data.slug}`} >
                     <a className="product_card-name">{props.data.name}</a>
                 </Link>
                 )
             }
             subheader={
                <Link href={`/platform/user_profile/${props.data.seller.slug}`} >
                     <a className="product_card-seller">{props.data.seller.name.toLowerCase()}</a>
                </Link>
             }
             />
            <CardMedia
            // className="product_card-media"
            title={props.data.name}
            >
                <img src={props.data.profiles[0]} className="product_card-img" alt="Loading... " />
            </CardMedia>
            <CardContent>
            {
            props.data.price ? (
            <div className="product_card-actions">
            <p className="product_card-price">Kshs: {parseInt(props.data.price).toLocaleString()}</p>
            <AsyncAction
                action={() => props.quickviewOpen(props.data._id,products)}
                render={({ run, loading }) => (
                    <button
                        type="button"
                        onClick={run}
                        className={classNames('product-card__quickview', {
                            'product-card__quickview--preload': loading,
                        })}
                    >
                        <i className="fab fa-expand product-card__quickview" />
                    </button>
                )}
            />
            </div>
             ) : (
            <div className="product_card-action">
            <AsyncAction
            action={() => props.quickviewOpen(props.data._id,products)}
            render={({ run, loading }) => (
                <button
                    type="button"
                    onClick={run}
                    className={classNames('product-card__quickview', {
                        'product-card__quickview--preload': loading,
                    })}
                >
                   <i className="fab fa-expand product-card__quickview" />
                </button>
            )}
            />
            </div>
             )
            }
            <p className="product_card-description">{props.data.description}.</p>
            </CardContent>
            <CardActions disableSpacing>
                {
                    !props.actions ? (
                        <>
                        </>
                    ) : (
                        <>
                        <IconButton aria-label="edit">
                        <Link href={{pathname:'/account/store/product_form',state:{slug:props.data.slug}}}>
                        <Edit className="text-info"/>
                        </Link>                        
                        </IconButton> 
                        <IconButton aria-label="delete" onClick={() => product_delete(props.data._id)} >
                        <Delete className="text-danger" />
                        </IconButton>
                        {
                            inStock ? (
                                <button className="btn btn-outline-danger" onClick={() => handleUpdateStock(props.data.slug)}>{action}</button>
                            ) : (
                                <button className="btn btn-outline-success" onClick={() => handleUpdateStock(props.data.slug)}>{action}</button>
                            )
                        }
                        </>
                    )
                }
                
            </CardActions>
        </Card>
    )
}
const mapToProps = state => ({
    premiums:state.products.premium,
    basic:state.products.basic
})
const dispatchToProps = {
    quickviewOpen,
    updateStock,
    deleteProduct
}
export default connect(mapToProps,dispatchToProps)(ProdCard);