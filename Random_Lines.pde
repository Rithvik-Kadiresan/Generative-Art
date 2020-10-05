void setup() {
  size(800, 800);
  background(#f1f1f1);
  background(0);
}
void draw() {

  noStroke();
  translate(width/2, height/2);
  fill(255);
  frameRate(60);



  //float wave = sin(radians(frameCount));
  //float xmov = wave * width/2 ;

  strokeWeight(10);
  strokeCap(SQUARE);

  stroke(random(100,255),random(100,255),random(100,255));
  line(0, 0, random(-300, 300), random(-300, 300)); 

  //save("output4/frame.png");
}
