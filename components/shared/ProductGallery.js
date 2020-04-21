// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';

// application
import languages from '../../partials/i18n';
import {slickSettingsThumbnails,slickSettingsFeatured} from '../../partials/data';
import GallerySlick from './GallerySlick';


class ProductGallery extends Component {
    gallery;

    /** @var {Promise} */
    createGallery = null;

    imagesRefs = [];

    unmounted = false;

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            transition: false,
        };
    }

    componentDidMount() {
        this.createGallery = import('../../partials/photoswipe').then((module) => module.createGallery);

        // this is necessary to reset the transition state, because sometimes
        // react-slick does not trigger an afterChange event after a beforeChange event
        setTimeout(() => {
            this.setState(() => ({
                transition: false,
            }));
        }, 0);
    }

    componentDidUpdate(prevProps) {
        const { locale: prevLocale } = prevProps;
        const { direction: prevDirection } = languages[prevLocale];
        const { locale: currLocale } = this.props;
        const { direction: currDirection } = languages[currLocale];

        if (currDirection !== prevDirection) {
            // this is necessary to reset the transition state,
            // because when the direction changes, the afterChange event does not fire
            setTimeout(() => {
                this.setState(() => ({
                    transition: false,
                }));
            }, 0);
        }
    }

    componentWillUnmount() {
        if (this.gallery) {
            this.gallery.destroy();
        }

        this.unmounted = true;
    }

    getIndexDependOnDir(index) {
        const { images, locale } = this.props;
        const { direction } = languages[locale];

        // we need to invert index id direction === 'rtl' due to react-slick bug
        if (direction === 'rtl') {
            return images.length - 1 - index;
        }

        return index;
    }

    handleFeaturedClick = (event, index) => {
        if (!this.createGallery) {
            return;
        }

        event.preventDefault();

        const { images, locale } = this.props;
        const { direction } = languages[locale];
        const items = images.map((image) => ({
            src: image,
            msrc: image,
            w: 700,
            h: 700,
        }));

        if (direction === 'rtl') {
            items.reverse();
        }

        const options = {
            getThumbBoundsFn: (index) => {
                const dirDependentIndex = this.getIndexDependOnDir(index);

                if (!this.imagesRefs[dirDependentIndex]) {
                    return null;
                }

                const imageElement = this.imagesRefs[dirDependentIndex];
                const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                const rect = imageElement.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width,
                };
            },
            index: this.getIndexDependOnDir(index),
            bgOpacity: 0.9,
            history: false,
        };

        this.createGallery.then((createGallery) => {
            if (this.unmounted) {
                return;
            }

            this.gallery = createGallery(items, options);

            this.gallery.listen('beforeChange', () => {
                if (this.gallery && this.slickFeaturedRef) {
                    this.slickFeaturedRef.slickGoTo(
                        this.gallery.getCurrentIndex(),
                        true,
                    );
                }
            });
            this.gallery.listen('destroy', () => {
                this.gallery = null;
            });

            this.gallery.init();
        });
    };

    handleThumbnailClick = (index) => {
        const { transition } = this.state;

        if (transition) {
            return;
        }

        this.setState(() => ({ currentIndex: index }));

        if (this.slickFeaturedRef) {
            this.slickFeaturedRef.slickGoTo(this.getIndexDependOnDir(index));
        }
    };

    handleFeaturedBeforeChange = (oldIndex, newIndex) => {
        this.setState(() => ({
            currentIndex: this.getIndexDependOnDir(newIndex),
            transition: true,
        }));
    };

    handleFeaturedAfterChange = (index) => {
        this.setState(() => ({
            currentIndex: this.getIndexDependOnDir(index),
            transition: false,
        }));
    };

    setSlickFeaturedRef = (ref) => {
        this.slickFeaturedRef = ref;
    };

    render() {
        const { images } = this.props;
        const { currentIndex } = this.state;

        const featured = images.map((image, index) => (
            <Link key={index} href={`/${image}`}>
            <a onClick={(event) => this.handleFeaturedClick(event, index)} target="_blank">
            <img src={image} alt="" className="product-gallery__featured-image" ref={(element) => { this.imagesRefs[index] = element; }} />
            </a>
            </Link>
        ));

        const thumbnails = images.map((image, index) => {
            const classes = classNames('product-gallery__carousel-item', {
                'product-gallery__carousel-item--active': index === currentIndex,
            });

            return (
                <button
                    type="button"
                    key={index}
                    onClick={() => this.handleThumbnailClick(index)}
                    className={classes}
                >
                    <img className="product-gallery__carousel-image" src={image} alt="" />
                </button>
            );
        });

        return (
            <div className="product__gallery">
                <div className="product-gallery">
                    <div className="product-gallery__featured">
                        <GallerySlick
                            ref={this.setSlickFeaturedRef}
                            {...slickSettingsFeatured}
                            beforeChange={this.handleFeaturedBeforeChange}
                            afterChange={this.handleFeaturedAfterChange}
                        >
                            {featured}
                        </GallerySlick>
                    </div>
                    <div className="product-gallery__carousel">
                        <GallerySlick {...slickSettingsThumbnails['standard']}>
                            {thumbnails}
                        </GallerySlick>
                    </div>
                </div>
            </div>
        );
    }
}

ProductGallery.propTypes = {
    images: PropTypes.array,
    layout: PropTypes.oneOf(['standard', 'sidebar', 'columnar', 'quickview']),
    /** current locale */
    locale: PropTypes.string,
};

ProductGallery.defaultProps = {
    images: [],
    layout: 'standard',
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(ProductGallery);
