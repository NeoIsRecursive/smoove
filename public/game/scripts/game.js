function gameEngine() {
this.prev_time = 0;
this.dt = 0;
this.trafficCounter = 0;
this.trafficTime = 1;
bg.play();
    this.update = function(deltatime){
        //loop over your objects and run each objects update function
        [...traffic, player].forEach((entety,index) => entety.update(deltatime,index));
    }

    this.render = function(){
        cc.clearRect(0,0,c.width,c.height);
        //loop over your objects and run each objects render function
        [...traffic, player,score].forEach(entety => entety.draw());
    }
    this.frame = function(timestamp) {
        this.now = timestamp;
        this.dt = (this.now - this.prev_time)/1000;
        this.prev_time = this.now;
        this.frameCount=0;
        this.trafficCounter += this.dt;
        if(this.trafficCounter > this.trafficTime){
            this.trafficCounter = 0;
            createTraffic();
        }
        this.update(this.dt);
        this.render();
        if (!gameover){
            window.requestAnimationFrame(frame);
        } else {
            gameOver();
        }
    }
    this.frame(0);
};

document.querySelector('form').addEventListener('submit', (x)=>{
    x.preventDefault();
    document.querySelector('.form-content').style.display = 'none';
    document.querySelector('.game').style.display = 'inline-block';
    startGame();
})