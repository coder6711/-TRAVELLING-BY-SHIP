var Ship_runing,edges;
var ocean;

function preload(){
Ship_runing = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
ocean = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,400,400);
  sea.addImage("sea",ocean);
  sea.scale = 0.5;
  sea.velocityX = 2;
  
  Ship = createSprite(50,260,50,50);
  Ship.addAnimation("runing",Ship_runing);
  Ship.scale = 0.2;
  Ship.x=350

  edges = createEdgeSprites();

  

}

function draw() {
  if(sea.x<0)  {
  sea.x = sea.width / 2; }
  
 
  Ship.collide(edges[3]);
  drawSprites();
  
  
  

  
  
  
}