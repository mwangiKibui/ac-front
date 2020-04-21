//React
import React,{useState} from 'react';
//core-components
//components
import {fetchHostels} from '../../store/hostels';
import Layout from '../../components/Layout';
import BlockHeader from '../../components/shared/BlockHeader';
import Pagination from '../../components/Pagination';
import BlockHostels from '../../components/hostels/Hostels';
import Meta from '../../partials/seo-meta';


const Hostels = (props) => {

    const [_hostels] = useState(props.hostels);
    const [hostelsPerPage] = useState(4);
    const [currentPage,setCurrentPage] = useState(1);
    const [pending,setPending] = useState(false);

    const indexOfLastElement = currentPage * hostelsPerPage;
    const indexOfFirstElement = indexOfLastElement - hostelsPerPage;
    const currentHostels = _hostels.slice(indexOfFirstElement,indexOfLastElement);

    const paginate = (page) => {
        return setTimeout(() => {
            setPending(true);
            setCurrentPage(page);
            return setPending(false);
        },1000);
    }

    return (
        <Layout>
            <Meta 
            title="Hostels around Main Campus"
            description="Easily secure hostels around main campus from your own comfort right here at allcomrades platform"
            url="https://allcomrades.co.ke/hostels"
            image={props.hostels[0]['profiles'][0]}
            />
            <section className="hostels">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Hostels around Main campus" />
                    </div>
                    <BlockHostels hostels={currentHostels} loading={pending} />

                    <div className="col-12 col-sm-12 col-md-12 text-center pagination_container" style={{width:'100%'}}>
                    <Pagination elementsPerPage={hostelsPerPage} totalElements={_hostels.length}
                    paginate={paginate} currentPage={currentPage} />
                    </div>

                </div>
            </div>
            </section>
        </Layout>
    )
};

Hostels.getInitialProps = async ({store}) => {
    await store.dispatch(fetchHostels());
    let hostels = store.getState().hostels.hostels;
    return {
        hostels
    }
};

export default Hostels;