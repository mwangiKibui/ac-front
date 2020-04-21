//the filters for mp... the categories shall be held in the categories

//react
import React from 'react';  
//third-party
import classnames from 'classnames';
//components
import Collapse from '../../shared/Collapse';
import FilterCategories from './FilterCategories';

const WidgetFilters = ({offcanvas}) => {
    
    const filter_view = <FilterCategories />;
    const filter_list = (
        <div className="widget-filters__item">
            <Collapse
               toggleClass="filter--opened"
               render={({toggle,setItemRef,setContentRef}) => (
                   <div className="filter filter--opened" ref={setItemRef}>
                   
                   <div className="filter__body" ref={setContentRef}>
                      <div className="filter__container">
                          {filter_view}
                      </div>
                   </div>
                   </div>
               )}
               />
        </div>
    );
    const classes = classnames('widget-filters widget',{
        'widget-filters--offcanvas--always':offcanvas === "always",
        'widget-filters--offcanvas--mobile':offcanvas === "mobile"
    });

    return (
        <div className={classes}>
            <h4 className="widget-filters__title">Categories</h4>
            <div className="widget-filters__list">
                {filter_list}
            </div>
        </div>
    );

};
WidgetFilters.defaultProps = {
    offcanvas:'mobile'
}
export default WidgetFilters;