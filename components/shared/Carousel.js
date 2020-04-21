// react
import React, { Component } from 'react';
// third-party
import classNames from 'classnames';
import {IoIosArrowDropright,IoIosArrowDropleft} from 'react-icons/io';
//cards
import ProductCard from './ProductCard';
import HostelCard from './HostelCard';
import BsCard from './BsCard';
import InfluencerCard from './InfluencerCard';
import ServiceCard from './ServiceCard';
import SlickWithPreventSwipeClick from './SlickWithPreventSwipeClick';

import {slickSettings} from '../../partials/data';

class Carousel extends Component {
    state={
        data:this.props.data
    }
    handleNextClick = () => {
        if (this.slickRef) {
            this.slickRef.slickNext();
        }
    };

    handlePrevClick = () => {
        if (this.slickRef) {
            this.slickRef.slickPrev();
        }
    };

    setSlickRef = (ref) => {
        this.slickRef = ref;
    };

    dataColumns() {
        const columns = [];
    
        const { rows } = this.props;
        let { data } = this.state;

        if (rows > 0) {
            data = data.slice();
            while (data.length > 0) {
                columns.push(data.splice(0, rows));
            }
        };
        return columns;
    };

    render() {
        const {card,setPending,deleteAction} = this.props;
 
        const blockClasses = classNames('block block-products-carousel');

        const columns = this.dataColumns().map((column, index) => {
            const data = column.map((data) => (
                <div key={data._id} className="block-products-carousel__cell">
                    {
                       card === "products" && <ProductCard data={data} setPending={setPending} delete={deleteAction} actions={this.props.actions}/>
                    }
                    {
                       card === "hostels"  && <HostelCard data={data} />
                    }
                    {
                        card === "bs" && <BsCard data={data} setPending={setPending} delete={deleteAction}/>
                    }
                    {
                        card === "influencers" && <InfluencerCard data={data} />
                    }
                    {
                        card === "services" && <ServiceCard data={data} />
                    }
                </div>
            ));

            return (
                <div key={index} className="block-products-carousel__column">
                    {data}
                </div>
            );
        });

        

        return (
            <div className={blockClasses} >
                <div >
                <div>
                    <div className="block-header__arrows">
                    <div className="block-header__arrows-list">
                    <button className="block-header__arrow block-header__arrow--left" type="button" onClick={this.handlePrevClick}>
                        <i className="fas fa-arrow-left block-header__arrow-icon-left" />
                    </button>
                    <button className="block-header__arrow block-header__arrow--right" type="button" onClick={this.handleNextClick}>
                        <i className="fas fa-arrow-right block-header__arrow-icon-right" />
                    </button>
                    </div>
                    </div>
                    <div className="block-products-carousel__slider">

                        <SlickWithPreventSwipeClick
                            ref={this.setSlickRef}
                            {...slickSettings}
                        >
                            {columns}
                        </SlickWithPreventSwipeClick>
                    </div>
                </div>
                </div>
            </div>
        );
    }
};
Carousel.defaultProps = {
    rows: 1,
    data: [],
    groups: [],
    setPending:undefined,
    deleteAction:false,
    actions:false
};
export default Carousel;