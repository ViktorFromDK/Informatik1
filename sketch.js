let PlayerOneY = 300
let PlayerOneX = 100
let PlayerTwoY = 300
let PlayerTwoX = 350
let BallY = 300
let BallX = 250

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(50,150,100);
  BallX = 250;
  xSpeed = 4;
}

function draw() {
  background(50,150,100);
  ellipse(BallX,BallY,20);
  BallX += xSpeed;

  if (BallY==PlayerTwoY) {
    if (BallX==PlayerTwoX) {
      xSpeed = -xSpeed;
    }
  } else if (BallY==PlayerOneY) {
    if (BallX==PlayerOneX) {
      xSpeed = -xSpeed;
    }
  }

  rect(PlayerOneX,PlayerOneY,10,50,50);
  rect(PlayerTwoX,PlayerTwoY,10,50,50)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    PlayerOneY -= 10
  } else if (keyCode === DOWN_ARROW) {
    PlayerOneY += 10
  } else if (keyCode === LEFT_ARROW) {
    PlayerTwoY -= 10
  } else if (keyCode === RIGHT_ARROW) {
    PlayerTwoY += 10
  }
}