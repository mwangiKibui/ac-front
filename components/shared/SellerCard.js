//React 
import React,{useEffect,useState} from 'react';
//third-party
import {connect} from 'react-redux';
import Link from 'next/link';
import {Card,CardContent,CardMedia} from '@material-ui/core';
//components
import ModalAccount from './ModalAccount';
import {send} from './auth/utils/client';
import {subscribe} from '../../store/user';

const SellerCard = ({data,user,subscribe,loading,error}) => {

   
    const [hasSubscribed,setHasSubscribed] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [action,setAction] = useState('Subscribe');
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const checkIfSubscribed = () => {
            if(!user) return;
            //else if amongst the influencers followers, the user has followed
            let _hasSubscribed = data['subscribers'].find(sub => sub.user === user['_id']);
            if(_hasSubscribed) return setHasSubscribed(true);
            return setHasSubscribed(false);
        };
        checkIfSubscribed();
    },[]);

    //handle the follow
    const handleSubscribe = async () => {
        if(hasSubscribed) return;
        //check whether there is user
        if(!user) return setIsOpen(true);
        //check whether the user already got the keys
        let user_details = {};
        if(user['endpoint']){
            user_details = {user:user['_id']};
        }else{
            let response = await send().catch(console.log);

            if(!response) return setAction('Subscribe');
            user_details = {user:user['_id'],response};
        }
        setAction('Loading...');
        await subscribe(user_details,data['_id']).then(() => {
            //we can set hasFollowed to true
            if(!loading){
                if(error) return setHasSubscribed(true);
                return setHasSubscribed(true);
            }
        }).catch(console.log);

    }

    return (
    <Card className="seller_card-root">
        <div className="seller_card-details">
            <CardContent className="seller_card-content">
            <Link href={`/sellers/${data['slug']}`}>
                <a className="seller_card_name">{data['name'].split(" ")[0].toLowerCase()}</a>
            </Link>
            <button className={hasSubscribed ? 'btn btn-info' : 'btn btn-outline-info'} onClick={()=>handleSubscribe()}>
                {
                    hasSubscribed ? 'Subscribed' : action
                }
            </button>
            <ModalAccount isOpen={isOpen} toggle={toggle} />
            </CardContent>            
        </div>
        <CardMedia 
        className="seller_card-cover"        
        title={`${data['name']} as an allcomrades seller`}
        >
         <img src={data['profile'] ? data['profile'] : '/static/images/default.webp'} alt="Loading.." className="seller_card-img"/>
        </CardMedia>
    </Card>
    )
};
const mapToProps = state => ({
    user:state.user.user,
    loading:state.user.loading,
    error:state.user.error
});
const dispatchToProps = {
    subscribe
}
export default connect(mapToProps,dispatchToProps)(SellerCard);