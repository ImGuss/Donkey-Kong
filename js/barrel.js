// Barrel constructor
function Barrel() {

  this.x = 640;
  this.y = 160;
  var that = this;
  this.collided = false;
  this.velocity = 4;

  this.move = function() {
    setInterval(function() {

      // if on the first level
      if (that.y < 320 && that.y >= 160) {

        // if on the ladder it falls down to second level
        if (that.x === 32) {
          that.y += that.velocity;
          // if not on the ladder continue going left
        } else {
          that.x -= that.velocity;
          // descent
          if (that.x === 104 || that.x === 232 || that.x === 360 || that.x === 488) {
            that.y += 8;
          }
        }

        // if on the second level
      } else if (that.y >= 320 && that.y < 480) {

        // if on the ladder it falls down to third level
        if (that.x === 544) {
          that.y += that.velocity;
          // if not on ladder it continues going right
        } else {
          that.x += that.velocity;
          // descent
          if (that.x === 120 || that.x === 248 || that. x === 376 || that.x === 504) {
            that.y += 8;
          }
        }

        // if on the third level continue going left
      } else if (that.y >= 480) {
        that.x -= that.velocity;
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
    if (that.collided === true) {
      return;
    } else {
      if (
        (that.x >= peach.x && that.x <= (peach.x + 32)) &&
        (that.y >= peach.y && that.y <= peach.y + 32)
        ) {
        peach.lives -= 1;
        that.collided = true;
      }
    }
  };

  this.addScore = function() {
    if (
      (that.x >= peach.x && that.x <= (peach.x + 32)) &&
      (that.y >= (peach.y + 37) && that.y <= (peach.y + 70))
      ) {
      peach.score += 10;
    }
  };

}

var barrel1   = new Barrel();
var barrel2   = new Barrel();
var barrel3   = new Barrel();
var barrel4   = new Barrel();
var barrel5   = new Barrel();
var barrel6   = new Barrel();
var barrel7   = new Barrel();
var barrel8   = new Barrel();
var barrel9   = new Barrel();
var barrel10  = new Barrel();

var barrel11  = new Barrel();
var barrel12  = new Barrel();
var barrel13  = new Barrel();
var barrel14  = new Barrel();
var barrel15  = new Barrel();
var barrel16  = new Barrel();
var barrel17  = new Barrel();
var barrel18  = new Barrel();
var barrel19  = new Barrel();
var barrel20  = new Barrel();

var barrel21  = new Barrel();
var barrel22  = new Barrel();
var barrel23  = new Barrel();
var barrel24  = new Barrel();
var barrel25  = new Barrel();
var barrel26  = new Barrel();
var barrel27  = new Barrel();
var barrel28  = new Barrel();
var barrel29  = new Barrel();
var barrel30  = new Barrel();



// var delay = Math.floor(Math.random() * 4) * 1000;

function moveBarrels(){

  barrel1.move();

  setTimeout(function() {
    barrel2.move();
  }, 2000);

  setTimeout(function() {
    barrel3.move();
  }, 6000);

  setTimeout(function() {
    barrel4.move();
  }, 10000);

  setTimeout(function() {
    barrel5.move();
  }, 14000);

  setTimeout(function() {
    barrel6.move();
  }, 18000);

  setTimeout(function() {
    barrel7.move();
  }, 22000);

  setTimeout(function() {
    barrel8.move();
  }, 26000);

  setTimeout(function() {
    barrel9.move();
  }, 30000);

  setTimeout(function() {
    barrel10.move();
  }, 34000);




  setTimeout(function() {
    barrel11.move();
  }, 38000);

  setTimeout(function() {
    barrel12.move();
  }, 42000);

  setTimeout(function() {
    barrel13.move();
  }, 46000);

  setTimeout(function() {
    barrel14.move();
  }, 50000);

  setTimeout(function() {
    barrel15.move();
  }, 54000);

  setTimeout(function() {
    barrel16.move();
  }, 58000);

  setTimeout(function() {
    barrel17.move();
  }, 62000);

  setTimeout(function() {
    barrel18.move();
  }, 66000);

  setTimeout(function() {
    barrel19.move();
  }, 70000);

  setTimeout(function() {
    barrel20.move();
  }, 74000);




  setTimeout(function() {
    barrel21.move();
  }, 78000);

  setTimeout(function() {
    barrel22.move();
  }, 82000);

  setTimeout(function() {
    barrel23.move();
  }, 86000);

  setTimeout(function() {
    barrel24.move();
  }, 90000);

  setTimeout(function() {
    barrel25.move();
  }, 94000);

  setTimeout(function() {
    barrel26.move();
  }, 98000);

  setTimeout(function() {
    barrel27.move();
  }, 102000);

  setTimeout(function() {
    barrel28.move();
  }, 106000);

  setTimeout(function() {
    barrel29.move();
  }, 110000);

  setTimeout(function() {
    barrel30.move();
  }, 114000);

}
