let PlayerOneY = 300
let PlayerOneX = 100
let PlayerTwoY = 300
let PlayerTwoX = 350
let BallY = 300
let BallX = 250
let ScoreOne = 0
let ScoreTwo = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(50,150,100);
  PlayerOneY = 0.5*windowHeight-25;
  PlayerOneX = 300;
  PlayerTwoY = 0.5*windowHeight-25;
  PlayerTwoX = windowWidth-300;
  BallY = 0.5*windowHeight;
  BallX = 0.5*windowWidth-10;
  ScoreOne = 0;
  ScoreTwo = 0;
  xSpeed = 4;
  ySpeed = 0;
}

function draw() { 
  background(50,150,100);
  fill(255);
  ellipse(BallX,BallY,20);
  BallX += xSpeed;
  BallY += ySpeed;
  
  if (BallY>=PlayerTwoY-0 && BallY<=PlayerTwoY+50) {
    if (BallX>=PlayerTwoX-5 && BallX<=PlayerTwoX+5) {
      xSpeed = -xSpeed;
      ySpeed = random(-7,7)
      ScoreTwo = ScoreTwo+1
      console.log(ScoreTwo)
    }
  }
  if (BallY>=PlayerOneY-0 && BallY<=PlayerOneY+50) {
    if (BallX>=PlayerOneX-5 && BallX<=PlayerOneX+5) {
      xSpeed = -xSpeed;
      ySpeed = random(-7,7)
      ScoreOne = ScoreOne+1
      console.log(ScoreOne)
    }
  }

  rect(PlayerOneX,PlayerOneY,10,50,50);
  rect(PlayerTwoX,PlayerTwoY,10,50,50)

  if (BallY<=0 || BallY>=windowHeight) {
    ySpeed = -ySpeed
    console.log(ySpeed)
  }

  if(BallX>windowWidth) {  
    xSpeed = 0
    ySpeed = 0
    console.log(xSpeed)
    console.log(ySpeed)
    BallX = 0.5*windowWidth-10;
    BallY = 0.5*windowHeight;
    ScoreOne = ScoreOne+10
    xSpeed = xSpeed+1
  }

  if(BallX<0) {  
    ySpeed = 0
    console.log(xSpeed)
    console.log(ySpeed)
    BallX = 0.5*windowWidth-10;
    BallY = 0.5*windowHeight;
    ScoreTwo = ScoreTwo+10
    xSpeed = xSpeed+1
  }

  if(xSpeed>=10) {
    xSpeed = 10
  }
  
  textSize(32);
  text('SCORE', 0.5*windowWidth-75,50);
  text(ScoreOne, PlayerOneX, 50);
  text(ScoreTwo, PlayerTwoX, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    PlayerOneY -= 45
  } else if (keyCode === DOWN_ARROW) {
    PlayerOneY += 45
  } else if (keyCode === LEFT_ARROW) {
    PlayerTwoY -= 45
  } else if (keyCode === RIGHT_ARROW) {
    PlayerTwoY += 45
  }
}

