var hourT,minuteT,secondT,dhour,dminute,dsecond
var hourHand,minHand,secHand
var hour,minute,second
var s,m,h

function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);  
}

function draw(){
  background(0); 

  noStroke();
  fill("white");
  textSize(16);
  text("12",239,190);
  text("6",246,320);
  text("3",315,255);
  text("9",180,255);
  hr = hour();
  mn = minute();
  sc = second();

  dhour = hr/12*360
  dminute = mn/60*360
  dsecond = sc/60*360
  
  angleMode(DEGREES);
  ellipseMode(RADIUS);

  textSize(20);
  noStroke();
  fill("orange");
  text(hr+":"+mn+":"+sc,212,120);

  push();
  noFill();
  stroke("red");
  strokeWeight("5");
  hourhand = arc(250,250,80,80,-90,dhour-90,);
  pop();

  push();
  noFill();
  stroke("orange");
  strokeWeight("5");
  minhand = arc(250,250,90,90,-90,dminute-90,);
  pop();

  push();
  noFill();
  stroke("yellow");
  strokeWeight("5");
  sechand = arc(250,250,100,100,-90,dsecond-90,);
  pop();

  push();
  
  stroke("yellow");
  translate(250,250);
  strokeWeight(2);
  rotate(dsecond-90);
  line(0,0,70,0);
  pop();

  stroke("orange");
  translate(250,250);
  strokeWeight(4);
  rotate(dminute-90);
  line(0,0,50,0);
  pop();

  stroke("red");
  translate(250,250);
  strokeWeight(5);
  rotate(dhour-90);
  line(0,0,30,0);
  pop();
}