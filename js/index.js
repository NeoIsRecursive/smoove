let header = document.getElementById('header');
let langButton = document.querySelector("#language");
let langSaveButton = document.querySelector("#lang-save");
let langBox = document.querySelector(".language-box");

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

langSaveButton.addEventListener("click", () => {
    langBox.classList.remove("show");
})

new Splide("#slideshow", {
    cover: true,
    heightRatio: 0.5,
    width: "2000px",
    type: "loop",
    pagination: false
}).mount();

new Splide("#small-slideshow", {
    heightRatio: 0.5,
    //cover: true,
    //type: "loop",
    pagination: false,
    perPage: 2,
    gap: "40%",
    fixedHeight: "100%",
    //width: "100%"
}).mount();