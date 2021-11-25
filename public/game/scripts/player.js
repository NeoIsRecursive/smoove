class Player {
    constructor(){
        this.speed = 650;
        this.x = 0;
        this.y = 0;
        this.width = c.width * 0.15;
        this.height = 90;
        this.spriteWidth = 1536/3;
        this.spriteHeight = 300;
        this.spritesheet = 'public/game/images/player/playerSpritesheet.png'; 
        this.sprite = 0;
        this.playerImage = new Image();
        this.playerImage.src = this.spritesheet;
        
    }

    checkCollission(){
        if (this.x < 0 || this.x + this.width > c.width){
            gameover = true;
        }
        traffic.forEach((traffic, index) => {
                if (
                    this.x > traffic.x + traffic.width ||
                    this.x + this.width < traffic.x ||
                    this.y > traffic.y + traffic.height ||
                    this.y + this.height-50 < traffic.y
                    ){
                        //no collission
                } else {
                    gameover = true;
                }
        });
    }

    update(deltatime,index){
        this.checkCollission();
        if (keys.length < 1){
            this.sprite = 0;
        }
        if (keys['ArrowLeft'] === true){
            this.x -= this.speed * deltatime;
            this.sprite = 1;
        }
        if (keys['ArrowRight'] === true){
            this.x += this.speed * deltatime;
            this.sprite = 2;
        }
    }
    
    draw(){
        cc.drawImage(this.playerImage, this.sprite * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}