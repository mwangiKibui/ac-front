//React
import React,{useState} from 'react';
//core-components
import BlockHeader from '../shared/BlockHeader';
//shared components
import SellerCard from '../shared/SellerCard';

const BlockSellers = ({sellers}) => {
    const [_sellers] = useState(sellers.slice(0,8));
    return (
        <section className="blockSellers">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Top sellers" />
                    </div>
                    {
                        _sellers.map((seller,i) => (
                            <div className="col-12 col-sm-3 col-md-3" key={i}>
                                <SellerCard data={seller} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default BlockSellers;