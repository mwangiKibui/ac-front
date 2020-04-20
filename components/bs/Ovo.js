//React 
import React from 'react';
//third-party
//components
import BlockHeader from '../shared/BlockHeader';
import BsCard from '../shared/BsCard';
import Order from './Order';
import Review from './Review';

const Ovo = ({meals,drinks,offers}) => {

    return (
        <section className="bs">
        {/**  if the value is not equal to all we shall have it display either meals,drinks or offers */}
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12">

                    
                    <div className="offers" id="offers">
                        <BlockHeader title={'Offers from Ovo'} link={'/bs/ovo_fries/offers'} />
                        <div className="row">
                        {
                            offers.map((offer,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                    <BsCard data={offer} />
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    
                    <div className="meals" id="meals">
                        <BlockHeader title={'Meals from Ovo'} link={'/bs/ovo_fries/meals'} />
                        <div className="row">
                        {
                            meals.map((meal,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                <BsCard data={meal} />
                                </div>
                            ))
                        }
                        </div>
                        
                    </div>

                    <div className="drinks" id="drinks">
                        <BlockHeader title={'Drinks from Ovo'} link={'/bs/ovo_fries/drinks'} />
                        <div className="row">
                        {
                            drinks.map((drink,index) => (
                                <div className="col-12 col-sm-4 col-md-4" key={index}>
                                <BsCard data={drink} />
                                </div>
                            ))
                        }
                        </div>
                    </div>

                    
        </div>
        
        </div>

        <div className="row">

        <div className="col-12 col-sm-6 col-md-6 mt-5">
            <Order />
        </div>

        <div className="col-12 col-sm-6 col-md-6 mt-5">
            <Review />
        </div>

        <div  className="col-12 col-sm-12 col-md-12 text-center mt-5">
            <p className="bs-location">
                Ovo fries inn is located at Everglades past Izzie place on your way to Gitunduti town.
            </p>
        </div>


        </div>
        
        </section>
    )
};
Ovo.defaultProps = {
    type:'all'
}
export default Ovo;