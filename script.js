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
        if (skillTop < triggerBottom) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const popup = document.getElementById("popup");

    try {
        const response = await fetch("https://formspree.io/f/xaqadrgb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            popup.innerText = "Message sent successfully ✅";
            form.reset();
        } else {
            popup.innerText = "Something went wrong ❌";
        }

    } catch (error) {
        popup.innerText = "Error sending message ⚠️";
    }

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
});