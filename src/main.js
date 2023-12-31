'use strict';

const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll",()=> {
    home.style.opacity = 1 - ( window.scrollY / homeHeight);
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll",()=>{
    if(window.scrollY > homeHeight/2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
})

const toggle = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");
toggle.addEventListener("click",()=>{
    headerMenu.classList.toggle('open');
})

headerMenu.addEventListener("click",()=> {
    headerMenu.classList.toggle('open');
})

