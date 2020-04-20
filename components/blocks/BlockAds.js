//React
import React from 'react';
//core-components
import BlockHeader from '../shared/BlockHeader';
//shared components
import ProductCard from '../shared/ProductCard';

const BlockAds = ({products}) => {
    return (
        <section className="blockAds">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Trending Ads" link={'/products'}/>
                    </div>
                    {
                        products.map((product,i) => (
                            <div className="col-12 col-sm-3 col-md-3" key={i}>
                                <ProductCard data={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default BlockAds;