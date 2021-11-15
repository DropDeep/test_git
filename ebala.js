
$(window).on('load', function() {
    $(".Slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: true
    });
});

// let test = document.getComputedStyle(document.querySelector('.slick-prev'), ':before').style.setProperty('content','test')

// window.getComputedStyle(
//     document.querySelector('slick-prev'), ':before'
// ).style.setProperty('content', 'test')

// let anotherOne = document.querySelector('root').style.setProperty('--content-left', 'something')


// let element = document.querySelector('.slick-prev');
// let styles = window.getComputedStyle(element,':before')
// let content = styles['content'].style.setProperty('content', 'obnoenbepir');



let lastOne = document.querySelector('.Slider');
lastOne.style.setProperty('--content-left', 'test');






