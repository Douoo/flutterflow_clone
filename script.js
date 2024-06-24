const tabMenu = document.querySelector(".w-tab-menu");

tabMenu.addEventListener("click", function (e) {
  const el = e.target;
  console.log(el.classList.contains("tab-link"));
});
