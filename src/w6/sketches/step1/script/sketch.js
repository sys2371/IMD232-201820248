let particle;
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}
function draw() {
  //   console.log(particle.isDead());
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
  }

  particle.applyForce(gravity);
  particle.update(); //가속도를 안 주니까 랜덤한 방향으로 날아가버림
  background(255);
  particle.display();
}

// 수명을 투명도에 연결 - 수명이 다 하면 새로 초기화시켜 만들어주는 것 (sketch 14-15) = particle의 기본
