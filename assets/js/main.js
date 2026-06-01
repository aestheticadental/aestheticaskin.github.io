// Current Year
document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("year");

    if(year){
        year.textContent = new Date().getFullYear();
    }

});

// Smooth Reveal Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".reveal").forEach(el => {

    observer.observe(el);

});
