window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";

  // After fade out, remove it
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
