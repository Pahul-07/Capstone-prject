class Obstacles{
    constructor(y){

       this.x=random([250,400,600,950,1400]);
       this.width= 20;
       this.body= createSprite(this.x,y);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: this.body.addImage(planet2Img);
              break;
      case 2: this.body.addImage(meteor2Img);
              break;
      case 3: this.body.addImage(planet3Img);
              break;
      case 4: this.body.addImage(planetImg);
              break;
      default: break;
    }
    this.body.scale= 0.8
 //   this.body.debug= true
    this.body.setCollider("circle",0,0,150)
}


}