function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(mouseX % 255);
  ellipse(100, 100, 50, 50);
}