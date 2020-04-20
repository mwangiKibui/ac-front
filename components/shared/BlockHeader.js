// react
import React from 'react';
import Link from 'next/link';


function BlockHeader(props) {
    let {
        title,link
    } = props;
    return (
        <>
        <div className="block-header">
            <h3 className="block-header__title">{title}</h3>
            {
                link ? (
                    <div className="block-header__link">
                    <Link href={link} >
                        <a className="btn btn-outline-success">view all</a>
                    </Link>
                    </div>
                ) : null
            }
        </div>
        </>
    );
}


BlockHeader.defaultProps = {
    link:false
};
export default BlockHeader;