class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.lifeSpen = 512;
    this.particleColor = color(random(255), random(255), random(255));
    this.rotationAngle = 0;
    this.rotationSpeed = random(-radians(5), radians(5));
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.rotationAngle += this.rotationSpeed;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpen -= 2;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotationAngle);
    stroke(this.particleColor);
    fill(this.particleColor);
    rect(0, 0, this.rad * 2);
    pop();
  }

  isDead() {
    return this.lifeSpen < 0;
  }
}
