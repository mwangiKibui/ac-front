//this shall be the advert of the marketplace
//React
import React from 'react';
//third-party
import Link from 'next/link';
//components

const BlockAd = () => {
    return (
        <section className="advert" style={{backgroundImage:`url(/static/images/services.webp)`}}>
            <div className="advert_overlay">
            <div className="advert_content">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">                        
                            <h3 className="advert_content_heading">
                                Do you have a product or service you are selling while at home ? 
                            </h3>
                            <h4 className="advert_content_sub-heading">
                                Well, Make your fellow comrades know, Its easy!!
                            </h4>
                            <div className="advert_content_links">
                                <Link href={`account/store/service_form`} >
                                    <a className='btn btn-outline-success'>add a service</a>
                                </Link>
                                <Link href={`account/store/product_form`}>
                                    <a className="btn btn-outline-info">add a product</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default BlockAd;