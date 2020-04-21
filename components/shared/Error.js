//React
import React from 'react';
//core-components
import Link from 'next/link';
//third-party
import {FaHaykal} from 'react-icons/fa';

const Error = ({message,btn}) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
                <div className="error_section">
                      <FaHaykal className="error_section_icon" />
                      <h6 className="error_section_msg">{message}</h6>
                      {
                          btn ? (
                               <Link href={'/account/store/product_form'} >
                                   <a className="btn btn-outline-info">Upload yours now</a>
                               </Link>
                          ) : null
                      }
                </div>
            </div>
        </div>
    )
};


export default Error;