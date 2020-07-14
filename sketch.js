const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var engine, world;
var box1;
var bird,grnd;
var mConstraint;
var slingShot;
var platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);

    engine = Engine.create();
    world = engine.world;
       
    var mouse=Mouse.create(canvas.elt);

    var options={
        mouse:mouse
    }

    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    bird=new Bird(150,height-440,40,"pink");
    grnd = new Ground(width/2,height-90,width,20,"brown");
    platform=new Ground(200,height-190,200,180,"brown");
    slingShot=new SlingShot(bird.body,{x:200,y:height-440});
    
    box1 = new Box(720,600,70,70);
    box2 = new Box(920,600,70,70);
    pig1 = new Pig(810, 600);
    log1 = new Log(810,560,300, PI/2);

    box3 = new Box(720,700,70,70);
    box4 = new Box(920,700,70,70);
    pig3 = new Pig(810,700);

    log3 = new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   
    
}

function draw(){
    background(backgroundImg);
    text(mouseX+" ; "+mouseY,100,100);
    Engine.update(engine);
    grnd.show();
    
    bird.show();
    slingShot.display();
    platform.show();
    box1.show();
    box2.show();
    
    pig1.show();
    log1.display();

   // box3.show();
   // box4.show();
   // pig3.show();
   // log3.display();

    //box5.show();
   // log4.display();
   // log5.display();

}
function keyPressed()
{
    if(key===' ')
    {
        slingShot.fly();
    }
}
//function mouseDragged()
//{
  //  Matter.Body.setPosition(bird.body,{mouseX,mouseY});
//}
function mouseReleaesd()
{
    setTimeout(()=>{
    slingShot.fly();
    },100);
}

