// react
import React, { useEffect, useRef } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {FaCross} from 'react-icons/fa';

// application
import { sidebarClose } from '../../../store/sidebar';

// widgets
import WidgetFilters from './WidgetFilters';


function CategorySidebar(props) {
    const {
        sidebarClose,
        sidebarState,
        offcanvas,
    } = props;

    const classes = classNames('block block-sidebar', {
        'block-sidebar--open': sidebarState.open,
        'block-sidebar--offcanvas--always': offcanvas === 'always',
        'block-sidebar--offcanvas--mobile': offcanvas === 'mobile',
    });

    const backdropRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
        const media = matchMedia('(max-width: 991px)');
        let changedByMedia = false;

        const onChange = () => {
            if (offcanvas === 'mobile') {
                if (sidebarState.open && !media.matches) {
                    sidebarClose();
                }
                // this is necessary to avoid the transition hiding the sidebar
                if (!sidebarState.open && media.matches && changedByMedia) {
                    /** @var {HTMLElement} */
                    const backdrop = backdropRef.current;
                    /** @var {HTMLElement} */
                    const body = bodyRef.current;

                    backdrop.style.transition = 'none';
                    body.style.transition = 'none';

                    backdrop.getBoundingClientRect(); // force reflow

                    backdrop.style.transition = '';
                    body.style.transition = '';
                }
            }
        };

        if (media.addEventListener) {
            media.addEventListener('change', onChange);
        } else {
            media.addListener(onChange);
        }

        onChange();

        changedByMedia = true;

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener('change', onChange);
            } else {
                media.removeListener(onChange);
            }
        };
    }, [offcanvas, sidebarState.open, sidebarClose]);

    useEffect(() => {
        if (sidebarState.open) {
            const width = document.body.clientWidth;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${document.body.clientWidth - width}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [sidebarState.open]);

    return (
        <div className={classes}>
            <div className="block-sidebar__backdrop" ref={backdropRef} onClick={() => sidebarClose()} />
            <div className="block-sidebar__body" ref={bodyRef}>
                <div className="block-sidebar__header">
                    <div className="block-sidebar__title">Categories</div>
                    <button className="block-sidebar__close" type="button" onClick={() => sidebarClose()}>
                        <FaCross />
                    </button>
                </div>
                <div className="block-sidebar__item">
                    <WidgetFilters  offcanvas={offcanvas} />
                </div>
            </div>
        </div>
    );
}

CategorySidebar.propTypes = {
    offcanvas: PropTypes.oneOf(['always', 'mobile']),
};

CategorySidebar.defaultProps = {
    offcanvas: 'mobile'
};

const mapStateToProps = (state) => ({
    sidebarState: state.mp_sidebar,
});

const mapDispatchToProps = {
    sidebarClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySidebar);