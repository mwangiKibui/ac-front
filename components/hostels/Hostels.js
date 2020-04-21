//React
//The main Looper
import React from 'react';
//third-party
import {ClipLoader} from 'react-spinners';
//components
import HostelCard from '../shared/HostelCard';


const Hostels = ({hostels,loading}) => {

    return (
           <>
            {
                loading ? (
                    <div className="col-12 col-sm-12 mt-3 mb-3 text-center" style={{width:'100%'}}>
                        <ClipLoader size="30" color="#009933" />
                    </div>
                ) : (
                    hostels.map((hostel,index) => (
                        <div className="col-12 col-sm-3" key={index}>
                            <HostelCard data={hostel} />
                        </div>
                    ))
                )
            }
           </>
    )

};

export default Hostels;