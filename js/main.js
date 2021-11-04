$(document).ready(function () {

    $('.pc_banner,.mobile_banner').slick({
        autoplay: true,
        Infinity: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    arrows: true,
                }
            }
        ]
    });


    $('.items').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    arrows: true,
                }
            }
        ]
    });


    $('.visual1').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
    })
    $('.acne,.acne1,.acne2,.acne3,#event').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true
    })


    $('.gnb').hide();
    $('.ham_wrap').click(function () {
        $('.gnb').fadeIn();
    })
    $('.close_wrap').click(function () {
        $('.gnb').hide();
    });



})/* end */