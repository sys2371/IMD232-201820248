let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ball = new Mover(width / 3, 0, 50);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
}

function draw() {
  let gA = p5.Vector.mult(gravity, ball.mass);
  ball.applyForce(g);
  let g2 = p5.Vector.mult(gravity, ball2.mass);
  ball.applyForce(g2);
  if (mouseIsPressed) {
    ball.applyForce(wind);
  }
  ball.update();
  ball.edgeBounce();
  background('salmon');
  fill('white');
  ball.display();
}
