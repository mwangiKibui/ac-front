//This shows the related section for different pages
//React
import React from 'react';
//components
import BlockHeader from '../shared/BlockHeader';
import Carousel from '../shared/Carousel';
import MobileCarousel from '../shared/mobileCarousel';
import HostelCard from '../shared/HostelCard';
import ProductCard from '../shared/ProductCard';
import ServiceCard from '../shared/ServiceCard';
import InfluencerCard from '../shared/InfluencerCard';

const Related = ({title,data,card,carousel}) => {
    return (
        <>
        <div className="col-12 col-sm-12 col-md-12">

        <BlockHeader title={title} />
        {
            carousel ? (
        <>
        <div className="d-block d-sm-none d-md-none">
        <MobileCarousel title={title} data={data} card={card} />
        </div>
        <div className="d-none d-sm-block d-md-block">
        {
        data.length >= 3 && <Carousel title={title} data={data} card={card} />
        }
        {
        data.length < 3 && (
            <div className="row">
                {
                    data.map((element, index) => (
                        <div className="col-12 col-sm-3 col-md-3" key={index}>
                            {
                                card === "hostels" && ( <HostelCard data={element} /> ) 
                            }
                            {
                                card === "products" && ( <ProductCard data={element} /> )
                            }
                            {
                                card === "influencers" && (<InfluencerCard data={element} />)
                            }
                            {
                                card === "services" && (<ServiceCard data={element} /> )
                            }
                        </div>
                    ))
                }
            </div>
        )
        }
        </div>
        </>
        ) : (
        <div className="row">
        {
            data.map((element, index) => (
                <div className="col-12 col-sm-3 col-md-3" key={index}>
                    {
                        card === "hostels" && ( <HostelCard data={element} /> ) 
                    }
                    {
                        card === "products" && ( <ProductCard data={element} /> )
                    }
                    {
                        card === "influencers" && (<InfluencerCard data={element} />)
                    }
                </div>
            ))
        }
        </div>
        )}
        </div>
        </>
    )
};
Related.defaultProps = {
    carousel:true
}
export default Related;