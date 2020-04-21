//React 
import React from 'react';
//third-party
import Link from 'next/link';
import {connect} from 'react-redux';
import {Delete} from '@material-ui/icons';
import {confirmAlert} from 'react-confirm-alert';
//component.. Shall update when dealing with the specific set
import {pullMpReview} from  '../../store/products';
import {pullReview} from '../../store/services';
import {pullHostelReview} from '../../store/hostels';

const ReviewCard = (props) => {

    const isDelete = props.present_user ? props.present_user.name === props.user.name ? true : false : false;
    const slug = props.type === "product" ? props.prodSlug : props.serviceSlug;
    const handleDelete = async () => {
            return confirmAlert({
                message:'Are you sure you want to delete the review',
                buttons:[
                    {
                        label:'Yes',
                        onClick:async () => {
                          props.setPending();

                          /** we check whether it is a product or a service */
                          if(props.type === "product"){
                            await props.pullMpReview(slug,props.reviewId).then(() => {
                                return props.setPending();
                            }).catch(console.log);
                          }
                          else if(props.type === "service"){
                            await props.pullReview(slug,props.reviewId).then(() => {
                                return props.setPending();
                            }).catch(console.log);
                          }
                          else if(props.type === "hostel"){
                              await props.pullHostelReview(slug,props.reviewId).then(() => {
                                  return props.setPending();
                              }).catch(console.log);
                          }

                          }
                        }
                    ,{
                        label:'No',
                        onClick:() => {
                              return;
                        }
                    }
                ]
            })
    }

    return (
        <div className="media">
            <img className="mr-3 media_review_profile" src={props.user.profile ? props.user.profile : default_bg} alt="" />
            <div className="media-body">
                <Link className="media_review_name" to={`/platform/user_profile/${props.user['slug']}`}>{props.user['name']}</Link>
                <p className="media_review_message">{props.message}</p>
                <p className="media_review_date">Posted on {new Date(props.reviewDate).toLocaleDateString()}</p>
                {
                    isDelete ? (
                        <button className="btn btn-outline-danger" onClick={handleDelete}><Delete /></button>
                    ) : null
                }
            </div>
        </div>
    )
};
const mapToProps = state => ({
    loading:state.mp.loading,
    present_user:state.user.user,
    service_loading:state.services.loading,

});
const dispatchToProps = {
    pullMpReview,
    pullReview,
    pullHostelReview
};
export default connect(mapToProps,dispatchToProps)(ReviewCard);