// JS: scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to My Profile Page!');

    // Add interactivity if needed
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');

    // Simple logging on section clicks
    aboutSection.addEventListener('click', () => {
        console.log('About section clicked!');
    });

    skillsSection.addEventListener('click', () => {
        console.log('Skills section clicked!');
    });

    contactSection.addEventListener('click', () => {
        console.log('Contact section clicked!');
    });
});