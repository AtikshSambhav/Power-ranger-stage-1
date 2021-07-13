var bg, ranger, ground;
var villian1, villian2, villian3;
var treasure1, treasure2, treasure3, treasure4,treasure5;


function preload(){
  bg = loadImage("background.jpg")
  ranger = loadImage("RedRanger.png")
  villian1 = loadImage("masterzandred.png")
  villian2 = loadImage("octuru.png")
  villian3 = loadImage("serreter.png")
  treasure1 = loadImage("treasure1.png")
  treasure2 = loadImage("treasure2.png")
  treasure3 = loadImage("treasure3.png")
  treasure4 = loadImage("treasure4.png")
  treasure5 = loadImage("treasure5.png")
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(500, 200, 800 ,400);
  ground.addImage(bg);
  ground.scale=3
  ground.velocityX= -3

}

function draw() {
  background("black"); 
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  drawSprites();

}

