//React
import React,{useState} from 'react';
//core-components
import Layout from '../../components/Layout';
//components
import {fetchProducts,fetchOvo} from '../../store/bs';
import Profile from '../../components/bs/Ovo';
import Meta from '../../partials/seo-meta';

const Ovo = (props) => {
    const [_meals] = useState(props.meals.slice(0,3));
    const [_drinks] = useState(props.drinks.slice(0,3));
    const [_offers] = useState(props.offers.slice(0,3));
    return (
        <Layout>
            <Meta
            title="Ovo fry's inn on allcomrades platform"
            description="Enjoy cool meals,drinks and offers at Ovo fry's by simply ordering from allcomrades platform."
            url="https://allcomrades.co.ke/bs/ovo_fries"
            image="https://karu-api.s3.amazonaws.com/adverts/1587386090100.jpg"
            />
            <section className="ovo_fries">
                <div className="container">
                <Profile meals={_meals} drinks={_drinks} offers={_offers} />
                </div>                
            </section>
        </Layout>
    )
};
Ovo.getInitialProps = async ({store}) => {
    await store.dispatch(fetchProducts());
    await store.dispatch(fetchOvo());
    let meals = store.getState().bs.meals;
    let drinks = store.getState().bs.drinks;
    let offers = store.getState().bs.offers;
    return {
        meals,drinks,offers
    }
};
export default Ovo;