//React
import React from 'react';
//Third-parties
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import {ThemeProvider} from 'styled-components';
//custom
import rootReducer from '../store';
//the bs styles

const makeStore = (initialState,options) => {
    return createStore(rootReducer,initialState,compose(
        applyMiddleware(thunk),
    ));
};
const theme = {

}

class MyApp extends App {
    componentDidMount(){
        const jssStyles = document.querySelector('#jss-server-side');
        if(jssStyles && jssStyles.parentNode){
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }
    render(){
        const {Component,pageProps,store} = this.props;
        return (
            
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
            
        )
    }
};

export default withRedux(makeStore)(MyApp);