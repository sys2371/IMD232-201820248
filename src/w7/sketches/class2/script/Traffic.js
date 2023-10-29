class Traffic {
  constructor() {
    this.vehicle = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    this.vehicle.push(
      new Vehicle(x, y, 8, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
