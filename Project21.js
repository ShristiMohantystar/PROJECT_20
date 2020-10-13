var wall,thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 10, 20);
  bullet.shapeColor=("white");
  bullet.velocity=speed;
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor(80,80,80);
}

function draw() {
  background(255,255,255);  
if(hasCollided(Lbullet,Lwall)){
    bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/22500;
}

if(damage>10){

  wall.shapeColor=color("Green");

}

if(damage<10){

bullet.shapeColor=color("Red");

}





  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{

bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;

}