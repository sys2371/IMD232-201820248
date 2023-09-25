let pos;
let vel;
let acc;
let mouse;
let vis;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  vis = createVector();
  acc = p5.Vector.random2D();
  acc.mult(0.01);
}

function draw() {
  background('white');
  update();
  checkEdges();
  mouse = createVector(mouseX, mouseY);
  vis = p5.Vector.sub(mouse, pos);
  displayVis();
  display();
  displayAcc();
  displayVel();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
