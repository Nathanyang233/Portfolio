/*
Assignment 6 - Data Portrait
*/

let sleepTimes = [2312, 2244, 2350, 2310, 2255, 2335, 2355, 2311, 2322, 2301];
let minTime = 0;
let maxTime = 0;

let sleepDuration = [8, 6, 12, 10, 8, 8, 7, 7, 8, 9];
let minDur = 0;
let maxDur = 0;
let colors = [];
let current = -1;

function setup() {
  createCanvas(600, 600);

  let timeVals = findMaxMin(sleepTimes);
  minTime = timeVals.min;
  maxTime = timeVals.max;

  let durVals = findMaxMin(sleepDuration);
  minDur = durVals.min;
  maxDur = durVals.max;

  for (let i = 0; i < sleepTimes.length; i++) {
    colors.push(color(int(random(255)), int(random(255)), int(random(255))));
  }
}

function draw() {
  background(255);

  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text("Sleep Times (" + sleepTimes.length + " Days)", width / 2, 50);

  for (let i = 0; i < sleepTimes.length; i++) {
    let startTime = sleepTimes[i];
    let dur = sleepDuration[i];
    let ang = map(i, 0, sleepTimes.length, 0, TWO_PI);
    let len = map(startTime, minTime, maxTime, 160, 400);
    let arcLen = map(dur, minDur, maxDur, 0.2, PI / 4);
    let c = colors[i];

    push();
    translate(width / 2, height / 2);
    rotate(ang);
    if (current == i) {
      scale(1.2);
    }
    fill(c);
    arc(0, 0, len, len, 0, arcLen);
    pop();
  }

  for (let i = 0; i < sleepTimes.length; i++) {
    let c = colors[i];
    let mouseColor = get(mouseX, mouseY);
    if (
      mouseColor[0] == red(c) &&
      mouseColor[1] == green(c) &&
      mouseColor[2] == blue(c)
    ) {
      current = i;
      break;
    } else {
      current = -1;
    }
  }

  if (current != -1) {
    fill(255);
    stroke(0);
    rect(mouseX, mouseY, 200, 100, 10);
    fill(0);
    text("Day " + (current + 1), mouseX + 100, mouseY + 20);
    text(
      "Bedtime " + addColonToNumber(sleepTimes[current]),
      mouseX + 100,
      mouseY + 45
    );
    text(
      "Sleep Duration " + sleepDuration[current] + "h",
      mouseX + 100,
      mouseY + 70
    );
  }
}

function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}

function addColonToNumber(num) {
  const numStr = num.toString();

  if (numStr.length === 4) {
    return numStr.slice(0, 2) + ":" + numStr.slice(2);
  }

  return numStr;
}
