function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  noStroke();

  //   sofa
  fill('#faf0e6');
  rect(0, 0, 1000, 460);
  fill('#c0c0c0');
  rect(0, 490, 1000, 200);

  fill('#acacac');
  rect(140, 520, 700, 20, 10, 10, 10, 10);

  fill('#6f6060');
  rect(210, 400, 50, 130, 0, 0, 5, 5);
  rect(720, 400, 50, 130, 0, 0, 5, 5);

  fill('#937676');
  rect(210, 330, 560, 170);

  fill('#bc8f8f');
  rect(500, 310, 270, 130, 5, 5, 5, 5);
  rect(210, 310, 270, 130, 5, 5, 5, 5);
  rect(140, 370, 70, 130, 5, 5, 0, 0);
  rect(770, 370, 70, 130, 5, 5, 0, 0);

  fill('#c8b0b0');
  rect(210, 410, 560, 60, 5, 5, 5, 5);

  //   table
  fill('#6f6060');
  rect(0, 400, 80, 130, 0, 5, 5, 0);

  //   cup
  fill('#e0d4cd');
  rect(30, 350, 30, 50, 3, 3, 3, 3);
  fill('#a0c6e0');
  rect(35, 360, 20, 35, 3, 3, 3, 3);

  //   window
  fill('#5e5353');
  rect(170, 100, 400, 190, 5, 5, 5, 5);
  fill('#a0c6e0');
  rect(180, 110, 380, 170, 5, 5, 5, 5);

  //   building
  fill('#b4b5b0');
  rect(180, 230, 200, 50, 0, 0, 5, 5);
  rect(200, 230, 200, 30, 0, 5, 5, 5);
  rect(500, 190, 60, 90, 0, 0, 5, 5);

  //   cloud
  fill('#ebebeb');
  ellipse(230, 170, 40, 30);
  ellipse(260, 160, 70, 50);
  ellipse(290, 165, 60, 40);
  ellipse(320, 170, 40, 30);

  ellipse(400, 180, 70, 30);
  ellipse(420, 170, 50, 30);
  ellipse(440, 180, 50, 20);

  //   clock
  fill('#5e5353');
  ellipse(800, 100, 100, 100);
  fill('#ffffff');
  ellipse(800, 100, 90, 90);
  fill('#5e5353');
  rect(800, 100, 40, 5, 10, 10, 10, 10);
  rect(800, 100, 5, 25, 10, 10, 10, 10);
  ellipse(803, 102, 12, 12);

  //   shelf & book
  fill('#6f6060');
  rect(670, 240, 200, 10, 10, 10, 10, 10);
  ellipse(770, 260, 30, 30);
  fill('#babb8b');
  rect(650, 220, 100, 20, 5, 5, 5, 5);
  fill('#9d9d76');
  rect(670, 200, 110, 20, 5, 5, 5, 5);

  //   light
  fill('#eac954');
  ellipse(480, 40, 70, 30);
  fill('#6f6060');
  rect(380, -5, 200, 20, 10, 10, 10, 10);
  rect(405, 15, 150, 20, 10, 10, 10, 10);

  // carpet
  fill('#c0b590');
  ellipse(380, 690, 1200, 200);
}
