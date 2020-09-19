
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var dustbinSide1, dustbinSide2, dustbinSide3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  ground = new Ground();
    ball = new Paper(200,200,25,25);
    dustbinSide1 = new Dustbin(1250,380,200,20);
	  dustbinSide2 = new Dustbin(1140,345,20,90);
    dustbinSide3 = new Dustbin(1360,345,20,90);
   
   

	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  

  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:220,y:290});
  }
}



