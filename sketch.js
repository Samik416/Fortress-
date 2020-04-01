const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box, Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8;
var stick, stick1, stick2, stick3, stick4, stick5, stick6;
var edges;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  Box = new box(90, 380, 50, 50);
  Box1 = new box(130, 380, 50, 50);
  Box2 = new box(170, 380, 50, 50);
  Box3= new box(225, 380, 50, 53);
  Box4= new box(260, 380, 50, 60);
  Box5 = new box(130, 345, 50, 50);
  Box6 = new box(170, 340, 50, 50);
  Box7 = new box(220, 340, 50, 50);
  Box8= new box(180, 290, 50, 50);

  stick = new box(90, 380, 10, 200);
  stick1 = new box(270, 380, 10, 200);
  stick2 = new box(130, 340, 10, 90);
  stick3= new box(230, 330, 10, 90);
  stick4= new box(170, 290, 10, 90);
  stick5 = new box(190, 280, 10, 90);
  stick6 = new box(180, 250, 10, 90);

  edges = createEdgeSprites();
}

function draw() {
  background(0); 

  Engine.update(engine);
  Box.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();

  stick.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick.display();
  
  Box.collide(edges);
  Box1.collide(edges);
  Box2.collide(edges);
  Box3.collide(edges);
  Box4.collide(edges);
  Box5.collide(edges);
  Box6.collide(edges);
  Box7.collide(edges);
  Box8.collide(edges);

  stick.collide(edges);
  stick1.collide(edges);
  stick2.collide(edges);
  stick3.collide(edges);
  stick4.collide(edges);
  stick5.collide(edges);
  stick6.collide(edges);
}