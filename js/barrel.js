// Barrel constructor
function Barrel() {

  this.x = 640;
  this.y = 160;
  var that = this;

  this.move = function() {
    setInterval(function() {

      // if on the first level
      if (that.y < 320 && that.y >= 160) {

        // if on the ladder it falls down to second level
        if (that.x === 32) {
          that.y += 2;
          // if not on the ladder continue going left
        } else {
          that.x -= 2;
          // descent
          if (that.x === 104 || that.x === 232 || that.x === 360 || that.x === 488) {
            that.y += 8;
          }
        }

        // if on the second level
      } else if (that.y >= 320 && that.y < 480) {

        // if on the ladder it falls down to third level
        if (that.x === 544) {
          that.y += 2;
          // if not on ladder it continues going right
        } else {
          that.x += 2;
          // descent
          if (that.x === 120 || that.x === 248 || that. x === 376 || that.x === 504) {
            that.y += 8;
          }
        }

        // if on the third level continue going left
      } else if (that.y >= 480) {
        that.x -= 2;
        // descent
        if (that.x === 104 || that.x === 232 || that.x === 360 || that.x === 488) {
          that.y += 8;
        }
      }

      return;
    }, 30);
  }; // end move function

  this.draw = function() {
    GameWindow.context.drawImage(barrel, 32, 32, 32, 32, that.x, that.y, 32, 32);
  };

  this.checkCollision = function() {
    if (collided === true) {
      if (
        (that.x >= peach.x && that.x <= (peach.x + 32)) &&
        (that.y >= peach.y && that.y <= peach.y + 32)
         ){
        peach.lives -= 1;
      }
    }
  };
}

var barrel1  = new Barrel();
var barrel2  = new Barrel();
var barrel3  = new Barrel();
var barrel4  = new Barrel();
var barrel5  = new Barrel();
var barrel6  = new Barrel();
var barrel7  = new Barrel();
var barrel8  = new Barrel();
var barrel9  = new Barrel();
var barrel10 = new Barrel();



// var delay = Math.floor(Math.random() * 4) * 1000;

function moveBarrels(){

  barrel1.move();

  setTimeout(function() {
    barrel2.move();
    console.log('BARREL 2 X');
    console.log(barrel2.x);
    console.log('BARREL 2 Y');
    console.log(barrel2.y);
    console.log('this works');
  }, 2000);

  setTimeout(function() {
    barrel3.move();
    console.log('BARREL 3 X');
    console.log(barrel3.x);
    console.log('BARREL 3 Y');
    console.log(barrel3.y);
    console.log('this works');
  }, 4000);

  setTimeout(function() {
    barrel4.move();
    console.log('BARREL 4 X');
    console.log(barrel4.x);
    console.log('BARREL 4 Y');
    console.log(barrel4.y);
    console.log('this works');
  }, 6000);

  setTimeout(function() {
    barrel5.move();
    console.log('BARREL 5 X');
    console.log(barrel5.x);
    console.log('BARREL 5 Y');
    console.log(barrel5.y);
    console.log('this works');
  }, 8000);
}
