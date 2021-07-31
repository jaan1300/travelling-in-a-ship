var sea,ship;
var seaImage, shipImage;
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400);
  sea.addImage(seaImage);
  sea.scale=0.5;
  sea.velocityX=-2;
  ship=createSprite(150,200,50,50); 
  ship.addAnimation("sailing",shipImage);
  ship.scale=0.3;  
}

function draw() {
  background("blue");
  console.log(sea.x);
  if(sea.x<0){
    sea.x=200; 
  }
  drawSprites();
}