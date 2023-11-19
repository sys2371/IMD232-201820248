const tiles = [];
const rowNum = 200,
  colNum = 200;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum;
  const h = w;
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getIdx(row - 1, col - 1),
        getIdx(row - 1, col),
        getIdx(row - 1, col + 1),
        getIdx(row, col + 1),
        getIdx(row + 1, col + 1),
        getIdx(row + 1, col),
        getIdx(row + 1, col - 1),
        getIdx(row, col - 1),
      ];

      if (col === 0) {
        neighborsIdx[0] = -1;
        neighborsIdx[6] = -1;
        neighborsIdx[7] = -1;
      } else if (col === colNum - 1) {
        neighborsIdx[2] = -1;
        neighborsIdx[3] = -1;
        neighborsIdx[4] = -1;
      }

      if (row === 0) {
        neighborsIdx[0] = -1;
        neighborsIdx[1] = -1;
        neighborsIdx[2] = -1;
      } else if (row === rowNum - 1) {
        neighborsIdx[4] = -1;
        neighborsIdx[5] = -1;
        neighborsIdx[6] = -1;
      }

      const neighbors = [];
      neighborsIdx.forEach((eachIdx) => {
        neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
      });

      const idx = getIdx(row, col);
      tiles[idx].neighbors = neighbors;
    }
  }

  randomSeed(1);
  tiles.forEach((each) => {
    const randomState = floor(random(3));
    each.state = randomState;
  });

  frameRate(15);
  background(255);
  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });

  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++)
    if (tiles[idx].toggleState(mouseX, mouseY)) break;
}

class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = 0;
    this.nextState = 1;
    this.neighbors = [];
  }

  calcNextState() {
    const countDefenders = this.neighbors.filter((neighbor) => {
      return neighbor && this.defeats(neighbor);
    }).length;

    if (countDefenders >= 2) {
      this.nextState = this.beats();
    } else {
      this.nextState = this.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  display() {
    noStroke();

    if (this.state === 0) {
      fill('red');
    } else if (this.state === 1) {
      fill('blue');
    } else if (this.state === 2) {
      fill('white');
    }
    rect(this.x, this.y, this.w, this.h);
  }
  toggleState(mx, my) {
    if (
      mx >= this.x &&
      mx <= this.x + this.w &&
      my >= this.y &&
      my <= this.y + this.h
    ) {
      const nextState = (this.state + 1) % 2;
      this.state = nextState;
      return true;
    }
    return false;
  }

  defeats(opponent) {
    return (
      (this.state === 0 && opponent.state === 0) ||
      (this.state === 1 && opponent.state === 1) ||
      (this.state === 2 && opponent.state === 1)
    );
  }

  beats() {
    return (this.state + 5) % 3;
  }
}
