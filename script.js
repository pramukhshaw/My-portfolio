// Select elements
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');

const resumelists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfoliolists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Handle nav list clicks
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        // Correctly interpolate idx in transform using backticks
        cube.style.transform = `rotateY(${idx * -90}deg)`; // Fixed template literal
    });
});

// Handle resume list clicks
resumelists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Make sure only the resume list's active class is removed
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        // Change active resume box based on index
        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// Handle portfolio list clicks
portfoliolists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Make sure only the portfolio list's active class is removed
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        // Change active portfolio box based on index
        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});
