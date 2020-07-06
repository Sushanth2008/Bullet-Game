var bullet,wall;

var speed,weight;


function setup() {
  createCanvas(1600,400)

  speed=random(22,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor=color("silver")

 wall=createSprite(1300,200,60,height/2);
 wall.shapeColor=80,80,80
  
}

function draw() {
  background("white");  

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  bullet.x=1275;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage<10){
    wall.shapeColor=color("green");
    textSize(50)
    text("SAFE",600,200)
  }

  if(damage>10){
    wall.shapeColor=color("red")
    textSize(50)
    text("NOT SAFE",520,200)
  }
}

drawSprites();

}

function hasCollided(bullet1,wall1){
  bullet1RightEdge=bullet1.x+bullet1.width;
  wall1LeftEdge=wall1.x;
  if(bullet1RightEdge>=wall1LeftEdge){
     return true;
    
  }
  return false;
}
