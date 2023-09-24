// let posX;
// let posY;
// let posXAdd = 3;
// let posYAdd = 5;

// function setup() {
//   setCanvasContainer('canvas', 3, 2, true);
//   background(255);
//   posX = width / 2;
//   posY = height / 2;
//   ellipse(posX, posY, 50);
// }
// function draw() {
//   background(255);
//   posX += posXAdd;
//   posY += posYAdd;
//   ellipse(posX, posY, 50);

let x;
let y;
let velocityX = 3;
let velocityY = 5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
}
function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  // if (x < 0) {
  //   velocityX *= -1;
  // } else if (x > width) {
  //   velocityX *= -1;
  // }
  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  // if (y < 0) {
  //   velocityY *= -1;
  // } else if (y > height) {
  //   velocityY *= -1;
  // }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}
