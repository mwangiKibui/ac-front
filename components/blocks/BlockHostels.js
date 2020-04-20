//React
import React,{useState} from 'react';
//core-components
import BlockHeader from '../shared/BlockHeader';
//shared components
import HostelCard from '../shared/HostelCard';

const BlockHostels = ({hostels}) => {
    const [_hostels] = useState(hostels.slice(0,4));
    return (
        <section className="blockHostels">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <BlockHeader title="Hostels" link={'/hostels'}/>
                    </div>
                    {
                        _hostels.map((hostel,i) => (
                            <div className="col-12 col-sm-3 col-md-3" key={i}>
                                <HostelCard data={hostel} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default BlockHostels;