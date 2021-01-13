const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstranint = Matter.MouseConstranint;
var engine, world;





function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;


  
    pendulum1 = new Pendulum(200,200,40,40);
    pendulum2 = new Pendulum(250,200,40,40);
    pendulum3 = new Pendulum(300,200,40,40);
    pendulum4 = new Pendulum(350,200,40,40);
    pendulum5 = new Pendulum(400,200,40,40);
   
    sling1 = new Sling (pendulum1.body,{x:200, y:100});
    sling2 = new Sling (pendulum2.body,{x:250, y:100});
    sling3 = new Sling (pendulum3.body,{x:300, y:100});
    sling4 = new Sling (pendulum4.body,{x:350, y:100});
    sling5 = new Sling (pendulum5.body,{x:400, y:100});
 
}

function draw(){
   background(15,14,19);
   Engine.update(engine)
     
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();



}

function mouseDragged(){
    Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY})
}
