//React
import React,{useState} from 'react';
//core-components
//third-party
import {ClipLoader} from 'react-spinners';
//components
import ProductCard from '../shared/ProductCard';
import Pagination from '../Pagination';

const Items = (props) => {

   
    const [itemsPerPage] = useState(props.page ? 8 : 6);
    const [items] = useState(props.items);
    const [currentPage,setCurrentPage] = useState(1);
    const [pending,setPending] = useState(false);
    

    const indexOfLastElement = itemsPerPage * currentPage;
    const indexOfFirstElement = indexOfLastElement - itemsPerPage;
    const current_items = items.slice(indexOfFirstElement,indexOfLastElement);

    const paginate = number => {
        return setTimeout(() => {
            setPending(true);
            setCurrentPage(number);
            return setPending(false);
        },2000);
    };

    return (
        <div className="row">
            {
                pending ? (
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                        <ClipLoader color="#009933" size="30px" ></ClipLoader>
                    </div>
                ) : (
                    <>
                    {
                        current_items.map((item,i) => (
                            <div className={`col-12 ${props.page ? 'col-sm-3 col-md-3' : 'col-sm-4 col-md-4'}`} key={i}>
                                <ProductCard data={item}/>
                            </div>
                        ))
                    }
                    <div className="col-12 col-sm-12 col-md-12">
                        <Pagination paginate={paginate} currentPage={currentPage} totalElements={items.length}
                         elementsPerPage={itemsPerPage}/>
                    </div>
                    </>
                )
            }
        </div>
    )
};
Items.defaultProps = {
    page:false
}
export default Items;