//React
import React from 'react';
//components
// import {fetchData,fetchcountries} from '../../store/covid19';
import Covid19 from '../../components/covid19';
//shared-components
import Layout from '../../components/Layout';
import BreadCrumb from '../../components/shared/breadcrumbs';
import Meta from '../../partials/seo-meta';


const Index = (props) =>  {
    
    return  (
        <Layout>
        <Meta
        title="Corona Virus Outbreak"
        description="Get realtime data of infected,recovered and death cases resulting from covid19 from all over the world"
        url="https://allcomrades.co.ke/covid19"
        image="https://karu-api.s3.amazonaws.com/adverts/1587370699472.jpeg"
        />
        <section className="covid19">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BreadCrumb 
                        breadcrumb={[
                            {title:'Home',url:'/'}
                        ]}
                        />
                    </div>
                </div>
                <Covid19 />
            </div>
        </section>
        </Layout>
    )
};

// Index.getInitialProps = async ({store}) => {

//     await store.dispatch(fetchData());
//     await store.dispatch(fetchcountries());
//     let countries = store.getState().covid19.countries;
//     let confirmed = store.getState().covid19.confirmed;
//     let recovered = store.getState().covid19.recovered;
//     let deaths = store.getState().covid19.deaths;
//     let lastUpdate = store.getState().covid19.last_update;
//     return {
//         countries,confirmed,recovered,deaths,lastUpdate
//     }
// };

export default Index;