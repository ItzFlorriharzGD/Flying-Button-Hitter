class Block {
 constructor(startpos, size, color) {
  this.startpos = startpos
  this.curpos = startpos
  this.size = size
  this.color = color
 }
 draw() {
  push();
  let pos = this.curpos
  stroke(0)
  strokeWeight(3)
  fill(this.color)
  rect(pos.x * this.size, pos.y * this.size, this.size, this.size)
  pop()
 }
 keyUp() {
  while (keyIsDown(UP_ARROW) && keyCode === UP_ARROW) {
     this.curpos.y -= 2
     keyCode = null
    break
   }
  while (keyIsDown(DOWN_ARROW) && keyCode === DOWN_ARROW) {
   this.curpos.y += 2
   keyCode = null
   break
  }
  if (this.curpos.x < 0) {
   this.curpos.x = 54
  }
  if (this.curpos.x > 55) {
   this.curpos.x = 0
  }
  if (this.curpos.y > 44) {
   this.curpos.y = 0
  }
  if (this.curpos.y < 0) {
   this.curpos.y = 34
  }
 }
 move() {
  var vel = 1
  this.curpos.x += vel
  if (this.curpos.x > 55) {
   this.curpos.x = 0
  }
 }
}