// ***** desktop themes *****
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        toggleButton.innerHTML = '<h3 class="fas fa-sun"><i>&#9728</i></h3>';
    } else {
        toggleButton.innerHTML = '<h3 class="fas fa-moon"><i>&#x263D</i></h3>';
    }
});
// ***************************

// ***** mobile themes *****
const MtoggleButton = document.getElementById('mobile-theme-toggle');

MtoggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        toggleButton.innerHTML = '<h1 class="fas fa-sun"><i>&#9728</i></h1>';
    } else {
        toggleButton.innerHTML = '<h1 class="fas fa-moon"><i>&#x263D</i></h1>';
    };

    document.getElementById("mobile-nav-open").style.background = "#f5f5f5"
    document.getElementById("mobile-nav-open").style.borderRadius = "10%"
});
// ******************************
            

// ***** mobile nav hamburger *****
const mobileNavOpen = document.getElementById("mobile-nav-open");
const mobileNavClose = document.getElementById("mobile-nav-close");
const MobileNav = document.getElementById("mobile-nav");

mobileNavOpen.addEventListener('click', () =>{
    document.getElementById("mobile-nav").style.transform = "translateX(0%)";
    document.getElementById("mobile-nav-open").style.display = "none";
    document.getElementById('mobile-theme-toggle').style.display = "none";
});

mobileNavClose.addEventListener('click', () =>{
    document.getElementById("mobile-nav").style.transform = "translateX(-150%)";
    document.getElementById("mobile-nav-open").style.display = "block";
    document.getElementById('mobile-theme-toggle').style.display = "block";
});
// *******************************