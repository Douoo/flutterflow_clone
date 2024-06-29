const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {
  //nav-menu ffdc w-clearfix w-nav-menu
  //style="transition: all; transform: translateY(0px) translateX(0px);"
  //style2="transition: all, transform 300ms; transform: translateY(0px) translateX(0px);" data-nav-menu-open=""
  //<div id="w-nav-overlay-0 class="w-nav-overlay" data-wf-ignore="" style="height: 9043px; display: block;"></div
});
const tabMenus = document.querySelectorAll(".tabs-menu");

tabMenus.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const el = e.target.parentElement.parentElement;

    if (el.classList.contains("tab-link")) {
      const selectedTab = tab.querySelector(".w--current");
      selectedTab.classList.remove("w--current");
      el.classList.add("w--current");
    }
  });
});
