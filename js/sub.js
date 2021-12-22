
/* javascript */

function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    // 결과 출력
    resultElement.innerText = number;
  }


/* jquery */
$(document).ready(function(){
    $('.pricesub').hide();
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

    $('.gnb').hide();
    $('.ham_wrap').click(function () {
        $(this).hide();
        $('.gnb').fadeIn();
    })
    $('.close_wrap').click(function () {
        $('.gnb').hide();
        $('.ham_wrap').fadeIn();
    });
    
    $('#size_wrap li').click(function(){
        var size = $(this).text();
        var ww = '$NPSP'
        var product_name = $('#product_name').text();
        document.getElementById('name_title').innerHTML = "제품 명:"
        document.getElementById('name_size').innerHTML =  product_name +  size;
        $('.pricesub').show();
    })
})/* end */
