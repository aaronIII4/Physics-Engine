const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create(); //create physics engine
  world = engine.world; //create a new world using physics engine
  //stop the ground from going out the screen
  var ground_options = {
    isStatic: true
  }
  //ball bounciness
  var ball_options = {
    restitution: 1  
  }

  //create ball and ground and add options
  ground = Bodies.rectangle(200,390,200,20,ground_options); //create an object in this world
  World.add(world,ground); //add the object body to the world
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  //console.log(ground)
}

function draw() {
  background(0);
  Engine.update(engine); //update the physics engine regularly 
  rectMode(CENTER); //instructs the computer to take the x and y co-ordinates to the center
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS); //instructs the computer to take the x and y co-ordinates to the center
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}