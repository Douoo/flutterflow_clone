"use strict";

const pricingPlanMode = document.querySelector(".tabs-menu-4");
const pricingTabPanel = document.querySelector(".w-tab-content");
const priceToggler = document.querySelector(".pricing_toggle");

pricingPlanMode.addEventListener("click", (event) => {
  const clickedEl = event.target;
  const prevSelectedEl = pricingPlanMode.querySelector(".w--current");
  if (clickedEl.hasAttribute("data-w-tab")) {
    prevSelectedEl.classList.remove("w--current");
    prevSelectedEl.setAttribute("aria-selected", "false");
    clickedEl.classList.add("w--current");
    clickedEl.setAttribute("aria-selected", "true");
    //Get the tab id to be selected
    const tabId = clickedEl.getAttribute("data-w-tab");
    selectTab(tabId);
  }
});

function selectTab(tabId) {
  const activeTab = pricingTabPanel.querySelector(".w--tab-active");
  //Deselect active tab
  activeTab.classList.remove("w--tab-active");
  //Select the tab that needs to be activated
  const tabToActivate = pricingTabPanel.querySelector(
    `.w-tab-pane[data-w-tab="${tabId}"]`
  );
  tabToActivate.classList.add("w--tab-active");
  tabToActivate.setAttribute(
    "style",
    "opacity: 1; transition: all, opacity 300ms;"
  );
}

priceToggler.addEventListener("click", () => {
  const billingMode = priceToggler.querySelector(".toggle-dot");
  priceToggler.setAttribute(
    "data-billing",
    priceToggler.getAttribute("data-billing") === "monthly"
      ? "annual"
      : "monthly"
  );
  const isMonthly = priceToggler.getAttribute("data-billing") === "monthly";
  console.log(isMonthly);
  if (isMonthly) {
    billingMode.style = `transform: translate(0px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);`;
  } else {
    billingMode.style = `transform: translate(33px, 0px) scale3d(1, 1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
                    transition: transform 0.2s ease-in-out;`;
  }
});
