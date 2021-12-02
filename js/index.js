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

slideshow.on("move", () => {
    const slideshowArrow = document.querySelector("#slideshow .splide__arrow--prev");

    if(slideshow.index > 0){
        slideshowArrow.style.display = "flex";
    }else{
        slideshowArrow.style.display = "none";
    }
})

let smallSlideshow = new Splide("#small-slideshow", {
    heightRatio: 0.5,
    //cover: true,
    type: "loop",
    pagination: false,
    perPage: 2,
    gap: "200px",
    fixedHeight: "100%",
    perMove: 1,
    //width: "100%",
    //fixedWidth: "60%"
}).mount();

smallSlideshow.on("move", () => {
    const smallSlideshowArrow = document.querySelector("#small-slideshow .splide__arrow--prev");
    console.log(smallSlideshowArrow)
    console.log()

    if(smallSlideshow.index > 0){
        smallSlideshowArrow.style.display = "flex";
    }else{
        smallSlideshowArrow.style.display = "none";
    }

    console.log(smallSlideshow.index)
})

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

mobileSlideshow.on("move", () => {
    const mobileSlideshowArrow = document.querySelector("#mobile-slideshow .splide__arrow--prev");

    if(mobileSlideshow.index > 0){
        mobileSlideshowArrow.style.display = "flex";
    }else{
        mobileSlideshowArrow.style.display = "none";
    }
})

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

document.querySelector('.hero video').addEventListener('ended', () => {
    console.log("Video ended")
    this.load();
    this.play();
});