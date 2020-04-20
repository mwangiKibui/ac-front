//react
import React from 'react';
//third-party
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
//components
import {user_signup,provider_usersignup,fetchUser} from '../../store/user';
import NameFields from './auth/components/NameFields';
import ContactFields from './auth/components/ContactFields';
import UserFields from './auth/components/UserFields';
import {send} from './auth/utils/client';
class Signup extends React.Component {


    state = {
        firstname:'',
        lastname:'',
        location:'',
        email:'',
        phone:'',
        password:'',
        message:'',
        loading:false,
        error:'',
        auth_error:'',
        action:'create account',
        max_step:3,
        step:1,
        auth_action:''
    };

    onChange = e => {
        return this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleNextStep = () => {
        const {step} = this.state;
        return this.setState({step:step+1});
    };

    handlePrevStep = () => {
        const {step} = this.state;
        return this.setState({step:step - 1});
    };

    onFacebookSignup = async response => {

        let name = response.name;
        let email = response.email;
        let picture = response.picture.url;
        this.setState({auth_action:'loading'});
        let _response = await send().catch(console.log);
        let data = {name,email,picture,'response':_response};
        await this.props.provider_usersignup(data).catch(console.log);
        if(!this.props.loading){
        if(this.props.error){
            return this.setState({auth_error:this.props.error,auth_action:'try again'});
        }
        //set message
        this.props.setMessage('Login into your newly created account');
        return this.props.setLogin(true);
        };

    };
    onGoogleSignup = async response => {

        let name = response.Pt.Ad;
        let email = response.Pt.yu;
        let picture = response.profileObj.imageUrl;
        this.setState({auth_action:'loading'});
        let _response = await send().catch(console.log);
        let data = {name,email,picture,'response':_response};
        await this.props.provider_usersignup(data).catch(console.log);
        if(!this.props.loading){
        if(this.props.error){
            return this.setState({auth_error:this.props.error,auth_action:'try again'});
        };
        //set message
        this.props.setMessage('Login into your newly created account');
        return this.props.setLogin(true);
        };

    };

    onGoogleError = () => this.setState({auth_error:'Some error occurred,Please try again'});

    onSubmit = async e => {
        e.preventDefault();
        
        const {firstname,lastname,email,phone,password,location} = this.state;
        this.setState({error:''});

        if(!firstname || !lastname || !email || !phone || !password || !location) return this.setState({
            error:'Fill out all the fields'
        });
        if(!phone.startsWith('7') || phone.length !== 9) return this.setState({
            error:'Use the correct format for phone number'
        });
        if(password.length < 6 ) return this.setState({
            error:'Minimum six characters for password'
        });

        this.setState({action:'loading'});
        //send the data
        let response = await send().catch(console.log);
        const data = {firstname,lastname,email,phone,password,location,response};
        await this.props.user_signup(data).catch(console.log);
        if(this.props.error) return this.setState({action:'create account',step:2,error:this.props.error});
        if(this.props.success && this.props.message)this.setState({
           firstname:'',lastname:'',email:'',phone:'',password:'',message:this.props.message,error:'',
           location:''
        });
        
        //set message
        this.props.setMessage('Login into your newly created account');
        return this.props.setLogin(true);
    };

    //handling the switch 
    renderSwitch = () => {
        switch(this.state.step){
            case 1:
                return (
                <NameFields firstname={this.state.firstname} 
                lastname={this.state.lastname} 
                handleChange={this.onChange} 
                handleNextStep={this.handleNextStep}
                steps={this.state.max_step}
                 />
                )
            case 2:
                return (
                <ContactFields email={this.state.email} 
                phone={this.state.phone}
                handleChange={this.onChange}
                handleNextStep={this.handleNextStep}
                handlePrevStep={this.handlePrevStep}
                error={this.state.error}
                steps={this.state.max_step}
                />
                )
            case 3:
                return (
                    <UserFields location={this.state.location}
                    password={this.state.password}
                    handleChange={this.onChange}
                    handleNextStep={this.handleNextStep}
                    handlePrevStep={this.handlePrevStep}
                    action={this.state.action}
                    steps={this.state.max_step}
                    />
                )
            default:
                return (
                    <NameFields firstname={this.state.firstname} 
                    lastname={this.state.lastname} 
                    handleChange={this.onChange} 
                    handleNextStep={this.handleNextStep}
                    steps={this.state.max_step}
                     />
                    )
        }
    }

    render(){
    return (
        <section>
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
            
                    <h3 className="auth_card-title">Register</h3>
                    <div className="auth_card-social-media">
                        <div className="auth_card-social">
                            <FacebookLogin
                            appId="240694590428080"
                            textButton=" Signup with Facebook"
                            cssClass="auth_card-facebook"
                            icon="fa-facebook"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={this.onFacebookSignup}
                            />
                        </div>
                        <div className="auth_card-social">
                            <GoogleLogin
                            clientId="312048788442-g8o280gcc8mbs4qaqaeureh4facgr5q5.apps.googleusercontent.com"
                            buttonText="Signup with Google"
                            onSuccess={this.onGoogleSignup}
                            onFailure={this.onGoogleError}
                            cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        {
                            this.state.auth_action === "loading" ? (
                                <div className="auth_card-social">
                                    <button className="btn btn-outline-success">Loading...</button>
                                </div>
                            ) : null
                        }
                    </div>
                    {
                        this.state.auth_error ? (
                            <div className="alert alert-danger">
                                {this.state.auth_error}
                            </div>
                        ) : null
                    }
                    <form onSubmit={this.onSubmit}>
                    {
                        this.renderSwitch()
                    }
                    </form>
                </div>
                <div className="col-12 col-sm-12 col-md-12 text-center">
                <span style={{cursor:'pointer'}} onClick={() => this.props.setLogin(true)}>already have an account</span>
                </div>
            </div>
            
    </section>
)};
};
const mapStateToProps = state => ({
    loading:state.user.loading,
    error:state.user.error,
    success:state.user.success,
    message:state.user.message,
    token:state.user.token,
    user:state.user.user
});
const dispatchToProps = {
    user_signup,
    provider_usersignup,
    fetchUser
}
export default connect(mapStateToProps,dispatchToProps)(Signup);