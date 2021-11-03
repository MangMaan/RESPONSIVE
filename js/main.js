$(document).ready(function () {

    $('#banner').slick({
        autoplay: true,
        Infinity: true,
        arrows: false,
        dots: true,
    });


    $('.items').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
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