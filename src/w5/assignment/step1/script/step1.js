let Pend;

const stripeNum = 8;
const stripeNum2 = 8;
const stripeBegin = 15;
const stripeGap = 20;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  pend = new Pendulum(width / 3, 10, height / 3, (TAU / 360) * 30, 50);
  background(255);
}
function draw() {
  background(255);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      //   stroke((16 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 0.9) * width) / (stripeNum + 0.9);
      let y = ((b + 0.9) * height) / (stripeNum2 + 0.9);
      ellipse(x, y, 60);
    }
  }
}
