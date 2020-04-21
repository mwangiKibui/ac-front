//React
import React from 'react';
//third-party
import cx from 'classnames';

const Pagination = ({elementsPerPage,totalElements,paginate,currentPage}) => {

    const pageNumbers = [];
    for(let i = 1;i <= Math.ceil(totalElements/elementsPerPage); i++){
        pageNumbers.push(i);
    };
    console.log(`page no`,pageNumbers)
    return (
        <nav className="pagination_nav">
            <ul className="pagination">
            {
                pageNumbers.map((number =>                     
                    {
                        const classes = cx('page-item',{"page-item active":number === currentPage})
                    return (
                    <li key={number} className={classes}>
                        <span onClick={() => paginate(number)} className="page-link">
                            {number}
                        </span>
                    </li>
                    )
            }))
            }
            </ul>
        </nav>
    )
};

export default Pagination;