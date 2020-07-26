//Global Variables

var monkey,monkeyImg,monkeyImg2,monkeyImg3,monkeyImg4,monkeyImg5,monkeyImg6,monkeyImg7,monkeyImg8,monkeyImg9,monkeyImg10;

var ground,ground2;
var obstacles,stone,stoneG,invisible,banana,foods,bananaG;
var score,gameOver,gameOver2;

    function preload() {
  monkeyImg = loadImage("Monkey_01.png");
 monkeyImg2 = loadImage("Monkey_02.png");
 monkeyImg3 = loadImage("Monkey_03.png");
 monkeyImg4 = loadImage("Monkey_04.png");
 monkeyImg5 = loadImage("Monkey_05.png");
 monkeyImg6 = loadImage("Monkey_06.png");    
 monkeyImg7 = loadImage("Monkey_07.png");
 monkeyImg8 = loadImage("Monkey_08.png");
 monkeyImg9 = loadImage("Monkey_09.png");
 monkeyImg10 = loadImage("Monkey_10.png");
 ground = loadImage("jungle.jpg");     
 stone = loadImage("stone.png");
 foods = loadImage("Banana.png");
 gameOver = loadImage("gameOver.png");
}


function setup() {
  createCanvas(600,400);
  
 ground2 = createSprite(300,100,60,40);
  ground2.addImage("ground2",ground);
  ground2.scale = 1.2; 
  ground2.x = ground2.width/2;
  ground2.velocityX = -5;
  
 stoneG = createGroup();
 bananaG = createGroup();

  monkey = createSprite(50,270,20,50);
  monkey.addAnimation("monkey",monkeyImg,monkeyImg2,monkeyImg3,monkeyImg4,monkeyImg5,monkeyImg6,monkeyImg7,monkeyImg8,monkeyImg9,monkeyImg10);
  monkey.scale = 0.1;
  
  invisibleG = createSprite(300,300,600,5);
  invisibleG.visible = false;
  
  score = 0;
  

  
}


function draw(){
 background(200); 
  
  monkey.collide(invisibleG);
  
  if (ground2.x < 0){
    ground2.x = ground2.width/2;
  }
  
  if(keyDown("space")&&monkey.y >= 230){
    monkey.velocityY = -7;
  }
 
   monkey.velocityY = monkey.velocityY + 0.3;
    
  if(monkey.isTouching(bananaG)){
   score = score+5;
   bananaG.destroyEach();
    switch(score){
      case 10 : monkey.scale = 0.12;
        break;
     case 20 : monkey.scale = 0.14;
        break;
    case 30 : monkey.scale = 0.16;
        break;
    case 40 : monkey.scale = 0.18;
        break;
        
        default: break;
    }

    if(monkey.isTouching(stoneG)){
       }
 }
  
  obstacle();
  food();
  
drawSprites();
  textSize(20);
  fill("white");
 text("score: "+ score,500,350);    
  
}



 function obstacle(){
   if(frameCount% 200 === 0){           
    obstacles = createSprite(300,270,50,30);
     obstacles.addAnimation("obstacles",stone);
     obstacles.x  = Math.round(random(600,600));
    obstacles.scale = 0.2;
    obstacles.velocityX = -5;
    obstacles.lifetime = 230;
    stoneG.add(obstacles);
   stoneG.setColliderEach("circle",0,0,110);
  }
 }
 
function food(){
  if(World.frameCount % 120 === 0){
    banana = createSprite(200,200,30,30);
    banana.addAnimation("banana",foods);
    banana.scale = 0.05;
    banana.y = Math.round(random(260,150));
    banana.x = Math.round(random(600,600));
    banana.velocityX = -5;
    banana.lifetime = 140;
    bananaG.add(banana);
    bananaG.setColliderEach("circle",0,0,110)
  }
}