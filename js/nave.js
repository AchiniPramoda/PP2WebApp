
const homeLink = document.getElementById("home-link");
const projectscopeLink = document.getElementById("projectscope-link");
const milestonnesLink = document.getElementById("milestonnes-link");
const aboutusLink = document.getElementById("aboutus-link");
const downloadsLink = document.getElementById("downloads-link");
const arhivementsLink = document.getElementById("arhivements-link");
const contactusLink = document.getElementById("contactus-link");
const ls = document.getElementById("ls");
const rg = document.getElementById("rg");
const ps = document.getElementById("ps");
const ro = document.getElementById("ro");
const m = document.getElementById("m");
const t = document.getElementById("t");
const d = document.getElementById("d");
const p = document.getElementById("p");

ls.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
rg.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
ps.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
ro.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
m.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
t.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});

homeLink.addEventListener("click", function () {
    homeLink.classList.add("aclink");
    projectscopeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});

projectscopeLink.addEventListener("click", function () {
    projectscopeLink.classList.add("aclink");
    homeLink.classList.remove("aclink");
    milestonnesLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
milestonnesLink.addEventListener("click", function () {
    milestonnesLink.classList.add("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
aboutusLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.add("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
downloadsLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.add("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
p.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.add("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
d.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.add("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
});
arhivementsLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.add("aclink");
    contactusLink.classList.remove("aclink");
});
contactusLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.remove("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.add("aclink");
});

const presebtetionLink = document.getElementById("pecente-link");
const documentLink = document.getElementById("document-link");
documentLink.addEventListener("click", function () {
    milestonnesLink.classList.remove("aclink");
    projectscopeLink.classList.remove("aclink");
    homeLink.classList.remove("aclink");
    downloadsLink.classList.add("aclink");
    aboutusLink.classList.remove("aclink");
    arhivementsLink.classList.remove("aclink");
    contactusLink.classList.remove("aclink");
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
