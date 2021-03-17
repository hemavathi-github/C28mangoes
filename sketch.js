
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,20);
	mango3=new mango(900,250,25);
	mango4=new mango(1150,240,28);
	stone1=new stone(100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshot = new slingShot(stone1.body,{x:240, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone1.display();
  groundObject.display();
  slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX , y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function detectCollision(stone1,mangoobj){
	stonepos=stone1.body.position;
	mangopos=mangoobj.body.position;
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
	if(distance<=stone1.r+mangoobj.r){
	Matter.Body.setStatic(mangoobj.body,false)
	}
}
function keyPressed(){
	if(keyCode===32){
		slingshot.attach(stone1.body);
		Matter.Body.setPosition(stone1.body,{x:240, y:420})
		
	}
}