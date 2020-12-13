var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,200,70,70);
   gameObject1.shapeColor = "green";
    gameObject1.debug = true; 
  gameObject2 = createSprite(400,100,70,70); 
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;
  gameObject3 = createSprite(700,100,70,70);
  gameObject3.shapeColor = "green"; 
  gameObject3.debug = true; 
  gameObject4 = createSprite(1000,200,70,70); 
  gameObject4.shapeColor = "green"; 
  gameObject4.debug = true;

  gameObject1.velocityX = 5;
  gameObject4.velocityX =-5;

}

function draw() {
  
  background(0,0,0); 

bounceoff(gameObject1,gameObject4);
  
  drawSprites();
}

