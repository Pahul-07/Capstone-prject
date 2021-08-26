var rocketImg;
var newY=0;
var gap=500;
var gameState="wait"
var camera;
var score=0
var newY1=0;
var gap1=1000;
var score1=0;

function preload(){
  rocketImg= loadImage("rocket1.png");
  planetImg= loadImage("planet.png");
  meteorImg= loadImage("meteor.png");
  meteor2Img= loadImage("meteor2.png");
  meteor3Img=loadImage("meteor3.png");
  burstImg= loadImage("burst.png");
  planet2Img= loadImage("planet2.png");
  planet3Img= loadImage("planet3.png");
  flagImag= loadImage("flag.png");
  starImg= loadImage("star.png")

  blastSound= loadSound("explosion.mp3")
}
function setup(){
  var canvas=createCanvas(1400,800);
   
  rocket = new Rocket();
  planetGroup= new Group();
  starGroup= new Group();
  starGroup2= new Group();

  for(var i=0; i<35; i++){
    obstacle1= new Obstacles(newY);
    newY= newY-obstacle1.width-gap;
    newY1= newY1-obstacle1.width-gap1
    planetGroup.add(obstacle1.body);
    stars= new Stars(newY);
    planetGroup.add(stars.body);
    star = createSprite(random([170,1100,700]),newY1);
    star.addImage(starImg);
    starGroup.add(star);
    star2= createSprite(star.x,star.y,300,300);
    star2.visible=false
    starGroup2.add(star2);

  }
  safeZone= createSprite(width/2,newY);
  safeZone.addImage(flagImag);
  safeZone.scale= 0.5
  safeZone.debug=false
  safeZone.setCollider("rectangle",0,-200,500,500)
}


function draw()
{
  background(0);
  //translate(0,-(rocket.body.y-1100);
  textSize(40);
  fill("white")
  text("Be aware of obstacles",100,260);
  text("Press Ctrl+R to Restart",100,320);
  text("Also take the star",100,380);
  console.log(gameState);
  if(gameState === "wait"){
    rocket.body.pause();
    
    
}
if(rocket.body.isTouching(starGroup2)){
  starGroup.destroyEach();
  text("Well Done!",width/2,rocket.body.y-300)

}
if(keyDown("space")&& gameState==="wait"){
  gameState="play";
}
  if(rocket.body.isTouching(safeZone)){
    gameState="win";
  }

  if(gameState==="win"){
    rocket.body.velocityY=0;
    textSize(50);
    fill("white")
    text("Landed safely",width/2-100,rocket.body.y-500);
  
  }
  if(gameState==="play"){
    if(keyDown("right")){
      rocket.moveRight();
      //rocket.shoot();
    }
    if(keyDown("left")){
      rocket.moveLeft();
      //rocket.shoot();
    }
    if(keyDown("up")){
      rocket.shoot();
    }     
    if(keyDown("down")){
      rocket.moveDown();
    }
    if(rocket.body.isTouching(planetGroup)){
      blastSound.play();
      gameState="end"
    }
    score=score+frameCount/60; 
     rocket.body.velocityY=-(9+score/100);
     camera.position.y=rocket.body.y-200
     camera.position.x=width/2
  }
 
  if(gameState==="end"){
     rocket.body.addImage(burstImg);
     planetGroup.destroyEach();
     rocket.body.velocityY=0
     textSize(50);
     fill("white");
     text("Game Over ",width/2,rocket.body.y-500)
  }
  drawSprites();
}
