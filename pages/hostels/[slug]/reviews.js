//We shall be showing the reviews of the hostel

//React
import React,{Component} from 'react';
//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import Error from '../../../components/shared/Error';
import ReviewCard from '../../../components/shared/ReviewCard';
import BreadCrumb from '../../../components/shared/breadcrumbs';
import {fetchSpecificHostel,loadReviews} from '../../../store/hostels';
import {fetchUser} from '../../../store/user';
import ModalReview from '../../../components/shared/ModalReview';
import ModalAccount from '../../../components/shared/ModalAccount';
import Layout from '../../../components/Layout';
import Meta from '../../../partials/seo-meta';

class Reviews extends Component {
    state ={
        hostelSlug:this.props.slug,
        reviews:this.props.reviews,
        error:this.props.error,
        pending:false,
        accountIsOPen:false,
        reviewIsOpen:false,
        action:'add a review'
    };
    static async getInitialProps({store,query}){

        await store.dispatch(fetchSpecificHostel(query.slug));
        let hostel = store.getState().hostels.hostel;
        if(hostel){
            await store.dispatch(loadReviews(hostel['reviews']));
        };
        return {
            'reviews':store.getState().hostels.reviews,
            'error' : store.getState().hostels.error,
            'hostel' : store.getState().hostels.hostel
        };
    }
    componentDidUpdate(prevProps){
        if(this.props.reviews !== prevProps.reviews){
            this.setState({reviews:this.props.reviews});
        };
    };
    setPending = () => this.setState({pending:!this.state.pending});
    accountToggle = () => this.setState({accountIsOPen:!this.state.accountIsOPen});
    reviewToggle = () => this.setState({reviewIsOpen:!this.state.reviewIsOpen});

    handleAddReview = async () => {
        this.setState({action:'Loading'});
        //we first check if you are logged in 
        let token = this.props.token;
        let user = this.props.user;
        if(!token) return this.setState({accountIsOPen:true,action:'add a review'});
        if(!user){
            await this.props.fetchUser(token).then(() => {
                return this.setState({reviewIsOpen:true,action:'add a review'})
            }).catch(console.log);
        };
        return this.setState({reviewIsOpen:true,action:'add a review'})
    };
    
    render(){
    return (
        <Layout>
        <Meta
            description={`Check out and leave some reviews concerning ${this.props.hostel['name']} on allcomrades platform`}
            url={`www.allcomrades.co.ke/platform/hostels/${this.props.hostel['slug']}/reviews`}
            title={`${this.props.hostel['name']} Hostel reviews`}
            image={`${this.props.hostel['profiles'][0]}`}
        />
        <section className="reviews">
           
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BreadCrumb
                        breadcrumb={[
                            {title:'Home',url:'/'},
                            {title:'Hostels',url:'/hostels'},
                            {title:`${this.props.hostel['name']}`,url:`/hostels/${this.props.hostel['slug']}`},
                            {title:'Reviews',url:`/hostels/${this.props.hostel['slug']}/reviews`}
                        ]}
                        />
                    </div>
                    {
                        this.state.error ? (
                            <Error message={this.state.error} />
                        )  : (
                    <>
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                        <h5 className="reviews_heading">User's reviews</h5>
                    </div>
                    {
                    this.state.pending ? (
                        <div className="col-12 col-sm-12 col-md-12 text-center">
                            <ClipLoader size="30" color="#009933" />
                        </div>
                    ) : (                            
                    <>
                    {
                        this.state.reviews.length > 0 ? (
                            <div className="row">
                                {
                                    this.state.reviews.map((review,index) => (
                                        <div className="col-12 col-sm-12 col-md-12" key={index}>
                                            <ReviewCard user={review['user']}
                                              reviewId={review['_id']}
                                              reviewDate={review['uploadedAt']}
                                              type="hostel"
                                              prodSlug={this.state.hostelSlugSlug}
                                              message={review['message']} setPending={this.setPending}/>
                                        </div>
                                    ))
                                }
                                <div className="col-12 col-sm-12 col-md-12 text-center" style={{width:'100%'}}>
                                    <button className="btn btn-outline-success" onClick={() => this.handleAddReview()}>{this.state.action}</button>
                                    <ModalReview isOpen={this.state.reviewIsOpen} toggle={this.reviewToggle} type="hostel" hostel={this.state.hostelSlug} />
                                    <ModalAccount isOpen={this.state.accountIsOPen} toggle={this.accountToggle} />
                                </div>
                            </div>
                        ) : (
                            <div className="col-12 col-sm-12 col-md-12 text-center"  style={{width:'100%'}}>
                                <Error message={'No review added.'} />
                                <button className='btn btn-outline-success' onClick={() => this.handleAddReview()}>{this.state.action}</button>
                                <ModalReview isOpen={this.state.reviewIsOpen} toggle={this.reviewToggle} type="hostel" product={this.state.hostelSlug} />
                                <ModalAccount isOpen={this.state.accountIsOPen} toggle={this.accountToggle} />
                            </div>
                        )
                    }
                    </>
                        
                    )}
                    </>
                )}
                </div>
            </div>
        </section>
        </Layout>
    )
}};
const mapToProps = state => ({
    loading:state.hostels.loading,
    token:state.user.token
});
const dispatchToProps = {
    fetchUser
};
export default  connect(mapToProps,dispatchToProps)(Reviews);