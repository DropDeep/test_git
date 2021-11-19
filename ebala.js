
$(window).on('load', function() {
    $(".Slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow:'#prev',
        nextArrow: '#next'
    });
});

$('.Slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let prevButton = document.querySelector('#prev');
    let nextButton = document.querySelector('#next')


    let changeArrowName = function () {
        if (currentSlide == 0) {
            prevButton.innerHTML = 'Повторити';
            nextButton.innerHTML = 'Радіти';
        }
        if (currentSlide == 1) {
            prevButton.innerHTML = 'Жити';
            nextButton.innerHTML = 'Повторити';
        }
        if (currentSlide == 2) {
            prevButton.innerHTML = 'Радіти';
            nextButton.innerHTML = 'Жити';
        }
    }

    changeArrowName()
    })


