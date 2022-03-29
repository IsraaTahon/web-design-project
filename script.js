const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mainMenu = document.querySelector(".main-menu");
const menuItems = document.querySelectorAll(".main-menu ul li");


// Add event listeners for menu icon and close icon

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  closeIcon.classList.add("active");
  mainMenu.classList.add("active");
})

closeIcon.addEventListener("click", () => {
  closeIcon.classList.remove("active");
  menuIcon.classList.add("active");
  mainMenu.classList.remove("active");
})


// Add different transition-delay to each menu item

menuItems.forEach((item, index) => (item.style.transitionDelay = index * 100 + "ms"));