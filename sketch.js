function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90);
  var hr = hour();
  var mn = minute();
  var sc = second(); 
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr %12, 0, 12, 0, 360)
  push();
  rotate (scAngle);
  stroke(207,0,99);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate (mnAngle);
  stroke(254,221,39);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate (hrAngle);
  stroke(247,106,4);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  strokeWeight(15);
  noFill();
  stroke(207,0,99);
 // 255,0,0
  arc(0,0,300,300,0,scAngle);

  stroke(254,221,39);
  arc(0,0,280,280,0,mnAngle);

  stroke(247,106,4);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}