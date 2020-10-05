function setup() {
  createCanvas(800, 800);
  background(200);
  background(0);
}
function draw() {
  noStroke();
  translate(width/2, height/2);
  fill(255);
  frameRate(60);

  strokeWeight(10);
  strokeCap(SQUARE);

  stroke(random(200,255),random(100),random(255));
  line(0, 0, random(-300, 300), random(-300, 300)); 
}
