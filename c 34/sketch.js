const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var ground;
var chain;
var ball;
function preload() {


}


function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;



    box1 = new Box(windowWidth - 400, windowHeight - 100, 200, 100);
    box2 = new Box(windowWidth - 400, windowHeight - 200, 200, 100);
    box3 = new Box(windowWidth - 400, windowHeight - 300, 200, 100);
    box4 = new Box(windowWidth - 400, windowHeight - 400, 200, 100);
    box5 = new Box(windowWidth - 400, windowHeight - 500, 200, 100);

    box6 = new Box(windowWidth - 600, windowHeight - 100, 200, 100);
    box7 = new Box(windowWidth - 600, windowHeight - 200, 200, 100);
    box8 = new Box(windowWidth - 600, windowHeight - 300, 200, 100);
    box9 = new Box(windowWidth - 600, windowHeight - 400, 200, 100);
    box10 = new Box(windowWidth - 600, windowHeight - 500, 200, 100);
    box11 = new Box(windowWidth - 500, windowHeight - 600, 200, 100);
    box12 = new Box(windowWidth - 500, windowHeight - 750, 100, 200);
    ball = new Ball(1200, windowHeight - 400, 100);
    ground = new Ground(windowWidth / 2, windowHeight - 25, windowWidth, 50);
    chain = new Constriant();
}


function draw() {
    background("blue");

    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball.display();
    chain.display();

if(keyIsDown(32)){
  Matter.Body.applyForce( ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: -300, y: 0});     

}

}
