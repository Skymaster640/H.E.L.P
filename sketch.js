
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin_look;
var Dustbinimg;

function preload()
{
  Dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject = new Paper(100,590,30,30,25);
	side1 = new Trashcan(650,590,90,10);
	side2 = new Trashcan(605,540,10,100);
	side3 = new Trashcan(695,540,10,100);
	Dustbin_look = createSprite(650,590,90,10);
	Dustbin_look.addImage("Dustbinimg");

	ground =  new Ground(400,600,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  //textSize(40)
  text("Press different button here!", 300, 200);
  
  drawSprites();

  keyPressed();
 
  paperObject.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-1});
	}
}



