const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {
  //nav-menu ffdc w-clearfix w-nav-menu
  //style="transition: all; transform: translateY(0px) translateX(0px);"
  //style2="transition: all, transform 300ms; transform: translateY(0px) translateX(0px);" data-nav-menu-open=""
  //<div id="w-nav-overlay-0 class="w-nav-overlay" data-wf-ignore="" style="height: 9043px; display: block;"></div
});
const tabMenus = document.querySelectorAll(".tabs-menu");
const tabContents = document.querySelector(".tabs-content");

tabMenus.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const el = e.target.parentElement.parentElement;

    if (el.classList.contains("tab-link")) {
      const selectedTab = tab.querySelector(".w--current");
      selectedTab.classList.remove("w--current");
      el.classList.add("w--current");
      activateTabContent(el.getAttribute("data-w-tab"));
    }
  });
});

function activateTabContent(tabDataAttr) {
  const activeTab = tabContents.querySelector(".w-tab-pane.w--tab-active");
  activeTab.classList.remove("w--tab-active");
  const tabToActivate = tabContents.querySelector(
    `[data-w-tab="${tabDataAttr}"]`
  );
  console.log(tabToActivate);
  tabToActivate.classList.add("w--tab-active");
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 3,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".slider-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const testimonialsSwipe = new Swiper(".testimonials", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".testimonial-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
