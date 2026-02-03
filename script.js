// Toggle mobile menu
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

// Animate skill bars on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-bar span');
    const triggerBottom = window.innerHeight / 5 * 4;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom){
            skill.style.width = skill.getAttribute('data-width');
        }
    });
});
