//react
import React from 'react';
//core-components
import Head from 'next/head';

/**
 * The data shall be fed here directly
 * @param {*} props 
 */

const Meta = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content=""/>
        <meta name="og:description" property="og:description" content={props.description}/>
        <meta name="og:site_name" content="allcomrades platform" />
        <meta name="og:url" content={props.url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc}/>
        <meta name="twitter:site" content={props.url} />
        <meta name="twitter:creator" content="allcomrades platform" />
        <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/favicon.ico" />        
        <meta property="og:image" content={props.image} />
        <meta name="twitter:image" content={props.image} />
    </Head>
);

Meta.defaultProps = {
    description:'A comrades platform for student marketplace, business and influencer marketing and much more',
    url:'https://allcomrades.co.ke',
    title:'allcomrades platform',
    desc:'A platform for karatina university students to sell and interact with businesses.',
    image:'https://karu-api.s3.amazonaws.com/adverts/1587206512007.webp'
}
export default Meta;