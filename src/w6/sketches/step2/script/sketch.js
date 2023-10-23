// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //   particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}
function draw() {
  background(255);
  particleArray.push(new Particle(width / 2, 20));
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1);
      //127개를 넘지 않게 됨 - arry에서 무언가를 뺄 때는 splice 사용
    }
  }

  console.log(particleArray.length);
}
