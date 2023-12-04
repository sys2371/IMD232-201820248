let drawing = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('#FFF7F0');
}

function draw() {
  if (drawing) {
    noFill();
    colorMode(HSB);
    blendMode(MULTIPLY);

    push();
    let x = width / random(100, 1000);
    let y = width / random(1000, 100);
    let startX = mouseX;
    let startY = mouseY;

    noStroke();
    for (let i = 0; i < height * 10; i += x) {
      7;
      fill(map(x, width / 100, width / 70, 130, 50), 50, 65);
      ellipse(
        startX + (tan(i) * i) / (x * 2),
        startY + (tan(i) * i) / (x * 2),
        x,
        x
      );
    }
    pop(); // Restore the original transformation state
  }
}

function mousePressed() {
  drawing = !drawing; // Toggle drawing on mouse click
}
