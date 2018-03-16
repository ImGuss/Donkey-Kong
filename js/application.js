//Instantiates new Princess object called peach
var peach = new Princess();


// Sprite file sources
var brick = "images/brick.png";
var princessSprite = "images/princess-left-right.png";
var hazard = "images/hazard-clockwise.png";
var marioSprite = "images/mario.png";
var ladderSprite = "images/ladder.png";

// Create Sprites
var brickPattern = new Sprite(brick, true);

var ladder = new Image();
ladder.src = ladderSprite;

var mario = new Image();
mario.src = marioSprite;

var barrel = new Image();
barrel.src = hazard;

var princess = new Image();
princess.src = princessSprite;

// create audio
const undergroundAudio = new Audio('./sounds/underground.mp3');
const winAudio = new Audio('./sounds/win.mp3');
winAudio.loop = false;


let loopCount = 0;


function startGame() {
  moveBarrels();
  animate();
  changeHighScore();
  setHighScore();
}

function endGame() {
  if (loopCount < 1 && peach.getMario) {
    winAudio.play();
    loopCount ++;
    return;
  }
}

function animate(){

  // Animation
  setInterval(function() {

    if (peach.lives <= 0 || peach.getMario === true) {
      peach.gameWon();
      peach.gameLost();
      setHighScore();
      undergroundAudio.pause();
      endGame();
    }
    else {
      undergroundAudio.play();

      GameWindow.context.clearRect(0,0,640,590);

      // Mario
      GameWindow.context.drawImage(mario, 400, 64, 32, 32);

      // Mario platform
      brickPattern.draw(400, 96, 240, 32);

      // ladder too big so i'm putting it behind the bricks
      GameWindow.context.drawImage(ladder, 160, 520, 32, 32);
      GameWindow.context.drawImage(ladder, 432, 192, 32, 32);


      // top level
      brickPattern.draw(512, 192, 128, 32);
      brickPattern.draw(384, 200, 128, 32);
      brickPattern.draw(256, 208, 128, 32);
      brickPattern.draw(128, 216, 128, 32);
      brickPattern.draw(0, 224, 128, 32);

      // second level
      brickPattern.draw(0, 352, 128, 32);
      brickPattern.draw(128, 360, 128, 32);
      brickPattern.draw(256, 368, 128, 32);
      brickPattern.draw(384, 376, 128, 32);
      brickPattern.draw(512, 384, 128, 32);

      // third level
      brickPattern.draw(512, 512, 128, 32);
      brickPattern.draw(384, 520, 128, 32);
      brickPattern.draw(256, 528, 128, 32);
      brickPattern.draw(128, 536, 128, 32);
      brickPattern.draw(0, 544, 128, 32);

      //ladders

      GameWindow.context.drawImage(ladder, 432, 96, 32, 32);
      GameWindow.context.drawImage(ladder, 432, 128, 32, 32);
      GameWindow.context.drawImage(ladder, 432, 160, 32, 32);

      GameWindow.context.drawImage(ladder, 32, 224, 32, 32);
      GameWindow.context.drawImage(ladder, 32, 256, 32, 32);
      GameWindow.context.drawImage(ladder, 32, 288, 32, 32);
      GameWindow.context.drawImage(ladder, 32, 320, 32, 32);

      GameWindow.context.drawImage(ladder, 288, 208, 32, 32);
      GameWindow.context.drawImage(ladder, 288, 240, 32, 32);
      GameWindow.context.drawImage(ladder, 288, 272, 32, 32);
      GameWindow.context.drawImage(ladder, 288, 304, 32, 32);
      GameWindow.context.drawImage(ladder, 288, 336, 32, 32);

      GameWindow.context.drawImage(ladder, 544, 384, 32, 32);
      GameWindow.context.drawImage(ladder, 544, 416, 32, 32);
      GameWindow.context.drawImage(ladder, 544, 448, 32, 32);
      GameWindow.context.drawImage(ladder, 544, 480, 32, 32);

      GameWindow.context.drawImage(ladder, 160, 360, 32, 32);
      GameWindow.context.drawImage(ladder, 160, 392, 32, 32);
      GameWindow.context.drawImage(ladder, 160, 424, 32, 32);
      GameWindow.context.drawImage(ladder, 160, 456, 32, 32);
      GameWindow.context.drawImage(ladder, 160, 488, 32, 32);

      // // first barrel
      // GameWindow.context.drawImage(barrel, 0, 0, 32, 32, barrel1.x, barrel1.y, 32, 32);

      //peach
      GameWindow.context.drawImage(princess, 0, 0, 32, 32, peach.x, peach.y, 32, 32);

      barrel1.checkCollision();
      barrel2.checkCollision();
      barrel3.checkCollision();
      barrel4.checkCollision();
      barrel5.checkCollision();
      barrel6.checkCollision();
      barrel7.checkCollision();
      barrel8.checkCollision();
      barrel9.checkCollision();
      barrel10.checkCollision();

      barrel11.checkCollision();
      barrel12.checkCollision();
      barrel13.checkCollision();
      barrel14.checkCollision();
      barrel15.checkCollision();
      barrel16.checkCollision();
      barrel17.checkCollision();
      barrel18.checkCollision();
      barrel19.checkCollision();
      barrel20.checkCollision();

      barrel21.checkCollision();
      barrel22.checkCollision();
      barrel23.checkCollision();
      barrel24.checkCollision();
      barrel25.checkCollision();
      barrel26.checkCollision();
      barrel27.checkCollision();
      barrel28.checkCollision();
      barrel29.checkCollision();
      barrel30.checkCollision();


      barrel1.draw();
      barrel2.draw();
      barrel3.draw();
      barrel4.draw();
      barrel5.draw();
      barrel6.draw();
      barrel7.draw();
      barrel8.draw();
      barrel9.draw();
      barrel10.draw();

      barrel11.draw();
      barrel12.draw();
      barrel13.draw();
      barrel14.draw();
      barrel15.draw();
      barrel16.draw();
      barrel17.draw();
      barrel18.draw();
      barrel19.draw();
      barrel20.draw();

      barrel21.draw();
      barrel22.draw();
      barrel23.draw();
      barrel24.draw();
      barrel25.draw();
      barrel26.draw();
      barrel27.draw();
      barrel28.draw();
      barrel29.draw();
      barrel30.draw();

      barrel1.addScore();
      barrel2.addScore();
      barrel3.addScore();
      barrel4.addScore();
      barrel5.addScore();
      barrel6.addScore();
      barrel7.addScore();
      barrel8.addScore();
      barrel9.addScore();
      barrel10.addScore();

      barrel11.addScore();
      barrel12.addScore();
      barrel13.addScore();
      barrel14.addScore();
      barrel15.addScore();
      barrel16.addScore();
      barrel17.addScore();
      barrel18.addScore();
      barrel19.addScore();
      barrel20.addScore();

      barrel21.addScore();
      barrel22.addScore();
      barrel23.addScore();
      barrel24.addScore();
      barrel25.addScore();
      barrel26.addScore();
      barrel27.addScore();
      barrel28.addScore();
      barrel29.addScore();
      barrel30.addScore();

      changeScore();
      changeHighScore();
      changeLives();
      peach.gameWon();
    }
  }, 30);
}
