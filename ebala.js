$(window).on('load', function() {
    $(".slider-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        cssEase: 'linear',
        prevArrow:'#prev',
        nextArrow: '#next'
    });
});

//remove inline-block from the slick-slider
// document.getElementsByClassName('.slider-container').style.display = "none";


let increaseDonut = gsap.to(".donut", {duration: 10, scale: 2, ease:Sine.easeOut});

$('.slider-main').on('afterChange', function(event, slick, currentSlide){
    let prevButton = document.querySelector('#prev');
    let nextButton = document.querySelector('#next');

    increaseDonut.restart();

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
