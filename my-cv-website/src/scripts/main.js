// This file contains JavaScript code for handling interactivity on the CV website.

// Function to smoothly scroll to a section when a navigation link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the visibility of the skills section
const skillsToggle = document.getElementById('skills-toggle');
const skillsList = document.getElementById('skills-list');

skillsToggle.addEventListener('click', () => {
    skillsList.classList.toggle('hidden');
});

// Function to display a modal with more information about a project
const projectLinks = document.querySelectorAll('.project-link');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        const projectInfo = link.getAttribute('data-info');
        modal.querySelector('.modal-content').innerText = projectInfo;
        modal.classList.add('visible');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('visible');
});