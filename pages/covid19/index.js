//React
import React from 'react';
//components
import {fetchData,fetchcountries} from '../../store/covid19';
import Covid19 from '../../components/covid19';
//shared-components
import Layout from '../../components/Layout';
import Meta from '../../partials/seo-meta';

const Index = (props) =>  {
    
    return  (
        <Layout>
        <Meta
        title="Corona Virus Outbreak. | allcomrades cares"
        description="Get realtime data of infected,recovered and death cases resulting from covid19 from all over the world"
        url="https://allcomrades.co.ke/covid19"
        image="/static/images/nba.webp"
        />
        <section className="covid19">
            <div className="container">
                <Covid19 countries={props.countries} confirmed={props.confirmed} recovered={props.recovered}
                deaths={props.deaths} lastUpdate={props.lastUpdate}/>
            </div>
        </section>
        </Layout>
    )
};

Index.getInitialProps = async ({store}) => {

    await store.dispatch(fetchData());
    await store.dispatch(fetchcountries());
    let countries = store.getState().covid19.countries;
    let confirmed = store.getState().covid19.confirmed;
    let recovered = store.getState().covid19.recovered;
    let deaths = store.getState().covid19.deaths;
    let lastUpdate = store.getState().covid19.last_update;
    return {
        countries,confirmed,recovered,deaths,lastUpdate
    }
};

export default Index;