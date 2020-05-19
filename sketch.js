const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var groundOptions;
var ground;
var holderOptions;
var holder;
var ballOptions;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  groundOptions ={
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,320,400,20,groundOptions);
  World.add(world,ground);

  holderOptions ={
    isStatic : true
  }
  
  holder = Bodies.rectangle(200,50,60,20,groundOptions);
  World.add(world,holder);

  ballOptions ={
    restitution : 1.0,
    density : 1.0
  }
  
  ball = Bodies.circle(200,200,50,groundOptions);
  World.add(world,ball);

  var options=
  {
    bodyA : ball,
    bodyB : holder,
    stiffness : 0.005,
    length : 320
  }
  fill(255);
  var string = Constraint.create(options);
  World.add(world,string);
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  fill("blue");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,60,20);
  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50,);
  strokeWeight(2);
  stroke("white");
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);
if(keyCode===32)
{
ball.position.x = mouseX;
ball.position.y = mouseY;
}
else if(keyCode===ENTER)
{
ball.position.x = 200;
}
}