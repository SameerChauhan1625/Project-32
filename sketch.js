const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var stand1,stand2;
var polygon;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var slingshot;
var gameState = "Playing";
var score = 0;
var bgcolour;

function preload(){
  changeBG();
}

function setup() {
  createCanvas(1250,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(624,550,1250,30);

  stand1 = new Ground(500,450,250,20);
  stand2 = new Ground(950,250,180,20);

  //Stand1 bottom layer
  box1 = new Bluebox(400,449,30,40);
  box2 = new Greenbox(430,449,30,40);
  box3 = new Greenbox(460,449,30,40);
  box4 = new Greenbox(490,449,30,40);
  box5 = new Greenbox(520,449,30,40);
  box6 = new Greenbox(550,449,30,40);
  box7 = new Bluebox(580,449,30,40);

  //Stand1 third layer
  box8 = new Bluebox(430,407,30,40);
  box9 = new Bluebox(460,407,30,40);
  box10 = new Bluebox(490,407,30,40);
  box11 = new Bluebox(520,407,30,40);
  box12 = new Bluebox(550,407,30,40);

  //Stand1 second layer
  box13 = new Pinkbox(460,360,30,40);
  box14 = new Pinkbox(490,360,30,40);
  box15 = new Pinkbox(520,360,30,40);

  //Stand1 top layer
  box16 = new Yellowbox(490,330,30,40);

  //Stand2 bottom layer
  box17 = new Yellowbox(890,249,30,40);
  box18 = new Yellowbox(920,249,30,40);
  box19 = new Yellowbox(950,249,30,40);
  box20 = new Yellowbox(980,249,30,40);
  box21 = new Yellowbox(1010,249,30,40);

  //Stand2 second layer
  box22 = new Pinkbox(920,210,30,40);
  box23 = new Pinkbox(950,210,30,40);
  box24 = new Pinkbox(980,210,30,40);

  //Stand2 top layer
  box25 = new Bluebox(950,180,30,40);

  polygon = new Polygon(200,200,50,50);

  slingshot = new Sling(polygon.body,{x:200 , y:400});

}

function draw() {
  if(bgcolour){
    background(bgcolour);  
  }
  Engine.update(engine);
  
  textSize(20);
  fill("white");
  text("Press Space To Get Another Chance",200,100);

  drawSprites();
  
  stand1.display();
  stand2.display();

  ground.display();

  //Stand1 bottom layer
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  //Stand1 third layer
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  //Stand1 second layer
  box13.display();
  box14.display();
  box15.display();

  //Stand1 top layer
  box16.display();

  //Stand2 bottom layer
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  //Stand2 second layer
  box22.display();
  box23.display();
  box24.display();

  //Stand2 top layer
  box25.display();

  //Displaying the score
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  polygon.display();

  slingshot.display();

  fill("white")
  textSize(20);
  text("SCORE:  " + score,1100,50);

}

function mouseDragged(){
  if(gameState  !== "end"){
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "end";
}

function keyPressed(){
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
    gameState = "Playing";
  }
}

async function changeBG(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var datajson = await response.json();
  
  var dt = datajson.datetime
  var hour = dt.slice(11,13);

  if(hour >=06 && hour <= 19 ){
    bgcolour = rgb(234, 92, 31);

  }else{
    bgcolour = "black";
  }
}