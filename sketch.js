var bullet;
var speed;
var thickness;
var wall;
var weight;

function setup(){
  createCanvas(1200,400);

  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);

  bullet=createSprite(100,200,50,10);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,200);
}
                       
function draw(){
  background("black");

if(hasCollide(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed  /(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color("red");
  }
  if(damage<10){
    wall.shapeColor=color("green");
  }
}
  drawSprites();
}
 function hasCollide(Lbullet,Lwall){
   bulletRightEdge=Lbullet.x +Lbullet.width;
   wallLeftEdge=Lwall.x
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
  return false
 }
