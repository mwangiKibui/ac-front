//react
import React, { useState } from 'react';
//third-party
import { connect } from 'react-redux';
//components
import CategorySidebar from '../widgets/mp/Sidebar';
import {sidebarClose,sidebarOpen} from '../../store/sidebar';
import Items from './Items';

const MarketPlace = ({products,services,sidebarOpen,columns}) =>  {
    const [items] = useState([...products,...services]);
    const offcanvas = columns === 3 ? 'mobile' : 'always';
    return (
        <>
            <div className="row">
                {/** mobile */}
                <div className="d-block d-sm-none d-md-none">
                    <div className="col-12">
                        <button className="btn btn-outline-success" onClick={() => sidebarOpen() }>show categories</button>
                        <CategorySidebar offcanvas={offcanvas}/>
                    </div>
                    <Items items={items} />
                </div>
                {/** desktop */}
                <div className="d-none d-sm-block d-md-block">
                    <div className="col-sm-3 col-md-3">
                        <CategorySidebar offcanvas={offcanvas}/>
                    </div>
                    <div className="col-sm-9 col-md-9">
                     <Items items={items} />
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