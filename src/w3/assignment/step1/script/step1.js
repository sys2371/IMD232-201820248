let cv;
let mv;
let pos;
let vel;
let x;
let y;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  pos = createVector(random(width), random(height));
  vel = p5.Vector.random2D();
  vel.mult(5);
}

function draw() {
  background('white');
  mv.set(mouseX, mouseY);
  stroke('black');
  line(pos.x, pos.y, mv.x, mv.y);
  ellipse(pos.x, pos.y, 50);

  update();
  checkEdges();
  display();
}

function update() {
  pos.add(vel);
}

function checkEdges() {
  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
