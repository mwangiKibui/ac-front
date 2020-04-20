// react
import React, { Component } from 'react';
//thid-party
import {Link} from 'react-scroll';

class  BlockHome extends Component {
    
    
    
    render(){
    return (
        
        <section className="home" style={{backgroundImage:`url(/static/images/nba.webp)`}}>
            <div className="home_overlay">
            <div className="home_content"> 
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 text-left">
                <div className="slideshow_content">

                    <div className="slideshow_content_title">
                    <h2>A comrades platform, </h2>
                    <h2>For the rest of us.</h2>
                    </div>

                    <div className="slideshow_content_action">
                    <Link to="mp"
                    className="btn btn-info"
                    duration={500}
                    smooth={true}
                    delay={1}
                    >
                        Explore our services
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