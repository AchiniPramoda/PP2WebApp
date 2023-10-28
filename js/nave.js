
const homeLink = document.getElementById("home-link");
const projectscopeLink = document.getElementById("projectscope-link");
const milestonnesLink = document.getElementById("milestonnes-link");
const aboutusLink = document.getElementById("aboutus-link");
const downloadsLink = document.getElementById("downloads-link");
const arhivementsLink = document.getElementById("arhivements-link");
const contactusLink = document.getElementById("contactus-link");

homeLink.addEventListener("click", function () {
    homeLink.classList.add("active-link");
    projectscopeLink.classList.remove("active-link");
    milestonnesLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});
projectscopeLink.addEventListener("click", function () {
    projectscopeLink.classList.add("active-link");
    homeLink.classList.remove("active-link");
    milestonnesLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});
milestonnesLink.addEventListener("click", function () {
    milestonnesLink.classList.add("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});
aboutusLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.add("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});
downloadsLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.add("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});
arhivementsLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.add("active-link");
    contactusLink.classList.remove("active-link");
});
contactusLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.remove("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.add("active-link");
});

const presebtetionLink = document.getElementById("pecente-link");
const documentLink = document.getElementById("document-link");
documentLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("active-link");
    projectscopeLink.classList.remove("active-link");
    homeLink.classList.remove("active-link");
    downloadsLink.classList.add("active-link");
    aboutusLink.classList.remove("active-link");
    arhivementsLink.classList.remove("active-link");
    contactusLink.classList.remove("active-link");
});

// Function to scroll smoothly to a target
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to the button
const scrollButton = document.querySelector('.smooth-scroll-button');
if (scrollButton) {
    scrollButton.addEventListener('click', () => {
        smoothScrollTo('#target');
    });
}
