const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__mobile")

hamburger.addEventListener("click", function(evt){
    evt.preventDefault();
    hamburger.classList.toggle("hamburger__closed");
    hamburger.classList.toggle("hamburger__opened");
    nav.classList.toggle("nav__mobile-active")
})
