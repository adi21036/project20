var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,30,30);
  wall = createSprite(700, 200, 40, height/2);
  
  speed=random(50,90)
  weight=random(400,1500)
  car.velocityX=speed;
}

function draw() {
  background("black");
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="red";
    }
    if((deformation<180)&&deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  }
  
  drawSprites();
}