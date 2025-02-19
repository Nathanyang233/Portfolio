/*
Assignment 2 - Face Generator
*/
// User-defined variables
let maxSize = 200;
let minSize = 50;
let eyeSize;
let mouthWidth;
let mouthHeight;
let eyeOffsetX, eyeOffsetY, mouthOffsetY;

function setup() {
  createCanvas(400, 400);
  noStroke();
  randomizeFace(); // Initialize random features
}

function draw() {
  background(0); // Black background
  
  // Set face size based on mouse position
  let faceSize = map(mouseX, 0, width, minSize, maxSize);

  // Update feature sizes based on the current face size
  eyeSize = random(faceSize * 0.1, faceSize * 0.3);
  mouthWidth = random(faceSize * 0.3, faceSize * 0.5);
  mouthHeight = random(faceSize * 0.1, faceSize * 0.3);

  // Randomize positions for eyes and mouth
  eyeOffsetX = random(-faceSize * 0.2, faceSize * 0.2);
  eyeOffsetY = random(-faceSize * 0.1, faceSize * 0.1);
  mouthOffsetY = random(-faceSize * 0.1, faceSize * 0.1);
  
  // Draw face
  fill(255); // White face
  ellipse(width / 2, height / 2, faceSize);
  
  // Draw eyes
  fill(255); // White eyes
  ellipse(width / 2 + eyeOffsetX - eyeSize, height / 2 + eyeOffsetY, eyeSize);
  ellipse(width / 2 + eyeOffsetX + eyeSize, height / 2 + eyeOffsetY, eyeSize);
  
  fill(255, 0, 0); // Red pupils
  ellipse(width / 2 + eyeOffsetX - eyeSize, height / 2 + eyeOffsetY, eyeSize * 0.5);
  ellipse(width / 2 + eyeOffsetX + eyeSize, height / 2 + eyeOffsetY, eyeSize * 0.5);
  
  // Draw mouth with a creepy effect
  fill(255, 0, 0); // Red mouth
  arc(width / 2, height / 2 + mouthOffsetY, mouthWidth, mouthHeight, 0, PI); // Upside-down mouth
}

function randomizeFace() {
  // This function can be used if you want to set initial random positions
  eyeOffsetX = random(-maxSize * 0.2, maxSize * 0.2);
  eyeOffsetY = random(-maxSize * 0.1, maxSize * 0.1);
  mouthOffsetY = random(-maxSize * 0.1, maxSize * 0.1);
}

function keyPressed() {
  // Space key to randomize face features
  if (key === ' ') {
    randomizeFace(); // Randomize positions for the features
  }
}