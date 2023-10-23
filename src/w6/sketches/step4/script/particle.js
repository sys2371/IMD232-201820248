class Particle {
  constructor(x, y, mass, lifeSpen) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** 0.5 * 5;
    this.lifeSpen = lifeSpen;
    this.life = this.lifeSpen;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.set(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life--;
  }

  display() {
    const normalizedLife = constrain(this.life / this.lifeSpen, 0, 1);
    stroke(0, 255 * normalizedLife);
    fill(127, 255 * normalizedLife);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpen < 0;
  }
}
