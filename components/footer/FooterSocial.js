// react
import React from 'react';
//core-components
import Head from 'next/head';

const  FooterSocial = ()  => {
    const socialLinks = [
        {
            key: 'facebook',
            url: 'https://www.facebook.com/allcomrades.platform.33',
            iconClass: 'fab fa-facebook-f',
        },
        {
            key: 'twitter',
            url: 'https://www.twitter.com/allcomradespla1',
            iconClass: 'fab fa-twitter',
        },
        {
            key: 'youtube',
            url: 'https://www.youtube.com/channel/UCJ4oycg-pCyiOCbPA3oWPhw?view_as=subscriber',
            iconClass: 'fab fa-youtube',
        },
        {
            key: 'instagram',
            url: 'https://www.instagram.com/all_comrades/',
            iconClass: 'fab fa-instagram',
        }
    ];

    const socialLinksList = socialLinks.map((item) => (
        <li key={item.key} className={`footer-newsletter__social-link footer-newsletter__social-link--${item.key}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={item.iconClass} />
            </a>
        </li>
    ));

    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        </Head> 
        <div className="site-footer__widget footer-newsletter">
            <h5 className="footer-newsletter__title">Social Media</h5>
            <div className="footer-newsletter__text footer-newsletter__text--social">
                Follow us on social networks
            </div>
            <ul className="footer-newsletter__social-links">
                {socialLinksList}
            </ul>
        </div>
        </>
    );
}
export default FooterSocial;