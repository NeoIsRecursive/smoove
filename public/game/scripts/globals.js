const c = document.getElementById('game');
const cc = c.getContext('2d');
let gameover = false;
let keys = [];
let player;
let traffic = [];
const bg = document.getElementById('background');
bg.pause();
explosionImage = new Image();
explosionImage.src = 'public/game/images/boom.png';

document.body.addEventListener("keydown", function (e) {
    keys[e.key] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.key] = false;
});

class Score {
    constructor(){
        this.score = 0;
    }
    draw(){
        cc.font = ('20px arial');
        cc.fillText('score: ' +this.score,25,25);
    }
}

let score = new Score();