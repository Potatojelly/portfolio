const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (event)=>{
    const target = event.target;
    const filter = event.target.dataset.category;
    if(filter == null) {
        return;
    }

    handleActiveSelection(target);
    filterProjects(filter);
})

function handleActiveSelection(target) {
    const active = document.querySelector(".category--selected");
    active.classList.remove("category--selected");
    target.classList.add("category--selected");
}

function filterProjects(filter) {
    projectsContainer.classList.add("anime-out");
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter=="all" || filter == project.dataset.type) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        })
        projectsContainer.classList.remove("anime-out");
    },250);
}