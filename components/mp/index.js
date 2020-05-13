//react
import React, { useState} from 'react';
//third-party
import { connect } from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import CategorySidebar from '../widgets/mp/Sidebar';
import {sidebarClose,sidebarOpen} from '../../store/sidebar';
import Items from './Items';
import Pagination from '../Pagination';

const MarketPlace = ({products,services,sidebarOpen,columns}) =>  {
    const [items] = useState([...products,...services]);
    const [pending,setPending] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);

    const paginate = number => {

        setTimeout(() => {
            setCurrentPage(number);            
            return setPending(false);
        },1000);

        setPending(true);
        
    };

    const offcanvas = columns === 3 ? 'mobile' : 'always';
    return (
        <>
                {/** mobile */}
                <div className="d-block d-sm-none d-md-none">
                    <div className="row">
                    <div className="col-12">
                        <button className="btn btn-outline-success" onClick={() => sidebarOpen() }>show categories</button>
                        <CategorySidebar offcanvas={offcanvas}/>
                    </div>
                    {
                        pending  ? (
                            <div className="col-12 text-center">
                                <ClipLoader size="30px" color="#009933" />
                            </div>
                        ) : (
                            <Items items={items} currentPage={currentPage}/>
                        )
                    }
                    <div className="col-12">
                        <Pagination elementsPerPage={8} totalElements={items.length} paginate={paginate}
                        currentPage={currentPage}/>
                    </div> 
                    </div> 
                </div>
                {/** desktop */}
                <div className="d-none d-sm-block d-md-block">
                    <div className="row">
                    <div className="col-sm-2 col-md-2">
                        <CategorySidebar offcanvas={offcanvas}/>
                    </div>
                    <div className="col-sm-9 col-md-9">
                        <div className="row">
                            {
                                pending  ? (
                                    <div className="col-sm-12 col-md-12 text-center">
                                        <ClipLoader size="30px" color="#009933" />
                                    </div>
                                ) : (
                                    <Items items={items} currentPage={currentPage}/>
                                )
                            }                            
                        </div>
                        <div className="col-sm-12 col-md-12">
                        <Pagination elementsPerPage={8} totalElements={items.length} paginate={paginate}
                        currentPage={currentPage}/>
                        </div>                 
                    </div>
                    
                    </div>
                </div>
        </>
    )
};


const dispatchToProps = {
    sidebarClose,
    sidebarOpen
};
MarketPlace.defaultProps = {
    columns:3,
    sidebarPosition:'start'
}
export default connect(null, dispatchToProps)(MarketPlace);