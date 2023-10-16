class movableObj {
  constructor(x, y, rad) {
    this.pos = createVector(x, y);
    this.rad = rad;
    this.isHover = false;
    this.isDragging = false;
    this.movingOffset = createVector();
  }
  chkIsHover(x, y) {
    const distSq = (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2;
    this.isHover = distSq <= rad ** 2;
  }

  display() {
    noStroke();
    if (this.isHover) {
      console.log('a');
      fill(30, 80, 50);
    } else {
      console.log('b');
      fill(30, 60, 50);
    }
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mousePressed() {
    //   console.log('pressed');
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mouseX - this.pos.x, mouseY - this.pos.y);
    }
  }

  mouseDragged() {
    if (this.isDragging) {
      this.pos.set(mouseX - this.movingOffset.x, mouseY - this.movingOffset.y);
    }
    //   console.log('dragging');
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
