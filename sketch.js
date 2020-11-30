const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies 
var engine;
var world;
var object;
var box1;
var box2;
var ground1,pig1,log1,pig2,box3,bird1;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(600,120,70,70);
  ground1 = createSprite(100,400,100000,10)
  
}

function draw() {
  background("blue");
  Engine.update(engine); 
 box1.display();
 ground1.display();
}
