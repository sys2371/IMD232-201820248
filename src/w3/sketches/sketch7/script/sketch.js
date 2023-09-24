let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  svToMv = createVector();
}
function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  noStroke();
  fill('white');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
