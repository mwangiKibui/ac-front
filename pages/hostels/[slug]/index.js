//from here we shall be fetching a specific hostel
//react
import React from 'react';
//core-components
import {useRouter} from 'next/router';
//components
import Layout from '../../../components/Layout';
import Hostel from '../../../components/hostels/Hostel';
import {fetchSpecificHostel,fetchHostels,loadReviews} from '../../../store/hostels';
import Meta from '../../../partials/seo-meta';

const HostelDisplay = ({hostel,related,error}) => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <Layout>
            <Meta
            description={`${hostel['name']} on allcomrades platform`}
            url={`www.allcomrades.co.ke/platform/hostels/${hostel['slug']}`}
            title={`${hostel['name']} Hostels`}
            image={`${hostel['profiles'][0]}`}
            />
            <div className="container">
            <Hostel slug={slug} hostel={hostel} related={related} error={error}/>
            </div>            
        </Layout>
    )

};

HostelDisplay.getInitialProps = async ({store,query}) => {
    /** we shall dispatch the process of finding a single hostel */
    await store.dispatch(fetchSpecificHostel(query.slug)).then(() => {});
    await store.dispatch(fetchHostels());
    await store.dispatch(loadReviews(store.getState().hostels.hostel['reviews']));
    let hostels = store.getState().hostels.hostels;
    let hostel = store.getState().hostels.hostel;
    let error = store.getState().hostels.error;
    let loc_related = hostels.filter(hos => hos.slug !== query.slug && hos.location === hostel.location);
    let others_related = hostels.filter(hos => hos.slug !== query.slug && hos.location !== hostel.location);
    let related = [...loc_related,...others_related];
    
    return {
        hostel,related,error
    };
};

export default HostelDisplay;