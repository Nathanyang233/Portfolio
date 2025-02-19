/*
Assignment 1 - Lost and Found
*/
function setup() {
createCanvas(400, 400);
}
  
function draw() {
    background(244,164,95);

    fill(255,192,203)
    triangle(120,190,190,150,100,90)

    push()
    fill(255,192,203)
    translate(280,-50)
    rotate(PI/3.6)
    triangle(120,190,190,150,100,90)
    pop()

    //   fill(255,192,203)
    //   triangle(120,190,250,150,160,90)

    fill(255,192,203)
    rect(230,280,40,40)

    fill(255,192,203)
    rect(130,280,40,40)

    fill(252,230,202)
    ellipse(200,220,190,180)

    stroke(100);

    fill(255,192,203)
    ellipse(200,250,50,30);

    fill(0,0,0)
    ellipse(210,250,10,10)

    fill(0,0,0)
    ellipse(190,250,10,10)

    fill(255,192,203)
    ellipse(125,210,40,40)

    fill(255,192,203)
    ellipse(275,210,40,40)

    fill(0,0,0)
    ellipse(160,180,30,30)

    fill(0,0,0)
    ellipse(240,180,30,30)

    push()
    fill(255,192,203)
    rotate(HALF_PI)
    translate(-20,10)
    arc(280,290,60,60,0,HALF_PI)
    pop()
}