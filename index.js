"use strict";

const tabTitles = document.querySelector(".tab-titles");
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const openBar = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-bar");
const closeBar = document.querySelector(".fa-circle-xmark");
const navContainer = document.querySelector(".nav-container");

// handling the sideBar clicks
tabTitles.addEventListener("click", function (event) {
  if (!event.target || !event.target.classList.contains("tab-links")) {
    return;
  }

  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.target.classList.add("active");

  const index = Array.from(tabLinks).indexOf(event.target);

  tabContents[index].classList.add("active-tab");
});

openBar.addEventListener("click", function () {
  sideBar.style.right = "0";
});

closeBar.addEventListener("click", function () {
  sideBar.style.right = "-200px";
});

//  implementing navigation bar
const scrollDistance = 450;

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > scrollDistance) {
    navContainer.style.top = "0";
  } else {
    navContainer.style.top = "-100px";
  }
});
