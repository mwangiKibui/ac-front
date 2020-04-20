import React,{useState} from 'react';

import {Card,CardContent, CardMedia} from '@material-ui/core';

//utils
import {connect} from 'react-redux';
//components
import ModalAccount from './ModalAccount';
import ModalOrder from './ModalOrder';
import {claimOrder} from '../../store/bs';
import {fetchUser} from '../../store/user';



const Ovocard = (props) =>  {

    const data = props.data;
    const [isOpen,setIsOpen] = useState(false);
    const [accountIsOpen,setAccountIsOpen] = useState(false);
    

    
    const toggle = () => setIsOpen(!isOpen);
    const accountToggle = () => setAccountIsOpen(!accountIsOpen);

  

    const handle_request_offer = async () => {
        const token = props.token;
        if (!token) {
            
            return setAccountIsOpen(true);
        };
        const user = props.user;
        if(user) {

            return setIsOpen(true);

        }else{

        await props.fetchUser(token).catch(console.log);
        if (!props.user_loading && props.user) {
            return setIsOpen(true)
        };

    }};
    return (
        
        <Card className="bs_card-root">
            <div className="bs_card-details">
                <CardContent className="bs_card-content">
                    <p className="bs_card-name">{data.name}</p>
                    <p className="bs_card-price">Kshs:{parseInt(data.price).toLocaleString()}</p>
                    
                     <button className="btn btn-outline-success" onClick={handle_request_offer}>order</button>
                     <ModalOrder isOpen={isOpen} toggle={toggle} product={data}/>
                     <ModalAccount isOpen={accountIsOpen} toggle={accountToggle} />
                  
                </CardContent>
            </div>
            <CardMedia className="bs_card-cover" title={data.name}>
                <img src={data.profile} className="bs_card-img" alt="Loading.." />
            </CardMedia>
        </Card>
        
    )
};
const mapToProps = state => ({
    user:state.user.user,
    user_loading:state.user.loading,
    token:state.user.message
});
const dispatchToProps = {   
    fetchUser,
    claimOrder
};
export default connect(mapToProps,dispatchToProps)(Ovocard);