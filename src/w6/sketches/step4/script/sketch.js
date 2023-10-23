let emitters = [];
let gravity = 0;
let repller;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  for (let i = 0; i < 5; i++) {
    emitters.push(new Emitter((width / 6) * (i + 1), 20));
  }

  gravity = createVector(0, 0.1);

  repller = new Repeller(width / 2, height / 2);

  background(255);
}
function draw() {
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].applyGravity(gravity);
    emitters[i].update(gravity);
    emitters[i].display();
  }

  //   repller.display();
}

function mouseMoved() {
  repller.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  repller.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  repller.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  repller.mouseReleased();
}
