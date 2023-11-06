let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 selector', dom);
  //   console.log('querySelector', htmlDom);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('selector', dom.width);
  //   console.log('querySelector', htmlDom.clientWidth);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}
function draw() {}

function windowResized() {
  console.log('리사이즈됩니다');
  //   dom = select('#hereGoesMyP5Sketch');

  //   console.log('p5 selector', dom);
  //   console.log('querySelector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    resizedCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvas) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizedCanvas(canvasW, canvasH);
    background('black');
  }
}
