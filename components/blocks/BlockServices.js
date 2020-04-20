//React
import React from 'react';
//core-components
import BlockHeader from '../shared/BlockHeader';
//shared components
import ServiceCard from '../shared/ServiceCard';

const BlockServices = ({services}) => {
    return (
        <section className="blockServices">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Services Offered" link={'/services'}/>
                    </div>
                    {
                        services.map((service,i) => (
                            <div className="col-12 col-sm-3 col-md-3" key={i}>
                                <ServiceCard data={service} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default BlockServices;