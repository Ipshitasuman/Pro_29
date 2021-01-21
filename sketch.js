const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
// var score = 0;
var bg;

function preload(){
  
  p_Img = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1600,600);
  // getBgImg();
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:0.4,
    isStatic:false,
    density:0.8,
    friction:1.0
  }
 
  this.polygon = Bodies.circle(400,200,25,options);
  World.add(world,this.polygon);
  

 g1 = new Ground(690,500,330,15);
 g2 = new Ground(1280,300,250,15);
 g3 = new Ground(width/2,600,1700,20);
 b1 = new Block(600,470 ,30 ,40);
 b2 = new Block(630,470 ,30 ,40);
 b3 = new Block(660,470 ,30 ,40);
 b4 = new Block(690,470 ,30 ,40);
 b5 = new Block(720,470 ,30 ,40);
 b6 = new Block(750,470 ,30 ,40);
 b7 = new Block(780,470 ,30 ,40);
 b8 = new Block(630,430 ,30 ,40);
 b9 = new Block(660,430 ,30 ,40);
 b10 = new Block(690,430 ,30 ,40);
 b11 = new Block(720,430 ,30 ,40);
 b12 = new Block(750,430 ,30 ,40);
 b13 = new Block(660,390 ,30 ,40);
 b14 = new Block(690,390 ,30 ,40);
 b15 = new Block(720,390 ,30 ,40);
 b16 = new Block(690,350 ,30 ,40);
 b17 = new Block(1220,270, 30, 40);
 b18 = new Block(1250,270, 30, 40);
 b19 = new Block(1280,270, 30, 40);
 b20 = new Block(1310,270, 30, 40);
 b21 = new Block(1340,270, 30, 40);
 b22 = new Block(1250,230, 30, 40);
 b23 = new Block(1280,230, 30, 40);
 b24 = new Block(1310,230, 30, 40);
 b25 = new Block(1280,190, 30, 40);

 slingShot = new SlingShot(polygon,{x:200,y:400});


}

function draw() {
  // if(bg){
    background(56,44,44);
  Engine.update(engine); 
  
  textSize(20);
  fill(255);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 450, 70);
  // text("Press Space to get a second chance to play",1100,550);
  // text("SCORE: "+ score , 1300,75);

 g1.display();
 g2.display();
 fill(134,206,234);
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 fill(253,191,203);
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 fill(63,224,208);
 b13.display();
 b14.display();
 b15.display();
 fill("grey");
 b16.display();
 fill(134,206,234);
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 fill(253,191,203);
 b22.display();
 b23.display();
 b24.display();
 fill(63,224,208);
 b25.display();
 
 imageMode(CENTER);
 image(p_Img,polygon.position.x,polygon.position.y,40,40);

 slingShot.display();

 /*b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();
 b9.score();
 b10.score();
 b11.score();
 b12.score();
 b13.score();
 b14.score();
 b15.score();
 b16.score();
 b17.score();
 b18.score();
 b19.score();
 b20.score();
 b21.score();
 b22.score();
 b23.score();
 b24.score();
 b25.score();
  
}*/
}               

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

/*function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBgImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour >= 6 && hour<=19){
      bg = (56,44,44);
  } else {
      bg = (56);
  }

}*/