// react
import React, { Component } from 'react';
//thid-party
import {Link} from 'react-scroll';

class  BlockHome extends Component {
    
    
    
    render(){
    return (
        
        <section className="home" style={{backgroundImage:`url(/static/images/home.jpg)`}}>
            <div className="home_overlay">
            <div className="home_content"> 
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 text-left">
                <div className="slideshow_content">

                    <div className="slideshow_content_title">
                    <h2>Post your Product, </h2>
                    <h2>for free.</h2>
                    </div>

                    <div className="slideshow_content_action">
                    <Link to="mp"
                    className="btn btn-info"
                    duration={500}
                    smooth={true}
                    delay={1}
                    >
                        add a product
                    </Link>
                    </div>
                
                </div>
                </div>
                </div>
            </div>                        
            </div>
        </div>
        </section>
        
    );
}};

export default BlockHome;