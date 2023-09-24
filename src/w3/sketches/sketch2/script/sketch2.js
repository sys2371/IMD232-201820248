// let pos;
// let vel;
// let acc;
// let redius = 25;

// function setup() {
//   setCanvasContainer('mySketchGoesHere', 3, 2, true);
//   background(255);
//   pos = createVector(width / 2, height / 2);
//   vel = createVector(0, 0);
//   acc = createVector(0, 1);
//   console.log(pos);
//   console.log(vel);
//   ellipse(pos.x, pos.y, 50);
// }
// function draw() {
//   background(255);
//   acc = p5.Vector.random20();
//   acc.mult(2);
//   vel.add(acc);
//   pos.add(vel);
//   //   if (pos.x < 0) {
//   //     vel.x *= -1;
//   //   } else if (pos.x > width) {
//   //     vel.x *= -1;
//   //   }
//   if (pos.x - radius < 0 || pos.x + radius > width) {
//     vel.x *= -1;
//   }
//   if (pos.y - radius < 0 || pos.y + radius > height) {
//     vel.y *= -1;
//   }
//   ellipse(pos.x, pos.y, 2 * radius);
// }

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}
function draw() {
  background('orange');
  fill(0);
  // if (mouseX > width / 2) {
  //   rect(width / 2, 0, width / 2, height);
  // } else {
  //   rect(0, 0, width / 2, height);
  // }

  // if (mouseX > width / 2) {
  //   if (mouseY > height / 2) {
  //     rect(width / 2, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(width / 2, 0, width / 2, height / 2);
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(0, 0, width / 2, height / 2);
  //   }
  // }

  // if (mouseX > width / 3) {
  //   if (mouseX > (2 * width) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((2 * width) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((2 * width) / 3, 0, width / 3, height / 2);
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(width / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect(width / 3, 0, width / 3, height / 2);
  //     }
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 3, height / 2);
  //   } else {
  //     rect(0, 0, width / 3, height / 2);
  //   }
  // }

  if (mouseX > (2 / 3) * width) {
    if (mouseY > height / 2) {
      rect((2 / 3) * width, height / 2, width / 3, height / 2);
    } else {
      rect((2 / 3) * width, 0, width / 3, height / 2);
    }
  } else if (mouseX > (1 / 3) * width) {
    // 일단 3/2보다는 작은데, 1/3보다는 큼?
    if (mouseY > height / 2) {
      rect(width / 3, height / 2, width / 3, height / 2);
    } else {
      rect(width / 3, 0, width / 3, height / 2);
    }
  } else {
    // 일단 3/2보다는 작은데, 1/3보다도 작음
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 3, height / 2);
    } else {
      rect(0, 0, width / 3, height / 2);
    }
  }
}
