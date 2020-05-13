//React
import React from 'react';
//core-components
import Router from 'next/router';
//Third-parties
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import {ThemeProvider} from 'styled-components';
import PageLoader from '../components/PageLoader';
//custom
import rootReducer from '../store';
//the bs styles

const makeStore = (initialState,options) => {
    return createStore(rootReducer,initialState,compose(
        applyMiddleware(thunk),
    ));
};
const theme = {

};


class MyApp extends App {
    state = {
        loaded : false
    }
    componentDidMount(){
        const jssStyles = document.querySelector('#jss-server-side');
        if(jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles)
        };
        this.setState({loaded:true})
        Router.events.on('routeChangeStart',() => this.setState({loaded:false}));
        Router.events.on('routeChangeComplete',() => this.setState({loaded:true}));
    };
    // componentWillUnmount(){
    //     Router.events.off('routeChangeStart',() => this.setState({loaded:true}));
    // }
    render(){
        const {Component,pageProps,store} = this.props;
        const {loaded} = this.state;
        return (
            
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        {
                            !loaded ? (
                                <PageLoader />
                            ) : (
                                <Component {...pageProps} />
                            )
                        }
                    
                    </ThemeProvider>
                </Provider>
            
        )
    }
};

export default withRedux(makeStore)(MyApp);