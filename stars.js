class Stars{
    constructor(y){
       this.x=random([70,500,800,1200]);
       this.width= 20;
       this.body= createSprite(this.x,y);
       if(keyDown("space")){
        this.body.velocityY= 10;
       }
       var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: this.body.addImage(meteorImg);
              break;
      case 2: this.body.addImage(meteor3Img);
              break;
      default: break;
    }
    this.body.scale= 0.8
    //this.body.debug=true
    this.body.setCollider("rectangle",0,50,100,200)
    }

  
}
