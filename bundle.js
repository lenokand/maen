(()=>{var e=document.getElementById("burger-btn"),t=document.body,n=document.getElementById("close-menu"),s=document.getElementById("hiden_menu"),o=document.querySelectorAll(".menu-block_item ");e.addEventListener("click",(function(){t.classList.add("show"),s.classList.add("show")})),o.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show"),s.classList.remove("show")}))})),n.addEventListener("click",(function(){t.classList.remove("show"),s.classList.remove("show")})),new Swiper(".slider-customers_photo",{loop:!0,slidesPerView:6,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".slider-review",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})();