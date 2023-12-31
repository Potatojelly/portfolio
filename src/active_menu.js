'use strict';

const menuItems = document.querySelectorAll(".header__menu__item");
const sectionIds = [
    "#home",
    "#about",
    "#skills",
    "#work",
    "#testimonial",
    "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const visibleSections = sectionIds.map(()=>false);

const options= {
    rootMargin: "-30% 0px 0px 0px",
    threshold: [0, 0.98],
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));
let activeItem = menuItems[0];

function callback(entries) {
    let selectLastOne;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = 
            index === sectionIds.length - 1 &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.98;
    }); 

    const navIndex = selectLastOne
        ? sectionIds.length - 1
        : findFirstIntersecting(visibleSections);

    activeItem.classList.remove("active");
    activeItem = menuItems[navIndex];
    menuItems[navIndex].classList.add("active");
}

function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
}   


