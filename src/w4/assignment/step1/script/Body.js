class Body {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0.1, 0.1);
    this.acceleration = createVector(0.01, 0.01);
    this.mass = random(16, 100);
    this.radius = this.mass ** (1 / 2);
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position);
    let distance = constrain(force.mag(), 20, 50);
    let strength = (G * (this.mass * body.mass)) / distance ** 3;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(5);

    this.accelerationVisualization.set(this.acceleration);
    this.accelerationVisualization.mult(50);

    this.acceleration.set(0, 0);
  }

  display() {
    noStroke();
    strokeWeight(2);
    fill(0, 150);
    circle(this.position.x, this.position.y, this.radius * 6);
  }

  displayVectors() {
    noFill();
    stroke('red');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.velocityVisualization.x,
      this.position.y + this.velocityVisualization.y
    );
    stroke('blue');
    line(
      this.position.x,
      this.position.y,
      this.position.x + this.accelerationVisualization.x,
      this.position.y + this.accelerationVisualization.y
    );
  }
}
