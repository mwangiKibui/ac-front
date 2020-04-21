export const slickSettingsThumbnails = {
    standard: {
        dots:false,
        arrows: false,
        infinite: false,
        autoplay:true,
        autoplaySpeed:4000,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 5 } },
            { breakpoint: 479, settings: { slidesToShow: 4 } },
            { breakpoint: 379, settings: { slidesToShow: 3 } },
        ],
    },   
    quickview: {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 4 } },
            { breakpoint: 767, settings: { slidesToShow: 5 } },
            { breakpoint: 479, settings: { slidesToShow: 4 } },
            { breakpoint: 379, settings: { slidesToShow: 3 } },
        ],
    },
};
export const slickSettingsFeatured = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};
export const slickSettings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],   
};
export const mobileSlickSettings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],

};