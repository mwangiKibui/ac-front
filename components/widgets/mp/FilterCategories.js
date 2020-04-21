//we shall have the filter categories here...

//react
import React,{useState} from 'react';
//third-party
import {connect} from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';
//components
//we shall pass a prop to recognize whether it is account_mp -> user dashboard or mp -> platform marketplace
const FilterCategories = (props) =>  {
    const [categories] = useState(props.categories.map(cat => cat.name));
    const [products] = useState([...props.premium,...props.basic]);

    const catList = categories.map((category,index) => {
        let classes = classNames('filter-categories__item');
        return (
        <li key={index} className={classes}>
            <Link href={`/market_place/${category}`}>
                <a>{category}</a>
            </Link>
            <div className="filter-categories__counter">
                { 
                category.startsWith('services') ? props.services.length :
                products.filter(prod => prod.type === category).length
                }
            </div>
        </li>
        )
    });
    
    
    return (
        <div className="filter-categories">
            <div className="filter-categories__list">
                {catList}
            </div>
        </div>
    )
    
};
const mapToProps = state => ({
    categories:state.categories.categories,
    basic:state.products.basic,
    premium:state.products.premium,
    services:state.services.services
});
export default connect(mapToProps,null)(FilterCategories);