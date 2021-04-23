const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

var x = window.matchMedia("(max-width: 767px)");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');

}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}
// let count = 0;

// function holdUp(event) {
//     console.log(count);
//     if(count > 5) {
//         count = 0;
//         keyForDesktop(event);
//     } else {
//         count += 1;
//     }
// }

//function
function myFunction(x) {
    if (x.matches) { // If media query matches
        desktopOrMobile = "mobile";
        window.onkeydown = keyForMobileMenu;
        console.log(desktopOrMobile);
        index=0;
    } else {
        index=0;
        desktopOrMobile = "desktop";
        window.onkeydown = keyForDesktopMenu;
        console.log(desktopOrMobile);
    }
}

myFunction(x); // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes