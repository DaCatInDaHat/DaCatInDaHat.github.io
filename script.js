const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const projects = document.querySelector(".projects");

const aboutBtn = document.querySelector("#about-btn");
const experienceBtn = document.querySelector("#experience-btn");
const educationBtn = document.querySelector("#education-btn");
const projectsBtn = document.querySelector("#projects-btn");

aboutBtn.onclick = () => {
    about.style.display = "inherit";
    experience.style.display = "none";
    education.style.display = "none";
    projects.style.display = "none";
}

experienceBtn.onclick = () => {
    about.style.display = "none";
    experience.style.display = "inherit";
    education.style.display = "none";
    projects.style.display = "none";
}

educationBtn.onclick = () => {
    about.style.display = "none";
    experience.style.display = "none";
    education.style.display = "inherit";
    projects.style.display = "none";
}

projectsBtn.onclick = () => {
    about.style.display = "none";
    experience.style.display = "none";
    education.style.display = "none";
    projects.style.display = "inherit";
}

