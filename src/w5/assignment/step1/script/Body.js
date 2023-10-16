class Pendulum {
  constructor(x, y, rad, angle, ballRad) {
    this.angle = angle;
    this.angleVel = 0;
    this.angleAcc = 0;
    this.pos = createVector(x, y);
    this.rad = rad;
    this.ballPos = createVector(x, y);
    this.ballPos.add(cos(this.angle) * this.rad, sin(this.angle) * this.rad);
    this.ballRad = ballRad;
    this.movingOffset = createVector();
  }

  update() {}

  display() {
    noStroke();
    fill(0);
    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.ballRad);
    stroke(0);
    noFill();
  }
}
