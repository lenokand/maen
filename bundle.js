(()=>{var e=document.getElementById("burger-btn"),t=document.body,n=document.getElementById("close-menu"),i=document.getElementById("hiden_menu"),o=document.querySelectorAll(".menu-block_item ");e.addEventListener("click",(function(){t.classList.add("show"),i.classList.add("show")})),o.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show"),i.classList.remove("show")}))})),n.addEventListener("click",(function(){t.classList.remove("show"),i.classList.remove("show")})),new Swiper(".slider-customers_photo",{loop:!0,slidesPerView:6,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:6}}}),new Swiper(".slider-review",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var s=new Swiper(".swiper-goods",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:r}}),r=(new Swiper(".swiper-goods-main",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:r}}),new Swiper(".goods-pagination",{slidesPerView:1,slidesPerGroup:1,spaceBetween:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slideToClickedSlide:!0,freeMode:!0,watchSlidesProgress:!0}));r.controller.control=s,s.controller.control=r;var l=document.getElementById("counter"),d=document.getElementById("increase"),c=document.getElementById("decrease");function w(){if($(window).width()<768&&$("html").css({fontSize:"16px"}),$(window).width()>768){var e=1920,t=16,n=$("html").width()/e;$("html").width()>=e&&(t=Math.floor(t*n)),$("html").width()<e&&(t=Math.floor(t*n)),$("html").css({fontSize:t+"px"})}}d&&(d.addEventListener("click",(function(){l.value++})),c.addEventListener("click",(function(){l.value>1&&l.value--}))),$((function(){w()})),$(window).resize((function(){w()}))})();