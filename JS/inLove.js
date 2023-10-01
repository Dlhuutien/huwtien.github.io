

// Dem ngay
const yourDate = new Date("2023-04-02T00:00:00"),
music = ['cogainaylacuaai','yeunhaunhebanthan','emkhongbietnua'];

document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
    
    document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";
    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
        sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    } olock();
    var timer = setInterval(function(){olock()}, 1000);
    document.querySelector("audio").setAttribute("src", `MUSIC/${music[Math.floor(Math.random()*music.length)]}.mp3`);
    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );
}, false);

// Ngay hien hanh
document.addEventListener('DOMContentLoaded', function(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0, nên cần cộng thêm 1.
    var year = currentDate.getFullYear();
    var currentDateStr = `${day}/${month}/${year}`;
    document.querySelector("hientai").textContent = currentDateStr;
});


// Tính tuổi
// Huu Tien
const dateOfBirth = new Date("2002-08-29");
document.addEventListener('DOMContentLoaded', function(){
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dateOfBirth;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    document.querySelector("age").textContent = ageInYears.toString();
});
// Truc Ly
const dateOfBirth2 = new Date("2003-02-16");
document.addEventListener('DOMContentLoaded', function(){
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dateOfBirth2;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    document.querySelector("age2").textContent = ageInYears.toString();
});

// Header
var $content = $('header .content'), 
    $blur = $('header .overlay'), 
    wHeight = $(window).height();

$(window).on('resize', function(){
    wHeight = $(window).height();
});

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function Scroller(){
    this.latestKnownScrollY = 0;
    this.ticking = false;
}

Scroller.prototype = {
    init: function() {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
        $blur.css('background-image',$('header:first-of-type').css('background-image'));
    },
    onScroll: function() {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    },

    requestTick: function() {
        if( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    },

    update: function() {
        var currentScrollY = this.latestKnownScrollY;
        this.ticking = false;
        var slowScroll = currentScrollY / 2,
        blurScroll = currentScrollY * 2,
        opaScroll = 1.4 - currentScrollY / 400;
    if(currentScrollY > wHeight)
        $('nav').css('position','fixed');
    else
        $('nav').css('position','absolute');
    
    $content.css({
        'transform'         : 'translateY(' + slowScroll + 'px)',
        '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
        '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
        'opacity' : opaScroll
    });
    
    $blur.css({
        'opacity' : blurScroll / wHeight
    });
  }
};

var scroller = new Scroller();  
scroller.init();
// 

// Button
$(document).ready(function($) {

    "use strict";
    var book_table = new Swiper(".book-cake-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});
// 

  
  
  
  
// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
