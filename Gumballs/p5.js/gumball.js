function setup() {
  background(255);
  createCanvas(800,800);
}

function draw() {
  //background(#f1f1f1);
  translate(width/2, height/2);

  var wave = sin(radians(frameCount));

  stroke(0);
  strokeWeight(4);
  noFill();
  stroke(random(255),random(255),random(255));
  ellipse(0, 0, wave * 500, 500);
  
  //saveFrame("outputrender/frame_####.png");
}