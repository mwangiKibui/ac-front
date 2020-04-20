//React
import React from 'react';
//third-party
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
//components

const social_auth = (props) => {
    return (
        <>
        <div className="d-none d-sm-block d-md-block">
        <div className="auth_card-social-media">
            <div className="auth_card-social">
                <FacebookLogin
                appId="240694590428080"
                textButton=" Login with Facebook"
                icon="fa-facebook"
                cssClass="auth_card-facebook"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.onFacebookLogin}
                />
            </div>
            <div className="auth_card-social"> 
                <GoogleLogin
                clientId="312048788442-g8o280gcc8mbs4qaqaeureh4facgr5q5.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={props.onGoogleLogin}
                onFailure={props.onGoogleError}
                cookiePolicy={'single_host_origin'}
                />
            </div>
            {
                props.action === "loading" ? (
                    <div className="auth_card-social">
                        <button className="btn btn-outline-success">Loading..</button>
                    </div>
                ) : null
            }
        </div>
        </div>
        <div className="d-block d-sm-none d-md-none">
            <div className="row">
                <div className="col-12">
                <FacebookLogin
                appId="240694590428080"
                textButton=" Login with Facebook"
                icon="fa-facebook"
                cssClass="auth_card-facebook"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.onFacebookLogin}
                /> 
                <GoogleLogin
                clientId="312048788442-g8o280gcc8mbs4qaqaeureh4facgr5q5.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={props.onGoogleLogin}
                onFailure={props.onGoogleError}
                cookiePolicy={'single_host_origin'}
                />
                </div>
            </div>
            </div>
        </>
    )
};

export default social_auth;