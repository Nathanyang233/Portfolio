/*
Assignment 5 - Optical Illusion
*/
let circleSize = 20;

function setup() {
  createCanvas(600, 600);
  background(0);

  stroke(205);
  strokeWeight(10);

  for (let y = 100; y <= 500; y += 100) {
    line(0, y, 800, y);
  }

  for (let x = 100; x <= 700; x += 100) {
    line(x, 0, x, 600);
  }

  fill(255);
  noStroke();
}

function draw() {
  background(0);

  stroke(205);
  strokeWeight(10);

  for (let y = 100; y <= 500; y += 100) {
    line(0, y, 800, y);
  }

  for (let x = 100; x <= 700; x += 100) {
    line(x, 0, x, 600);
  }

  if (frameCount % 120 < 60) {
    circleSize = map(frameCount % 60, 0, 60, 20, 30);
  } else {
    circleSize = map(frameCount % 60, 0, 60, 30, 20);
  }

  noStroke();
  for (let x = 100; x <= 700; x += 100) {
    for (let y = 100; y <= 500; y += 100) {
      ellipse(x, y, circleSize, circleSize);
    }
  }
}
