// @ts-nocheck
/*-----------------------------------------------------------------------------------



-----------------------------------------------------------------------------------

    JS INDEX
    ===================

    01. Ui Variables	
    02. Search Field
    03. Hamburget Menu	
    04. Magnify popup	
    05. Slick Sliders
        . Branding
        . Branding-item
        . Banner Branding	
        . Testimonial
        . Testimonial-2
        . client Review
        . client Image
    06. Counter js
        . Skill Progressbar 	
   

-----------------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  /*UI VARS*/
  let logo = document.querySelector(".logo-04");

  /*  Sticky Header*/
  window.addEventListener("scroll", function () {
    let header = document.querySelectorAll("header");

    header.forEach((headItem) => {
      headItem.classList.toggle("sticky", window.scrollY > 0);
    });
    // it's only for homepage-3
    // window.scrollY > 0
    //   ? logo.setAttribute('src', 'assets/img/logo/logo.png')
    //   : logo.setAttribute('src', 'assets/img/logo/logo04.png');
  });

  /* humberger menu */
  function toggleSidebar() {
    $("header aside").toggleClass("active");
    $(".hamburger-menu").toggleClass("open");

    var sidebarOpen = $("header aside").hasClass("active");
    if (sidebarOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }

  $(".hamburger-menu").on("click", function () {
    toggleSidebar();
  });

  $(".close-sidebar").on("click", function () {
    toggleSidebar();
  });

  $("aside .overlay").on("click", function () {
    toggleSidebar();
  });
})(jQuery);

function enableScrolling() {
  throw new Error("Function not implemented.");
}
