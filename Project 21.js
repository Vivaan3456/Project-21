var bullet; 
var wall ;
var weight;
var speed;
var thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83)


  bullet =createSprite(50, 200, 50, 5);
  bullet.shapeColor=color(225);
  bullet.velocityX=speed;


  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255); 
  hasCollided();

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var deformation=(0.5*weight*speed*speed)/I(thickness*thickness*thickness);

  if(damage>10){
  wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}








  drawSprites();
}
function hasCollided(bullet,wall){


  bulletRightEdge=bullet.x+bullet.width;
wall.leftEdge=wall.width

if(bullet.bulletRightEdge>=wall.leftEdge)
{
  return true;
}
return false
}


