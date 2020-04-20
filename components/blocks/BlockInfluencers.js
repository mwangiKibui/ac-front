//React
import React from 'react';
//core-components
import BlockHeader from '../shared/BlockHeader';
//shared components
import InfluencerCard from '../shared/InfluencerCard';

const BlockInfluencers = ({influencers}) => {
    return (
        <section className="blockInfluencers">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="People you Follow"/>
                    </div>
                    {
                        influencers.map((influencer,i) => (
                            <div className="col-12 col-sm-3 col-md-3" key={i}>
                                <InfluencerCard data={influencer} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default BlockInfluencers;