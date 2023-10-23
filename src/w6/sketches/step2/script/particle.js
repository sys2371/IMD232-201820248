class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0); //초기값이 랜덤하게 만들 것 p5.Vector.random2D()는 랜덤한 방향으로 1짜리 벡터 만들어짐. 특정한 각도로 하려면?
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpen = 255; //수명
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // acc를 0으로 초기화
    this.lifeSpen -= 2;
  }

  display() {
    stroke(0, this.lifeSpen);
    fill(127, this.lifeSpen);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpen < 0;
  }
}
