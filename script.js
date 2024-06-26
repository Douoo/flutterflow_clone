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
