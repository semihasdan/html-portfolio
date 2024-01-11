document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.getAttribute('href') === '#name') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 30,
                    behavior: 'smooth'
                });
            }
        });
    });
});
function refreshPage() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    new Typed('.typed', {
        strings: ["Mobil Developer", "Designer", "Freelancer", "Web Developer", "Front-End", "Back-End"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
    });
});