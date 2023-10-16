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

  display() {}
}
