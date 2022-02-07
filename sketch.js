const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var push;
var left2;
var botao1;
var botao2;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  botao1 = createImg('right.png');
  botao1.position(220,30);
  botao1.size(50,50);  
  botao1.mouseClicked(hForce);

  botao2=createImg('up.png');
  botao2.position(20,30);
  botao2.size(50,50); 
  botao2.mouseClicked(vForce)

  ground =new Ground(300,390,600,20);
  right = new Ground(590,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(300,10,600,20);
  left2 = new Ground(480,330,20,100);
  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
    
  }
 ball = Bodies.circle(200,100,20,ball_options)
 World.add(world,ball)
 rectMode(CENTER);
 ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  left2.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}
groundObj.display();
ground=new ground(width/2,670,width,20);
leftSide= new ground(1100,600,20,120)

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0}) }

  function vForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-50}) }
  