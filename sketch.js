var hr, min, sc;
var scAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,600);

  angleMode(DEGREES);

}

function draw() {
  background(0);
  
  fill(255, 255, 255);
  textSize(30);
  textFont("Fira Code");
  text("WELCOME TO THE FREE CLOCK SITE", width/6, 30);
  textSize(20);
  text("ITS FOR THOSE WHO WANT TO SEE THE TIME LIKE A GAME", 100, 400);
  text("SO ENJOY!", 100, 450);

  translate(200,200);

  rotate(-90);

  hr=hour();
  min=minute();
  sc=second();

  scAngle = map(sc,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(minAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
  
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  
  
  stroke("yellow");
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke("green");
  arc(0,0,300,300,0,scAngle);
  
  stroke("yellow");
  arc(0,0,280,280,0,minAngle);
  
  stroke("red");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}