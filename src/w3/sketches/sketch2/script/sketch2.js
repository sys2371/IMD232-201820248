let pos;
let vel;
let acc;
let redius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 1);
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}
function draw() {
  background(255);
  acc = p5.Vector.random20();
  acc.mult(2);
  vel.add(acc);
  pos.add(vel);
  //   if (pos.x < 0) {
  //     vel.x *= -1;
  //   } else if (pos.x > width) {
  //     vel.x *= -1;
  //   }
  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}
