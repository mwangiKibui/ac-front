//from here we shall be fetching a specific hostel
//react
import React from 'react';
//core-components
// import {useRouter} from 'next/router';
//components
import Layout from '../../components/Layout';
import {fetchHostel } from '../../store/hostels';
import Meta from '../../partials/seo-meta';

const Hostel = ({hostel}) => {

    return (
        <Layout>
            <Meta
            description={`${hostel['name']} on allcomrades platform`}
            url={`www.allcomrades.co.ke/platform/hostels/${hostel['slug']}`}
            title={`${hostel['name']}`}
            image={`${hostel['profiles'][0]}`}
            />
            <div className="hostel_page">
            <h3 className="hostel_page-heading">
                {hostel['name']}
            </h3>
            <img src={hostel['profiles'][0]} alt="" className="hostel_page_img" />
            </div>
        </Layout>
    )

};

Hostel.getInitialProps = async ({store,query}) => {
    /** we shall dispatch the process of finding a single hostel */
    await store.dispatch(fetchHostel(query.slug)).then(() => {});
    return {
        hostel:store.getState().hostels.hostel
    }
}

export default Hostel;