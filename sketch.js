function setup() {
  createCanvas(1600,400);
  var car,wall;
  var speed,weight;
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapecolor=(80,80,80);
  car.velocityX=speed;
  deformation=(0.5*speed*speed)/22500

  if (deformation<100){
car.shapecolor=green;

}
if (deformation>180){

  car.shapecolor=red;
}
}

function draw() {
  background(255,255,255);  
  drawSprites();
}