/*
Assignment 7 - Autobiographical Game
*/
let screen = 0;

let flowers = [];
let grass;
let paperPlane;

let trees = [];
let numTrees = 50;
let stones = [];

let stars = [];
let mountains = [];

let glowingBall;

function setup() {
  createCanvas(600, 400);
  noStroke();

  reset();
}

function reset() {
  screen = 0;
  flowers = [];
  trees = [];
  stones = [];
  stars = [];
  mountains = [];
  grass = new Grass();

  for (let i = 0; i < 10; i++) {
    flowers.push(
      new Flower(
        random(width),
        random(height * 0.6, height * 0.9),
        random(20, 40),
        color(random(200, 255), random(100, 200), random(100, 255)),
        color(random(200, 255), random(150, 200), 0)
      )
    );
  }
  paperPlane = new PaperPlane(width / 2, 50);

  for (let i = 0; i < numTrees; i++) {
    let x = random(width);
    let colorVariation = random(-30, 30);
    trees.push(new Tree(x, random(-50, 50), random(50, 150), colorVariation));
    trees.push(
      new Tree(
        x,
        random(height - 50, height + 50),
        random(50, 150),
        colorVariation
      )
    );
  }

  for (let i = 0; i < 150; i++) {
    stars.push(new Star());
  }

  mountains.push(new Mountain(color(30, 30, 60), 0.5));
  mountains.push(new Mountain(color(40, 40, 70), 0.7));
  mountains.push(new Mountain(color(50, 50, 90), 0.9));

  glowingBall = new GlowingBall(50, height / 2, 20);
}

function draw() {
  switch (screen) {
    case 0:
      background(0);

      fill(255);
      textAlign(CENTER, CENTER);
      textSize(24);
      text("Click on the canvas to start", width / 2, height / 2);
      break;

    case 1:
      background(135, 206, 235);

      grass.display();

      for (let flower of flowers) {
        flower.display();
      }

      paperPlane.display();
      paperPlane.update();

      break;

    case 2:
      background(30, 50, 30);
      for (let tree of trees) {
        tree.display();
      }

      for (let stone of stones) {
        stone.display();
        stone.update();
      }

      if (frameCount % 10 == 0) {
        stones.push(new Stone());
      }

      fill(241, 191, 67);
      triangle(525, 336, 560, 356, 525, 386);

      if (dist(536, 358, glowingBall.x, glowingBall.y) < 15) {
        screen = 3;
        glowingBall.speed = 0.5;
      }
      break;

    case 3:
      background(0);

      for (let star of stars) {
        star.display();
      }

      for (let mountain of mountains) {
        mountain.display();
      }

      fill(242, 192, 71);
      ellipse(100, 100, 100, 100);
      fill(0);
      ellipse(150, 100, 100, 100);

      if (dist(glowingBall.x, glowingBall.y, 100, 100) < 30) {
        screen = 4;
      }
      break;
    case 4:
      background(0);

      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text("Click on the canvas to start over", width / 2, height / 2);
      break;
  }

  if (screen != 0 && screen != 4) {
    glowingBall.display();
    glowingBall.move();
  }
}

class Grass {
  constructor() {
    this.wave = [];
    for (let x = 0; x < width; x++) {
      this.wave[x] = noise(x * 0.02) * 50;
    }
  }

  display() {
    fill(60, 180, 75);
    beginShape();
    vertex(0, height);
    for (let x = 0; x < width; x++) {
      let y = height * 0.3 + this.wave[x];
      vertex(x, y);
      this.wave[x] += sin(frameCount * 0.02 + x * 0.05) * 0.2;
    }
    vertex(width, height);
    endShape(CLOSE);
  }
}

class Flower {
  constructor(x, y, size, petalColor, centerColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.petalColor = petalColor;
    this.centerColor = centerColor;
  }

  display() {
    push();
    translate(this.x, this.y);

    fill(this.petalColor);
    for (let i = 0; i < 5; i++) {
      ellipse(0, -this.size / 2, this.size * 0.6, this.size);
      rotate(PI / 2.5);
    }

    fill(this.centerColor);
    ellipse(0, 0, this.size * 0.4);

    pop();
  }
}

class Tree {
  constructor(x, y, size, colorVariation) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colorVariation = colorVariation;
    this.color = color(
      34 + colorVariation,
      139 + colorVariation,
      34 + colorVariation
    );

    this.offsets = [];
    for (let i = 0; i < 5; i++) {
      let offsetX = random(-this.size / 3, this.size / 3);
      let offsetY = random(-this.size / 2, 0);
      this.offsets.push({
        x: offsetX,
        y: offsetY,
        size: random(0.4, 0.8),
      });
    }
  }

  display() {
    noStroke();
    fill(101, 67, 33);
    rect(this.x - this.size / 10, this.y, this.size / 5, this.size);

    fill(this.color);
    for (let i = 0; i < this.offsets.length; i++) {
      let offsetX = this.offsets[i].x;
      let offsetY = this.offsets[i].y;
      let s = this.offsets[i].size;
      ellipse(this.x + offsetX, this.y + offsetY, this.size * s);
    }
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2);
    this.size = random(1, 3);
    this.twinkle = random(0.1, 0.3);
  }

  display() {
    noStroke();
    fill(255, 255, 255, 200 + sin(frameCount * this.twinkle) * 55);
    ellipse(this.x, this.y, this.size);
  }
}

class Mountain {
  constructor(baseColor, heightFactor) {
    this.baseColor = baseColor;
    this.heightFactor = heightFactor;
  }

  display() {
    fill(this.baseColor);
    noStroke();
    beginShape();
    vertex(0, height);
    for (let x = 0; x <= width; x += 20) {
      let y =
        height -
        noise(x * 0.01, frameCount * 0.0005) * height * this.heightFactor;
      vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
  }
}

class GlowingBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 5;
    this.glowStrength = 50;
  }

  display() {
    noStroke();
    for (let i = 2; i > 0; i--) {
      let alpha = map(i, 0, 2, 0, this.glowStrength);
      fill(255, 255, 100, alpha);
      ellipse(this.x, this.y, this.r + i * 8);
    }
    fill(255, 200, 50);
    ellipse(this.x, this.y, this.r);
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }

    this.x = constrain(this.x, this.r / 2, width - this.r / 2);
    this.y = constrain(this.y, this.r / 2, height - this.r / 2);
  }
}

class PaperPlane {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speed = 5;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(PI / 2);

    fill(255);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(0, -this.size);
    vertex(this.size / 2, 0);
    vertex(0, this.size / 2);
    vertex(-this.size / 2, 0);
    endShape(CLOSE);

    line(0, -this.size + 5, 0, this.size / 2 - 5);

    pop();
  }

  update() {
    if (dist(glowingBall.x, glowingBall.y, this.x, this.y) < 25) {
      screen = 2;
    }

    this.x += 5;
    if (this.x > width) {
      this.x = 0;
    }
  }
}

class Stone {
  constructor() {
    this.x = width;
    this.y = random(height);
    this.c = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, 14);
  }

  update() {
    this.x -= 2;

    if (dist(glowingBall.x, glowingBall.y, this.x, this.y) < 17) {
      glowingBall.x -= 10;
    }
  }
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  }

  if (screen == 4) {
    reset();
    screen = 1;
  }
}
