document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var hamburgericon = navbarToggler.querySelector("i");

    navbarToggler.addEventListener("click", function(){
        hamburgericon.classList.toggle("fa-bars");
        hamburgericon.classList.toggle("fa-times");
    });
});