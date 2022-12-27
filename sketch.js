var shape;
var food;
var bgCol;
var num1 = 0
var num2 = 0
var num3 = 0
var num4 = 0
var num5 = 0
var num6 = 0
var num7 = 0
var num8 = 0
var food2;
var food3;
var food4;
var button = document.getElementById("button")
var audio1 = new Audio("audio/musik.mp3")
  window.onload = () => {
    var score = localStorage.getItem("score")
    window.counter.innerHTML = score + " buttons hit"
    button.innerHTML = "Enable Audio"
}

function aud() {
  audio1.play();
  audio1.loop();
  button.innerHTML = "Pause Audio"
  if(audio1.play()) 
}
var score = localStorage.getItem("score")
function setup() {
  window.canvas = createCanvas(1000, 750);
  window.counter = document.getElementById("counter")
  window.canvas.parent("canvas")
  shape = new Block(createVector(20, 20), 25, '#eee')
  food = new Block(createVector(10, 10), 25, '#f00')
  bgCol = new Block(createVector(10, 10), 20, '#101')
  num3 = Math.round(Math.random()) * 8
  num4 = Math.round(Math.random()) * -14
  food2 = new Block(createVector(20, 6), 25, '#f40')
  num5 = Math.round(Math.random()) + 1
  num6 = Math.round(Math.random()) * -6
  food3 = new Block(createVector(20, 2), 25, '#0df')
  num7 = Math.round(Math.random()) * 20
  num8 = Math.round(Math.random()) * -10
  food4 = new Block(createVector(24, 4), 25, '#fff')
  aud();
}
function draw() {
  background(bgCol.color);
  shape.draw()
  shape.keyUp()
  food.draw()
  food.move()
  collsion();
  localStorage.setItem("score", score)
  if (score >= 20) {
    food2.draw()
    food2.move()
    bgCol.color = "#f70"
  }
  if (score >= 60) {
    food3.draw()
    food3.move()
    bgCol.color = "#d0e"
  }
  if (score >= 120) {
    food4.draw()
    food4.move()
    bgCol.color = "#cef"
  }
}
function collsion() {
  if (shape.curpos.x == food.curpos.x  && shape.curpos.y == food.curpos.y) {
    score++
    window.counter.innerHTML = score + " buttons hit"
    num1 = Math.round(Math.random()) * 8
    num2 = Math.round(Math.random()) * -10
    food.curpos = createVector(10 + num1, 10 - num2)
    var sound = new Audio("audio/hit1.wav")
    sound.play();
  }
  if (shape.curpos.x == food2.curpos.x && shape.curpos.y == food2.curpos.y) {
    score += 2
    window.counter.innerHTML = score + " buttons hit"
    num1 = Math.round(Math.random()) * 16
    num2 = Math.round(Math.random()) * 6
    food2.curpos = createVector(16 + num1, 10 - num2)
    var sound = new Audio("audio/hit2.wav")
    sound.play();
  }
  if (shape.curpos.x == food3.curpos.x && shape.curpos.y == food3.curpos.y) {
    score += 4
    window.counter.innerHTML = score + " buttons hit"
    num1 = Math.round(Math.random()) * 10
    num2 = Math.round(Math.random()) * 6
    food3.curpos = createVector(10 + num1, 10 - num2)
    var sound = new Audio("audio/hit3.wav")
    sound.play();
  }
  if (shape.curpos.x == food4.curpos.x && shape.curpos.y == food4.curpos.y) {
    score += 8
    window.counter.innerHTML = score + " buttons hit"
    num1 = Math.round(Math.random()) * 10
    num2 = Math.round(Math.random()) * 4
    food4.curpos = createVector(10 + num1, 10 - num2)
    var sound = new Audio("audio/hit4.wav")
    sound.play();
  }
}