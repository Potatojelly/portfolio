'use strict';

// make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
    if(window.scrollY>navbarHeight)
    {
        navbar.classList.add('navbar--dark');
    }
    else
    {
        navbar.classList.remove('navbar--dark');
    }

});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    const link = target.dataset.link;
    console.log(link);
    if(link == null) 
    {
        return;
    }
    scrollIntoView(link);
    
});
// Handle click on "contact me" button on hom
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click",(event) => {
    const target = event.target;
    const link = target.dataset.link;
    scrollIntoView(link);    
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
};

// Make home slowly fade to transparent as the window scrolls down

const homeContainer = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
    homeContainer.style.opacity = 1 - window.scrollY/homeHeight;
});


// show "arrow up" button when scrolling up
const arrowUp = document.querySelector(".arrow__up");
document.addEventListener('scroll',() => {
    if(window.scrollY>homeHeight/2)
    {
        arrowUp.classList.add("visible");
    }
    else
    {
        arrowUp.classList.remove("visible");
    }
});

arrowUp.addEventListener("click",()=>{
    scrollIntoView("#home");
})

// Work
""
const workBtnContainer = document.querySelector(".work__categories");
const workBtns = document.querySelectorAll(".category__btn");
const projectContainer = document.querySelector(".work__project");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click",(event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null) 
    {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector(".category__btn.selected");
    active.classList.remove('selected');
    const target = event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter === "*" || filter === project.dataset.type)
            {
                project.classList.remove("invisible");
            }
            else
            {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anim-out");
    },300);
});
