/*
Assignment 4 - Exquisite Corpse
*/
function setup() {
    createCanvas(400, 500);
  }
  
  function draw() {
    background(255);
  
    draw1();
    draw2();
    draw3();
  }
  
  function draw3() {
    let x = 140;
    let y = 600;
    let radius = 150;
    noFill();
    stroke("black");
    strokeWeight(10);
    ellipse(x, y, radius);
    ellipse(x + 290, y, radius);
  
    noFill();
    stroke("gray");
    strokeWeight(5);
    ellipse(x, y, radius - 10);
    ellipse(x + 290, y, radius - 10);
  
    strokeWeight(0.5);
    stroke("Black");
  
    push();
    translate(x, y);
    for (spoke = 0; spoke < 360; spoke += 15) {
      line(0, 0, (radius / 2) * cos(spoke), (radius / 2) * sin(spoke));
    }
    pop();
  
    push();
    translate(x + 290, y);
    for (spoke = 0; spoke < 360; spoke += 15) {
      line(0, 0, (radius / 2) * cos(spoke), (radius / 2) * sin(spoke));
    }
    pop();
  
    strokeWeight(5);
    line(x, y, x + 290, y);
    line(x + 290, y, x + 190, y - 170);
    line(x + 100, y - 170, x, y);
  }
  
  function draw2() {
    push();
    scale(0.7);
    noStroke();
  
    fill(98, 184, 211);
    quad(190, 185, 405, 185, 435, 290, 170, 290);
    quad(170, 290, 435, 290, 390, 425, 200, 425);
  
    fill(165, 93, 53);
    ellipse(575, 110, 100, 95);
    ellipse(530, 100, 30, 50);
    bezier(440, 290, 510, 305, 590, 250, 580, 130);
    quad(410, 190, 540, 130, 570, 145, 440, 290);
    ellipse(30, 365, 100, 95);
    ellipse(75, 365, 30, 50);
    bezier(185, 195, 90, 175, 20, 230, 15, 325);
    quad(185, 195, 25, 315, 50, 335, 170, 280);
  
    stroke(93, 173, 210);
    strokeWeight(10);
    line(200, 425, 390, 425);
    line(405, 185, 435, 290);
    line(190, 185, 170, 290);
  
    noStroke();
    fill(229, 140, 116);
    bezier(390, 420, 280, 360, 295, 270, 420, 250);
    triangle(420, 250, 435, 300, 390, 420);
    fill(242, 164, 113);
    bezier(395, 410, 350, 360, 380, 290, 435, 300);
    fill(56, 64, 125);
    textSize(24);
    bezier(420, 335, 385, 345, 375, 365, 400, 400);
  }
  
  function draw1() {
    push();
    translate(-120, 0);
    strokeWeight(2);
    fill(172, 217, 214);
    beginShape();
    ellipse(325, 82, 180, 160);
    endShape(CLOSE);
  
    beginShape();
    fill(171, 34, 32);
    ellipse(275, 72, 40, 55);
    ellipse(370, 75, 35, 55);
    endShape();
  
    beginShape();
    fill(34, 24, 21);
    ellipse(275, 65, 38, 38);
    ellipse(370, 67.1, 34, 39);
    endShape();
  
    beginShape();
    fill(255, 255, 255);
    ellipse(270, 57, 20, 20);
    ellipse(366, 60.1, 20, 20);
    endShape();
  
    stroke(0);
    beginShape();
    vertex(296, 109);
    vertex(304, 116);
    endShape();
  
    beginShape();
    vertex(320, 109);
    vertex(315, 116);
    endShape();
  
    pop();
  }
  