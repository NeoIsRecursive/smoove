class Traffic {
    constructor(lane){
        this.x = c.width*0.5;
        this.lane = lane;
        this.y = c.height*0.35;
        this.xvel = 0;
        if (this.x < c.width*0.5) this.xvel = 1;
        this.speed = 200;
        this.scale = 0.1;
        //the size the car should be next to the player
        this.size = {
            width:150,
            height:100,
        }
        //the rendered size, used for hit detection etc.
        this.width = this.size.width * this.scale;
        this.height = this.size.width * this.scale;
        if (this.lane === 3){
            this.x = this.x - this.width*2.5;
        }
        if (this.lane === 2){
            this.x = this.x - this.width*1.5;
        }
        if (this.lane === 1){
            this.x = this.x + this.width;
        }
        this.spriteWidth = 1536/3;
        this.spriteHeight = 300;
        this.spritesheet = 'public/game/images/player/playerSpritesheet.png'; 
        this.sprite = 0;
        this.image = new Image();
        this.image.src = this.spritesheet;
    }
    update(deltatime,index){
        this.y += (this.speed * deltatime) * (this.y*0.005);
        if (this.lane === 3){
            this.x = this.x - this.width*2*deltatime;
        }
        if (this.lane === 2){
            this.x = this.x - this.width*deltatime ;
        }
        if (this.lane === 1){
            this.x = this.x + this.width*deltatime;
        }
        this.scale += 0.015;
        this.width = this.size.width * this.scale;
        this.height = this.size.height * this.scale;
        // if (this.lane == 4){
        //     this.x += this.xvel;
        // }
        if (this.y > c.height){
            traffic.splice(index,1);
            score.score += 1;
        }
    }
    draw(){
        cc.drawImage(this.image, this.sprite * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}