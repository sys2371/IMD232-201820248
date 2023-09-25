let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = createVector();
}

function draw() {
  background('white');

  let posMv = createVector(mouseX, mouseY).sub(pos);

  posMv.setMag(0.1);

  acc = posMv;

  vel.add(acc);
  vel.limit(10);
  pos.add(vel);

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

  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  stroke('crimson');
  line(pos.x, pos.y, pos.x + 10 * vel.x, pos.y + 10 * vel.y);

  stroke('cornflowerblue');
  line(pos.x, pos.y, pos.x + 100 * acc.x, pos.y + 100 * acc.y);
}
