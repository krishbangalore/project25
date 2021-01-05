
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	ground = new Ground(600,height,1200,20)
	box1 = new Dustbin(225,700,50,200) ;
	box2 = new Dustbin(575,700,50,200) ;
	box3 = new Dustbin(400,525,400,400) ;
	paper1 = new Paper(150,690,40);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground.display()
  box1.display();
  box2.display();
  box3.display();
  

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
   
   
	   // Look at the hints in the document and understand how to make the package body fall only 
	   //on press of the Down arrow key.
	   //Body.setStatic(packageBody,false);
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-300})
	   
	 }
   }


