//React
import React,{useState,useEffect} from 'react';
//core-components
//third-party
// import {ClipLoader} from 'react-spinners';
//components
import ProductCard from '../shared/ProductCard';

const Items = (props) => {

    const [itemsPerPage] = useState(8);
    const [items] = useState(props.items);
    const [current_items,setCurrent] = useState([]);
    const [currentPage] = useState(props.currentPage);
    useEffect(() => {
        const load_data = () => {
            setCurrent([]);
            const indexOfLastElement = itemsPerPage * currentPage;
            const indexOfFirstElement = indexOfLastElement - itemsPerPage;
            const _current_items = items.slice(indexOfFirstElement,indexOfLastElement);
            return setCurrent(_current_items);
        };
        load_data();
    },[props.currentPage]); 

    return (
        <>
        {
            current_items.map((item,i) => (
                <div className={`col-12 'col-sm-3 col-md-3`} key={i}>
                    <ProductCard data={item}/>
                </div>
            ))
        }        
        </>
    )
};
Items.defaultProps = {
    page:false
}
export default Items;