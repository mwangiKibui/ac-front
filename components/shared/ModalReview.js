//React
import React,{useState} from 'react';
//Third party
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {connect} from 'react-redux';
//components
import {pushMpReview} from '../../store/products';
import {pushReview} from '../../store/services';
import {pushHostelReview} from '../../store/hostels';

const ModalReview = (props) => {
    //we shall a form here
    const [review,setReview] = useState('');
    const [action,setAction] = useState('send review');
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');

    const onChange = (e) => setReview(e.target.value);
    const onSubmit = async e => {
        e.preventDefault();
        //we are continuing from here
        if(!review) return setError('You must add in a review');
        setAction('Loading');
        //we shall check whether it is product, hostel,
        let data = {message:review,user:props.user['_id']};
        let added_review = {
            message:review,
            user:props.user,
            uploadedAt:Date.now()
        };
        //we shall close down the modal auto
        if(props.type === "product"){
            /** push the review to the marketplace */
            
            await props.pushMpReview(data,props.product,added_review).then(() => {
                setAction('review sent');
                setReview('');
                setMessage('Review sent successfully');
                return props.toggle();
            }).catch(console.log);

        }else if(props.type === "service"){
            /** push the review to the services section */
            await props.pushReview(data,props.service,added_review).then(() => {
                setAction('review sent')
                setReview('');
                setMessage('Review sent successfully');
                return props.toggle();
            }).catch(console.log);
        }
        else{
            /** push it to the hostels */
            await props.pushHostelReview(data,props.hostel,added_review).then(() => {
                setAction('review sent');
                setReview('');
                setMessage('Review sent successfully');
                return props.toggle();
            }).catch(console.log);
        }
        
    } 

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>
                <h5 className="modal-review_heading">Fill in your review</h5>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={onSubmit}>
                    {
                        error ? (
                            <div className="form-group">
                                <div className="alert alert-danger">{error}</div>
                            </div>
                        ) : null
                    }
                    {
                        message ? (
                            <div className="form-group">
                                <div className="alert alert-success">{message}</div>
                            </div>
                        ) : null
                    }
                    <div className="form-group">
                        <label htmlFor='review'>Your review</label>
                        <textarea name="review"
                        className="form-control"
                        placeholder="What is your review e.g am Happy for the products"
                        onChange={onChange}
                        value={review}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-success">{action}</button>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-outline-danger" onClick={props.toggle}>close</button>
            </ModalFooter>
        </Modal>
    )
};
const mapToProps = (state) => ({
    mp_loading:state.products.loading,
    hst_loading:state.hostels.loading,
    srv_loading:state.services.loading,
    user:state.user.user
});
const dispatchToProps = {
    pushHostelReview,
    pushMpReview,
    pushReview
};
export default connect(mapToProps,dispatchToProps)(ModalReview);