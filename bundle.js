(()=>{var e=document.getElementById("burger-btn"),t=document.body,n=document.getElementById("close-menu"),o=document.getElementById("hiden_menu"),i=document.querySelectorAll(".menu-block_item ");e.addEventListener("click",(function(){t.classList.add("show"),o.classList.add("show")})),i.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show"),o.classList.remove("show")}))})),n.addEventListener("click",(function(){t.classList.remove("show"),o.classList.remove("show")})),new Swiper(".slider-customers_photo",{loop:!0,slidesPerView:6,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".slider-review",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var s=new Swiper(".swiper-goods",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:r}}),r=new Swiper(".goods-pagination",{spaceBetween:5,slideToClickedSlide:!0,freeMode:!0,watchSlidesProgress:!0});r.controller.control=s,s.controller.control=r;var l=document.getElementById("counter"),c=document.getElementById("increase"),d=document.getElementById("decrease");function w(){if($(window).width()<768&&$("html").css({fontSize:"16px"}),$(window).width()>768){var e=1920,t=16,n=$("html").width()/e;$("html").width()>=e&&(t=Math.floor(t*n)),$("html").width()<e&&(t=Math.floor(t*n)),$("html").css({fontSize:t+"px"})}}c&&(c.addEventListener("click",(function(){l.value++})),d.addEventListener("click",(function(){l.value>1&&l.value--}))),$((function(){w()})),$(window).resize((function(){w()}))})();