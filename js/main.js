$(document).ready(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {

        $('.mobile_wrap').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            infinite: true,
        })
        $('.visual3').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.sns_wrap').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            slidesToScroll: 1,
            slidesToShow: 1
        })
        $('.depth2').hide();
        $('.gnb1>li').click(function () {
            $(this).children('.depth2').slideDown(1000);
            $(this).siblings('li').children('.depth2').hide(1000);
        })

    } else {

    }



    /* pc end */
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

    $('.tab_visual').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    })

    $('.event_wrap').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });

    $('.acne,.acne1,.acne2,.acne3').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false
                }
            }
        ]
    })

    $('.gnb').hide();
    $('.ham_wrap').click(function () {
        $(this).hide();
        $('.gnb').fadeIn();
    })
    $('.close_wrap').click(function () {
        $('.gnb').hide();
        $('.ham_wrap').fadeIn();
    });


})/* end */