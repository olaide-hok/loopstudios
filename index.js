// Select DOM elements
const openMobileMenu = document.getElementById("open-menu");
const closeMobileMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");

// Toggle mobile menu and overlay
function toggleMenu() {
  const isMenuOpen = mobileNav.classList.contains("d-flex");

  if (isMenuOpen) {
    // Close the menu
    mobileNav.classList.remove("d-flex");
    mobileNav.classList.add("d-none");
  } else {
    // Open the menu
    mobileNav.classList.remove("d-none");
    mobileNav.classList.add("d-flex");
  }
}

// Add event listeners
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
