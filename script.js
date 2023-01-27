// SHOW MENU 
const showMenu = (toogleId, navId) => {
    const toggle = document.getElementById(toogleId),
        nav = document.getElementById(navId);

    // VALIDATE THAT VARIABLES EXIST 
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    };
};

showMenu('nav-toggle', 'nav_menu');


// REMOVE MOBILE MENU WHEN CLICK ON 
const navLink = document.querySelectorAll('.nav_link');
function onClick() {
    const navMenu = document.getElementById('nav_menu');
    // REMOVE THE CLASS WHEN CLICK 
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', onClick));


// SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageXOffset;

    sections.forEach(current => {
        // console.log(current);    // RETURN THE CURRENT DIV INFO.
        const sectionHeight = current.offsetHeight;
        // console.log(sectionHeight);   // RETURN THE CURRENT VIEWPORT HIEGHT 
        const sectionTop = current.offsetTop;
        // console.log(sectionTop);       // RETURN HEADER HEIGTH
        sectionId = current.id;
        // console.log(current);
        // console.log(sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);


// BOX SHADOW ON HEADER 
function scrollHeader() {
    const nav = document.getElementById('header');
    //  ==== WHEN THE SCROLL IS GREATER THEAN 200 VIEWPORT HEIGTH, ADD THE SCROLL-HEADER CLASS ◖⚆ᴥ⚆◗.
    if (this.scrollY >= 40) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
};

window.addEventListener(('scroll'), scrollHeader);


// SHOW SCROLL TOP BAR 
function scrolltop() {
    const scrollTop = document.getElementById('scroll-top');
    //  WHEN THE SCROLL IS HIGHER THAN 500 VIEWPORT HEIGHT , ADD THE SHOW-SCROLL CLASS ( ͡° ͜ʖ ͡°). 
    if (this.scrollY >= 260) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
};

window.addEventListener('scroll', scrolltop);