let header = document.getElementById('header');
let langButton = document.querySelector("#language");
let langSaveButtons = document.querySelectorAll('.language-box ul li');
let langBox = document.querySelector(".language-box");
let hamburger = document.querySelector(".hamburger");
let mobileNavClose = document.querySelector("#close");
let openModalButtons = document.querySelectorAll(".open-modal");
let closeModalButton = document.querySelector("#close-modal");
let darkModeSwitches = document.querySelectorAll(".darkmode-switch");

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove('scrolled');
    }
})

//Remove anchor links (#) from url.
window.addEventListener("DOMContentLoaded", function(e) {
    const links = document.getElementsByTagName("A");
    for(let i=0; i < links.length; i++) {
        if(!links[i].hash) continue;
        if(links[i].origin + links[i].pathname != self.location.href) continue;
        (function(anchorPoint) {
            links[i].addEventListener("click", function(e) {
                anchorPoint.scrollIntoView(true);
                e.preventDefault();
            }, false);
        })(document.getElementById(links[i].hash.replace(/#/, "")));
    }
}, false);

langButton.addEventListener("click", () => {
    langBox.classList.toggle("show");
})

langSaveButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        langBox.classList.toggle("show");
    })
})

let slideshow = new Splide("#slideshow", {
    cover: true,
    heightRatio: 0.5,
    width: "2000px",
    type: "loop",
    pagination: false
}).mount();

let smallSlideshow = new Splide("#small-slideshow", {
    heightRatio: 0.5,
    //cover: true,
    type: "loop",
    pagination: false,
    perPage: 2,
    gap: "40%",
    fixedHeight: "100%",
    perMove: 1,
    //width: "100%",
    //fixedWidth: "60%"
}).mount();

let mobileSlideshow = new Splide("#mobile-slideshow", {
    heightRatio: 0.5,
    cover: true,
    type: "loop",
    pagination: false,
    perPage: 1,
    perMove: 1,
    width: "100%",
    height: "60vh"
}).mount();

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("visible");
})

mobileNavClose.addEventListener("click", () => {
    document.body.classList.toggle("visible");
})

openModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.body.classList.add("modal-open");
    })
})

closeModalButton.addEventListener("click", () => {
    document.body.classList.remove("modal-open");
})

darkModeSwitches.forEach((darkModeSwitch) => {
    darkModeSwitch.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    })
})