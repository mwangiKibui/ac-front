//react
import React,{Component} from 'react';
//third-party
import { connect } from 'react-redux';
import Link from 'next/link';
//components
import { user_login,fetchUser,provider_userlogin } from '../../store/user';
import SocialAuth from './SocialAuth';
class  Login extends Component  {

    state = {
        email:'',
        password:'',
        redirect:'',
        action:'login',
        auth_action:'',
        url:this.props.url,
        error:'',
    };
    
    onChange = e => {
        return this.setState({[e.target.name] : e.target.value})
    };

    onGoogleLogin = async response => {
       //when we are logging in we only need the email
       let email = response.Pt.yu;
       this.setState({auth_action:'loading'});
       await this.props.provider_userlogin({email}).then(async () => {

        //check error
        if(this.props.error){
        return this.setState({error:this.props.error,auth_action:'try again'})
        };
        //load the user
        await this.props.fetchUser(this.props.token).then(() => {

            this.setState({redirect:true,auth_action:'logged in'});
            return this.props.toggle();

        })

       }).catch(console.log);

    };

    onFacebookLogin = async response => {
       //when we are logging in we only need the email
       let email = response.email;
       this.setState({auth_action:'loading'});
       await this.props.provider_userlogin({email}).then( async () => {

        //we check whether we have an error
        if(this.props.error){
            return this.setState({error:this.props.error,auth_action:'try again'})
        };
        //load the user
        await this.props.fetchUser(this.props.token).then(() => {

        this.setState({redirect:true,auth_action:'logged in'});
        return this.props.toggle();

        });

       }).catch(console.log);
    };

    onGoogleError = () => this.setState({error:'Some error occurred,Please try again'});

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''})
        const {email,password} = this.state;
        if (!email || !password) return this.setState({error:'Fill out all the fields'});
        //we send the data
        let data = {email, password};
        this.setState({action:'loading'});

        await this.props.user_login(data).then(async () => {

            if(this.props.error) return this.setState({error:this.props.error,action:'login'});
            //load the user
            await this.props.fetchUser(this.props.token).then(() => {

                this.setState({email:'',password:'',action:'Logged in!'});
                       
                return this.props.toggle();

            })

        }).catch(console.log);
    };

    render(){
        return (
            <section>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 card_container">                        
                                <h3 className="modal_heading">Login to your account</h3>                                
                                <SocialAuth onFacebookLogin={this.onFacebookLogin} 
                                onGoogleLogin={this.onGoogleLogin}
                                onGoogleError={this.onGoogleError}
                                action={this.state.auth_action}
                                />                                                         
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        {
                                            this.state.error && <div className="alert alert-danger text-white">
                                                {this.state.error}
                                            </div>
                                        }
                                    </div>
                                    <div className="form-group user_login">
                                        <label htmlFor="login-email">Email address</label>
                                        <input
                                            id="login-email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            name="email"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                        />
                                    </div>
                                    <div className="form-group user_login">
                                        <label htmlFor="login-password">Password</label>
                                        <input
                                            id="login-password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                        />
                                        {/* <small className="form-text text-muted">
                                            <Link to="/">Forgotten Password</Link>
                                        </small> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-sm btn-outline-info" value={
                                            this.state.action
                                        } />
                                    </div>
                                </form>
                                <div className="form_links">
                                    <p className="text-left"><Link to={`/account/user/recover_password`}>forgot password</Link></p>
                                    <span className="text-right"style={{cursor:'pointer'}} onClick={() => this.props.setLogin(false)}>create an account</span>
                                </div>
                            </div>
                        </div>
            </section>
        )
    };
};
const mapStateToProps = state => ({
    loading: state.user.loading,
    error: state.user.error,
    success: state.user.success,
    token: state.user.token,
    user:  state.user.user
});
const dispatchToProps = {
    user_login,
    fetchUser,
    provider_userlogin
};
Login.defaultProps = {
    url:''
}
export default connect(mapStateToProps, dispatchToProps)(Login);