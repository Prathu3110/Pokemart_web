/* 
   Mobile Navbar Toggle
 */

const navbarLinks = document.querySelectorAll(".navmenu .nav_itemlink");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open menu
if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });
}

// Close menu via close button
if (menuCloseButton && menuOpenButton) {
  menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
  });
}

// Close menu when a nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuOpenButton) {
      menuOpenButton.click();
    }
  });
});

/* 
   Swiper Initialization
 */

if (document.querySelector(".slider-wrapper")) {
  const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
