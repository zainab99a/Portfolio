
function myFunction() {
    var navbar = document.getElementById("nav");
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav";

  }}
  window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var navBar = document.getElementById('nav');
    var classNameToRemove = 'responsive'; 

    if (screenWidth <= 1099) { 
        navBar.classList.remove(classNameToRemove);
    }
});



