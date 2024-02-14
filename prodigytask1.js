document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    });
  

    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        navItems.forEach(function (navItem) {
          navItem.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });
  