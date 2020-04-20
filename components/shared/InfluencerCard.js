//React 
import React,{useEffect,useState} from 'react';
//third-party
import {connect} from 'react-redux';
import {Card,CardContent,CardMedia} from '@material-ui/core';
//components
import {followInfluencer} from '../../store/influencers';
import ModalAccount from './ModalAccount';
import {send} from './auth/utils/client';

const InfluencerCard = ({data,user,followInfluencer,loading}) => {
    
    const [hasFollowed,setHasFollowed] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [action,setAction] = useState('+Follow');
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        const checkIfFollows = () => {
            if(!user) return;
            //else if amongst the influencers followers, the user has followed
            let _hasFollowed = data['followers'].find(follower => follower.user === user['_id']);
            if(_hasFollowed) return setHasFollowed(true);
            return setHasFollowed(false);
        };
        checkIfFollows();
    },[]);

    //handle the follow
    const handleFollow = async () => {
        if(hasFollowed) return;
        //check whether there is user
        if(!user) return setIsOpen(true);
        //we follow
        setAction('Loading...');
        let response = await send().catch(console.log);

        if(!response) return setAction('+Follow');
        let user_details = {user:user['_id'],response};

        await followInfluencer(user_details,data['slug']).then(() => {
            //we can set hasFollowed to true
            if(!loading){
                return setHasFollowed(true);
            }
        }).catch(console.log);

    }

    return (
    <Card className="influencer_card-root">
        <div className="influencer_card-details">
            <CardContent className="influencer_card-content">
            <h4 className="influncer_card_name">{data['name']}</h4>
            <button className={hasFollowed ? 'btn btn-outline-success' : 'btn btn-outline-info'} onClick={()=>handleFollow()}>
                {
                    hasFollowed ? 'Following' : action
                }
            </button>
            <ModalAccount isOpen={isOpen} toggle={toggle} />
            </CardContent>            
        </div>
        <CardMedia 
        className="influencer_card-cover"
        title={`${data['name']} as an allcomrades ambassador`}
        >
            <img className="influencer_card-img" src={data['profile']} alt="Loading..." />
        </CardMedia>
    </Card>
    )
};
const mapToProps = state => ({
    user:state.user.user,
    loading:state.influencers.loading
});
const dispatchToProps = {
    followInfluencer
}
export default connect(mapToProps,dispatchToProps)(InfluencerCard);