const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {});

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
let isMobileOrTablet;
function detectMediaQuerySize() {
  const mediaQuery = window.matchMedia("(max-width: 968px)"); // Adjust breakpoint as needed
  isMobileOrTablet = mediaQuery.matches; // True if screen size matches the query

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    // direction: isMobileOrTablet ? "vertical" : "horizontal",
    slidesPerView: isMobileOrTablet ? 1 : 3,
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
}
detectMediaQuerySize();
window.addEventListener("resize", detectMediaQuerySize);

const testimonialsSwipe = new Swiper(".testimonials", {
  // Optional parameters
  // direction: isMobileOrTablet ? "vertical" : "horizontal",
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

let bottomPriceNav = document.querySelector(".bottom-price-nav");

menu.onClick = () => {};
menu.addEventListener("click", () => {
  menu.classList.toggle("ri-menu-fill");
  menu.classList.toggle("ri-close-fill");

  if (document.body.contains(document.querySelector(".bottom-nav"))) {
    bottomNav.classList.toggle("open");
  } else bottomPriceNav.classList.toggle("open");
});
