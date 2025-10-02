/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-btn a");
  const tabs = document.querySelectorAll(".tab-content > div");

  // ডিফল্ট Sign Up দেখাবে
  tabs.forEach((tab) => (tab.style.display = "none"));
  document.querySelector("#signup").style.display = "block";

  // Tab Switching
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // remove active from all
      tabLinks.forEach((l) => l.parentElement.classList.remove("active"));
      this.parentElement.classList.add("active");

      // hide all, show target
      tabs.forEach((tab) => (tab.style.display = "none"));
      const target = document.querySelector(this.getAttribute("href"));
      target.style.display = "block";
    });
  });
});
