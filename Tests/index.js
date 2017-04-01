function Princess() {

  this.getHostage = false;
  this.won = false;
  this.lost = false;
  this.lives = 3;

  function gameWon(){
    if (this.getHostage === false)
      return;
    if (this.getHostage === true) {
    this.won = true;
    }
    return this.won;
  }

  function gameLost(){
    if (this.lives > 0)
      return;

    if (this.lives <= 0); {
      this.lost = true;
    }
    return this.lost;
  }
}


var space = 32,
    left = 37,
    up = 38,
    right = 39,
    down = 40,
    wasdLeft = 65,
    wasdUp = 87,
    wasdRight = 68,
    wasdDown = 83;

















var canvas = document.getElementById('canvas');
console.log(canvas);
var context = canvas.getContext('2d');


function Sprite(filename, isPattern) {
  this.image = filename;
  this.pattern = isPattern;

  if (filename !== null && filename !== "" && filename !== undefined) {
    this.image = new Image();
    this.image.src = filename;

    if (isPattern) {
      this.pattern = context.createPattern(this.image, 'repeat');
    }

  } else {
    console.log("Unable to load sprite");
  }

  this.draw = function(x, y, w, h) {
    if (this.pattern !== null) {
      context.fillStyle = this.pattern;
      context.fillRect(x, y, w, h);

    } else {

      if (!w || !h) {
        context.drawImage(this.image, x, y, this.image.width, this.image.height);
      } else {
        context.drawImage(this.image, x, y, w, h);
      }

    }

  };

}




// var brick = "../images/brick.png";
// var princess = "../images/princess-left-right.png";
// var hazardClock = "../images/hazard-clockwise.png";
// var hazardCounter = "../images/hazard-counter-clockwise.png";
//
// var crateClock = new Sprite(hazardClock, false);
// var crateCounter = new Sprite(hazardCounter, false);
//
// var brickPattern = new Sprite(brick, true);


$(document).ready(function(){


  var brick = "images/brick.png";
  var princess = "images/princess-left-right.png";
  var hazardClock = "images/hazard-clockwise.png";
  var hazardCounter = "images/hazard-counter-clockwise.png";

  var crateClock = new Sprite(hazardClock, false);
  var crateCounter = new Sprite(hazardCounter, false);

  var brickPattern = new Sprite(brick, true);









  brickPattern.draw(400, 96, 32, 240);
  brickPattern.draw(576, 192, 32, 128);
  brickPattern.draw(512, 192, 32, 128);
  brickPattern.draw(488, 200, 32, 128);



  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // princess = new Princess();
  //
  // var newDiv;
  //
  // for (x = 0; x < 19; x++) {
  //   for (i = 0; i < 20; i++) {
  //     newDiv = document.createElement('div');
  //     $(newDiv).addClass('grid-cell');
  //     $(newDiv).attr('id', 'cell-' + x + '-' + i);
  //     $('#grid').prepend(newDiv);
  //   }
  // }
  //
  //
  // $(document).on('keydown', function(e){
  //   // console.log(e.keyCode);
  //   var validKeys = [32, 37, 38, 39, 40, 65, 87, 68, 83];
  //   console.log(typeof(e.keyCode));
  //   console.log(e.keyCode);
  //   console.log(validKeys);
  //
  //   if (validKeys.indexOf(e.keyCode) < 0) {
  //     return;
  //   }
  //
  //   if (e.keyCode === 40 || e.keyCode === 83) {
  //     $('#boxy').css('left', '128px');
  //   }
  // });






});
