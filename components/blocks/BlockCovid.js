//the covid 2020 advert
//React
import React from 'react';
//third-party
import Link from 'next/link';
//components

const BlockCovid = () => {
    return (
        <section className="advert" style={{backgroundImage:`url(/static/images/covid19.webp)`}}>
            <div className="advert_overlay">
            <div className="advert_content">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">                        
                            <h3 className="advert_content_heading">
                                Realtime statistics for infected, recovered and death cases of Covid19 all around the world. 
                            </h3>
                            <h4 className="advert_content_sub-heading">
                                <b>And your country in particular!.</b>
                            </h4>
                            <div className="advert_content_links">
                                <Link href={`/covid19`} >
                                    <a className="btn btn-outline-success">view now</a>
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

export default BlockCovid;