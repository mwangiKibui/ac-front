//React and core-components
import React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';

//material ui core and stuff
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton} from '@material-ui/core';
import classNames from 'classnames';
import {Edit,Delete} from '@material-ui/icons';
import {confirmAlert} from 'react-confirm-alert';

//components
import {pullService} from '../../store/services';
import {quickviewOpen} from '../../store/quickview';
import AsyncAction from './AsyncAction';


function ServiceCard(props) {
    

    //deleting a product 
    const service_delete = _id => {
        return confirmAlert({
            message:'Are you sure you want to delete service',
            buttons:[
                {
                    label:'Yes',
                    onClick:async () => {
                      props.setPending();
                      await props.pullService(_id).catch(console.log);
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
        <Card className="service_card-root">
           <CardHeader 
             avatar={
                 <Avatar aria-label="seller" className="service_card-avatar">
                  {
                  props.data.seller.name.split(' ')[0][0].toUpperCase()
                  }
                 </Avatar>
             }
             title={
                 <Link href={`/platform/services/${props.data.slug}`} >
                     <a className="service_card-name" >{props.data.name}</a>
                 </Link>
             }
             subheader={
                <Link href={`users/${props.data.seller.slug}`}>
                 <a className="service_card-subheader">{props.data.seller.name.toLowerCase()}</a>
                </Link>
             }
             />
            <CardMedia title={props.data.name}>
                <img className="service_card-img" src={props.data.profiles[0]} alt="Loading.." />
            </CardMedia>
            <CardContent>
            <div className="service_card-actions">
            <AsyncAction
                action={() => props.quickviewOpen(props.data._id,props.services)}
                render={({ run, loading }) => (
                    <button
                        type="button"
                        onClick={run}
                        className={classNames('product-card__quickview', {
                            'product-card__quickview--preload': loading,
                        })}
                    >
                        <i  className="fab fa-expand service-card__quickview"/>
                    </button>
                )}
            />
            </div>
            <p className="service_card-description">{props.data.description}.</p>
            </CardContent>
            <CardActions disableSpacing>
                {
                    !props.actions ? (
                        <>
                        
                        </>
                    ) : (
                        <>
                        <IconButton aria-label="edit">
                        <Link href={{pathname:'/account/store/service_form',state:{slug:props.data.slug}}}>
                        <Edit/>
                        </Link>                        
                        </IconButton> 
                        <IconButton aria-label="delete" onClick={() => service_delete(props.data._id)} >
                        <Delete className="text-danger" />
                        </IconButton>
                        </>
                    )
                }
                
            </CardActions>
        </Card>
    )
}
const mapToProps = state => ({
    loading:state.services.loading,
    services:state.services.services
});
const dispatchToProps = {
    pullService,
    quickviewOpen
};
export default connect(mapToProps,dispatchToProps)(ServiceCard);