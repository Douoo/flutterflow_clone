console.log("jflskjflksjflskjfkl");
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {
  //nav-menu ffdc w-clearfix w-nav-menu
  //style="transition: all; transform: translateY(0px) translateX(0px);"
  //style2="transition: all, transform 300ms; transform: translateY(0px) translateX(0px);" data-nav-menu-open=""
  //<div id="w-nav-overlay-0 class="w-nav-overlay" data-wf-ignore="" style="height: 9043px; display: block;"></div
});
const tabMenus = document.querySelectorAll(".tabs-menu");
// const tabContents = document.querySelector(".tabs-content");

tabMenus.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const clickedEl = e.target.parentElement.parentElement;

    if (clickedEl.classList.contains("tab-link")) {
      const selectedTab = tab.querySelector(".w--current");
      selectedTab.classList.remove("w--current");
      clickedEl.classList.add("w--current");
      const tabs = getParentByClass(clickedEl, "tabs");
      const tabContents = tabs.querySelector(".tabs-content");
      activateTabContent(tabContents, clickedEl.getAttribute("data-w-tab"));
    }
  });
});

function activateTabContent(tabContents, tabId) {
  const activeTab = tabContents.querySelector(".w-tab-pane.w--tab-active");

  activeTab.classList.remove("w--tab-active");
  const tabToActivate = tabContents.querySelector(`[data-w-tab="${tabId}"]`);

  tabToActivate.classList.add("w--tab-active");
}
function getParentByClass(childElement, className) {
  let parent = childElement.parentNode;
  console.log("parent");
  while (parent && !parent.classList.contains(className)) {
    parent = parent.parentNode;
  }
  return parent;
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

let menu = document.querySelector("#menu-icon");
let bottomNav = document.querySelector(".bottom-nav");

menu.onClick = () => {};
menu.addEventListener("click", () => {
  menu.classList.toggle("ri-menu-fill");
  menu.classList.toggle("ri-close-fill");
  bottomNav.classList.toggle("open");
});
