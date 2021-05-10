const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron1 = new Iron(600,200,50,50);
    iron2 = new Iron(500,100,25,25);
    stone1 = new Stone(700,300,30,30);
    stone2 = new Stone(800,400,30,30);
  
    rubber1 = new Rubber(300,400,30,30);
    rubber2 = new Rubber(400,500,40,40);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    iron1.display();
    iron2.display();
    stone1.display();
    stone2.display();

    rubber1.display();
    rubber2.display();
 
}