let emitter;
let emitters = [];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  rectMode(CENTER);
  colorMode(HSL, 360, 100, 100);

  emitter = new Emitter(width / 2, 20);

  gravity = createVector(0, 0.05);

  background(255);
}
function draw() {
  emitter.addParticle();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  emitter.update(gravity);
  emitter.display();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }

  console.log(emitter.particles.length);
}
