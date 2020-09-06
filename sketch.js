var car,wall;
var speed,weight;

  

function setup() {
  createCanvas(1600,400);

  car=createSprite(50,200, 50, 50);
  wall=createSprite(1500,200,50,height/2);
  
  wall.shapecolor(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(255,255,255);
    car.velocityX=speed;
    if(car.istouching(wall)){
    deformation=0.5*weight*speed*speed/22500;

    }

    if (deformation<=100) {
      car.shapecolor="green";
      
    } 

    if (deformation===100>=180) {
      car.shapecolor="yellow";
      
    } 

    if (deformation<180) {
      car.shapecolor="red";
      
    } 
   
  drawSprites();
}