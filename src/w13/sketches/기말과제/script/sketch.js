function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  angleMode(DEGREES);

  s1 = createSlider(1, 10, 5, 1).position(200, 300);
  p1 = createP('elements').position(200, 305);

  s2 = createSlider(2, 50, 5, 1).position(200, 360);
  p2 = createP('parts').position(200, 365);

  s3 = createSlider(3, 30, 3, 1).position(200, 420);
  p3 = createP('fragments').position(200, 425);

  s4 = createSlider(60, 300, 100, 10).position(200, 480);
  p4 = createP('Minimum radius').position(200, 485);

  s5 = createSlider(90, 300, 200, 10).position(200, 540);
  p5 = createP('Maximum radius').position(200, 545);

  s6 = createSlider(0.1, 1, 0.1, 0.05).position(200, 600);
  p6 = createP('Rotation speed').position(200, 605);
}

function draw() {
  background(55, 55, 55);

  translate(width / 2, height / 2);

  noFill();

  strokeWeight(5);

  for (var n = 0; n < s1.value(); n++) {
    stroke(15 + n * 50);
    beginShape();
    for (var i = 0; i < 360; i += s3.value()) {
      var rad = map(
        sin(i * s2.value() + frameCount),
        -1,
        0.5,
        s4.value(),
        s5.value()
      );
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    rotate(frameCount * s6.value());
  }
}
