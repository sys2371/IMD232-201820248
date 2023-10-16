let x, y;
const rad = 25;
let isHover = false;
let isDragging = false;
let deltaX, deltaY;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = width / 2;
  y = height / 2;

  colorMode(HSL, 360, 100, 100, 100);
  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);
  display();
}

function chkHover(mX, mY) {
  const distSq = (x - mX) ** 2 + (y - mY) ** 2;
  return distSq <= rad ** 2;
}

function display() {
  noStroke();
  if (isHover) {
    console.log('a');
    fill(30, 80, 50);
  } else {
    console.log('b');
    fill(30, 60, 50);
  }
  ellipse(x, y, 2 * rad);
}

function mouseMoved() {
  isHover = chkHover(mouseX, mouseY);
}
function mousePressed() {
  //   console.log('pressed');
  if (isHover) {
    isDragging = true;
    deltaX = mouseX - x;
    delta = mouseY - y;
  }
}
function mouseDragged() {
  if (isDragging) {
    x = mouseX - deltaX;
    y = mouseY - deltaY;
  }
  //   console.log('dragging');
}
function mouseReleased() {
  console.log('released');
}
