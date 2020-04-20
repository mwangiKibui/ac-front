// react
import React from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';


export default function Footer() {

    const quick_links = [ 
        { title: 'Market Place', url: '/platform/market_place' },
        { title: 'Hostels', url: '/platform/hostels' },
        { title: 'About Us', url: '/about_us' }
    ];

    return (
        <section id="footer">
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 text-white">
                            <FooterContacts />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 text-white">
                            <FooterLinks title="Quick links" items={quick_links} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 text-white">
                            <FooterSocial />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright text-white">
                        <span>@{new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
