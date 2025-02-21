/*
Assignment 3 - Experimental Clock
*/
let xOffset = 0; 
let heartRate = 80; 
let timePassed = 0;
let bpmToMs = (60 / heartRate); 
let timerStart = 0;
let showTimer = false; 
let clockMode = false;
let peakSpacing = 500; //  spacing between peaks
let peakHeightMultiplier = 2; // larger peaks
let lineSpeed = 1; //  speed for the red line to always be visible

function setup() {
  createCanvas(600, 600); 
  strokeWeight(3);
  timerStart = millis();
}

function draw() {
  background(0); 

  let midline = height / 2;

  drawECGLine(midline);

  timePassed += deltaTime;

  if (timePassed >= bpmToMs) {
    drawHeartbeatSpike(midline);
    timePassed = 0;
  }

  // Timer mode
  if (showTimer) {
    displayTimer();
  }

  // Clock mode
  if (clockMode) {
    displayClock();
  }

  xOffset -= lineSpeed; // Increase the speed of the line
  if (xOffset < -width) {
    xOffset = 0;
  }
}

function drawECGLine(midline) {
  stroke(255, 0, 0); // Red ECG line
  noFill();

  beginShape();
  for (let x = 0; x < width; x++) {
    let y = midline + random(-10, 10); 
    vertex(x + xOffset, y);
  }
  endShape();
}

function drawHeartbeatSpike(midline) {
  let spikeHeight = random(20, 100) * peakHeightMultiplier; 
  stroke(255, 0, 0); 

  beginShape();
  vertex(width / 2 - peakSpacing / 2, midline);  
  vertex(width / 2 - peakSpacing / 4, midline - spikeHeight);  
  vertex(width / 2, midline);  
  vertex(width / 2 + peakSpacing / 4, midline + spikeHeight * 0.4); 
  vertex(width / 2 + peakSpacing / 2, midline);  
  endShape();
}

function displayTimer() {
  let elapsed = millis() - timerStart;
  fill(255);
  textSize(20);
  text("Timer: " + nf(elapsed / 1000, 1, 2) + " s", 20, 30);
}

function displayClock() {
  let h = hour();
  let m = minute();
  let s = second();

  fill(255);
  textSize(20);
  text(nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2), 500, 30);
}

function keyPressed() {
  if (key === 'T' || key === 't') {
    showTimer = !showTimer; 
    timerStart = millis(); 
  }
  if (key === 'C' || key === 'c') {
    clockMode = !clockMode; 
  }

}
