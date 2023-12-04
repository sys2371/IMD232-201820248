let aDrunkenObj;
let trace = [];
let path = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  aDrunkenObj = new Drunken(width / 2, height / 2);
  trace.push(path);

  background('white');
}

function draw() {
  const randomForce = p5.Vector.random2D();
  randomForce.mult(1);
  aDrunkenObj.applyForce(randomForce);
  aDrunkenObj.update();
  aDrunkenObj.infiniteEdge();

  if (aDrunkenObj.isCrossed) {
    path = [];
    trace.push(path);
  } else {
    path.push([aDrunkenObj.pos.x, aDrunkenObj.pos.y]);
  }

  if (aDrunkenObj.isCrossed) {
    background('red');
  } else {
    background('white');
  }

  for (let idx = 0; idx < trace.length; idx++) {
    const aPath = trace[idx];
    noFill();
    beginShape();
    for (let pointIdx = 0; pointIdx < aPath.length; pointIdx++) {
      const point = aPath[pointIdx];
      vertex(point[0], point[1]);
    }
    endShape();
  }
  aDrunkenObj.display();

  aDrunkenObj.display();

  console.log(trace);
}
