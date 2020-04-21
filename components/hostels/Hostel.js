// react
import React, { Component } from 'react';
//core-components
import Link from 'next/link';
// third-party
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Share} from '@material-ui/icons';
// application
import ProductGallery from '../shared/ProductGallery';
import Error from '../shared/Error';
import Loader from '../shared/Loader';
import Related from '../shared/Related';
import ModalShare from '../shared/ModalShare';
import {addHostelView} from '../../store/hostels';

class Hostel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostelSlug:this.props.slug,
            loading:false,
            action:"Show caretaker's phone number",
            showNumber:false,
            related:this.props.related,
            error:this.props.error,
            hostel:this.props.hostel,
            shareIsOpen:false,
            reviews:this.props.reviews
        }
    };

    shareToggle = () => this.setState({shareIsOpen:!this.state.shareIsOpen});

    componentDidUpdate(prevProps){
        //the hostel
        if(this.props.hostel !== prevProps.hostel){
            this.setState({hostel:this.props.hostel})
        };
        //slug
        if(this.props.slug !== prevProps.slug){
            this.setState({hostelSlug:this.props.slug});
        };
        //related
        if(this.props.related !== prevProps.related){
            this.setState({related:this.props.related});
        };
    };

    handleShowNumber = async () => {
        this.setState({action:'Loading..'});
        await this.props.addHostelView(this.state.hostelSlug).then(() => {
            return this.setState({showNumber:true});
        }).catch(console.log);
    }


    render() {

        const {hostel,loading,error,related,hostelSlug,showNumber} = this.state;

        let title = `Review and Book your place at ${hostel['name']} from allcomrades platform`;
        let link =   `https://allcomrades.co.ke/hostels/${hostelSlug}`;
        let message = `Share ${hostel['name']} with your friends easily`;


        return (
            <>
            {
            loading ? (
                <Loader />
            ) : (
                error ? (
                    <Error message={error} />
                ) : (
            <>
            <section className="hostel">
            <div className={`product product--layout--standard`}>
                <div className="product__content">
                    <ProductGallery layout={'standard'} images={hostel['profiles']} />
                    <div className="product__info">                        
                        <h1 className="product__name">{hostel.name},{hostel['location']}</h1>
                        <div className="product__reviews"> 
                                <Link href={`/hostels/${this.state.hostelSlug}/reviews`}>
                                    <a className="product_reviews-link">{`${this.state.reviews.length} Review(s)`}</a>
                                </Link>
                        </div>

                        <div className="product__description">
                            <p>{hostel['description']}</p>
                        </div>
                        <ul className="product__meta">
                            <li className="product__meta-availability">
                                Rent: Kshs
                                {' '}
                                { parseInt(hostel['rent']).toLocaleString() }  {' '} {hostel['rent_duration']}
                                {"  "}
                                <br />
                                Deposit: 
                                {
                                    hostel['deposit'] ? ` Kshs ${parseInt(hostel['deposit']).toLocaleString()}` : 'None'
                                }
                            </li>
                        </ul>


                    </div>
                    <div className="product__footer">
                        <button className='btn btn-outline-success' onClick={this.shareToggle}><Share /> share</button>
                        <ModalShare isOpen={this.state.shareIsOpen} toggle={this.shareToggle} link={link} title={title} message={message} />
                        <button className="btn btn-outline-info" onClick={this.handleShowNumber}>
                            {
                                showNumber ? `${hostel['caretaker']}` : this.state.action
                            }
                        </button>                                                
                    </div>

                </div>
            </div>
            {
                related.length > 0 ? (
                    <div className="row">
                        <Related title={'Related Hostels'} data={related} card="hostels" />
                    </div>
                ) : null
            }
            </section>  
            </>
            ))}
            </>
        );
    }
}

Hostel.propTypes = {
    /** hostel object */
    hostel: PropTypes.object.isRequired,
    /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
    layout: PropTypes.oneOf(['standard', 'sidebar', 'columnar', 'quickview']),
};

Hostel.defaultProps = {
    layout: 'standard',
};
const mapToProps = state => ({
    reviews:state.hostels.reviews
});
const dispatchToProps = {
    addHostelView
};
export default connect(mapToProps,dispatchToProps)(Hostel); 