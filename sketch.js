function setup() {
  createCanvas(500, 500);
  background(11);
}

function draw() {
circle(mouseX, mouseY, 20);
  fill(5,10,190);
  noStroke();
  smooth();
  strokeCap(ROUND);
}