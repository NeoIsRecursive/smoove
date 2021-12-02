function setSize(){
    // const windowHeight = 480; 
    // const windowWidth = 854;
    c.height = window.innerHeight;
    c.width = window.innerHeight*1.77;
    const bg = document.getElementById('background');
    bg.width = c.width;//window.innerWidth;
    bg.height = c.height;//window.innerHeight;
    center(c);
    center(bg);

    player.y = c.height - player.height;
    player.x = (c.height / 2 ) + player.width/2;
}

function center(x){
    x.style.position = "absolute";
    x.style.top = "50%";
    x.style.left = "50%";
    x.style.transform = 'translate(-50%,-50%)';
}

function createTraffic(){
    const lane = Math.floor(Math.random()*4);
    traffic.push(new Traffic(lane));
}

function startGame(){
    player = new Player();
    setSize();
    player.draw();
    let timeleft = 5;
    document.querySelector('#timer').innerText = timeleft;
    let startTimer = setInterval(function(){
        if(timeleft === 'Go!') {
            clearInterval(startTimer);
            document.querySelector('#timer').style.display = 'none';
            document.querySelector('#instruction').style.display = 'none';
            gameEngine();
        }
        timeleft--;
        if (timeleft === 0) timeleft = 'Go!';
        document.getElementById('timer').innerText = timeleft;

    },1000);
}

function gameOver() {
    cc.font = '70px arial';
    cc.fillText('YOU CRASHED',(c.width/2)-250,c.height/2);
    document.getElementById('background').pause();
    drawExplosion();
}

//pretty ugly, but had be made quickly
function drawExplosion(){
    this.image = explosionImage;
    this.spriteSize = {
        w:this.image.width/6,
        h:this.image.height/7
    }
    this.length = 6*7;
    this.spritex = 0;
    this.spritey = 0;
    count = 0;

    this.animation = () => {
        if (count === this.length-1){
            clearInterval(explosionAnim);
            document.querySelector('.game').style.display = 'none';
            document.querySelector('.after-game').style.display = 'block';
        }
        if (this.spritex >= this.image.width){
            this.spritex = 0;
            this.spritey+= this.spriteSize.h;
            if (this.spritey >= this.image.height){
                this.spritey = 0;
            };
        }
        this.spritex += this.spriteSize.w;

        cc.drawImage(this.image, this.spritex, this.spritey, this.spriteSize.w, this.spriteSize.h, player.x-10, player.y-150*0.5, 200, 200);
        count++;
    }

    let explosionAnim = setInterval(() => {
        animation();
    }, 1000/60);
}