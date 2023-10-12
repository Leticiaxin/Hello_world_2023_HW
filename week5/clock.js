function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  
  background(0);
  translate(width/2, height/2);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(7);
  stroke(286,100,100);
  noFill();
  let end1 = map(sc,0,60,0,360)
  arc (0,0,300,300,0,end1);
  
  stroke(310,50,100);
  let end2 = map(mn,0,60,0,360)
  arc (0,0,280,280,0,end2);
  
  stroke(314,20,100);
  let end3 = map(hr % 12,0,12,0,360)
  arc (0,0,260,260,0,end3);
  
  drawTextClock()
}

function drawTextClock(){
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  rotate(90);
  textSize(20);
  noStroke();
  textFont("Helvetica");
  let textX = -50;
  let textY = -25;
  
  fill(0,0,100);
  text("Hour: " + hr, textX, textY);
  textY += 35;

  text("Minutes: " + mn, textX, textY);
  textY += 35;

  text("Seconds: " + sc, textX, textY);
}
