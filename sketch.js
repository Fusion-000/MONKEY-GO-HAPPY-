
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
FoodGroup = createGroup();
obstacleGroup = createGroup();
}


function draw() {
 background(255);
text("Survival Time =  "+Math.round(frameCount/20),200,100);
  if (ground.x<0){
    ground.x=ground.width/2;
  }

  if (keyDown("space") && monkey.y > 300){
    monkey.velocityY = -13;
    
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
if (monkey.isTouching(obstacleGroup)){
  ground.velocityX = 0;
  FoodGroup.velocityXEach = 0;
  obstacleGroup.velocityXEach = 0;
  monkey.addAnimation("sprite_0.png");
}
drawSprites();
}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,150,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
         
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var obstacle = createSprite(300,330,40,10);
   
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}






