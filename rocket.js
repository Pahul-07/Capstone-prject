class Rocket{
    constructor(){
        this.body = createSprite(width/2,height-50);
        this.body.addImage(rocketImg);
       // this.body.velocityY=-2;
        //this.angle=0
        camera.position.x=width/2
        camera.position.y=this.body.position.y
       // this.body.debug=true
        this.body.setCollider("rectangle",0,-50,80,200)

    }
    moveRight(){
        this.body.x+=10;
        //this.body.rotation+=1;
        //this.angle-=0.02
    }
    moveLeft(){
        this.body.x-=10;
        //this.body.rotation-=1;
        //this.angle+=0.02;
    }

    shoot(){
        this.body.y-=5
    }
    moveDown(){
        this.body.y+=5
    }
}