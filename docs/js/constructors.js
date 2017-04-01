// Creates canvas object
var GameWindow = {
  canvas : null,
  context : null,
  create : function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    return this.context;
  },
};

// Creates new canvas
GameWindow.create('canvas');


// Creates sprites
function Sprite(filename, isPattern) {
  that = this;
  this.image = null;
  this.pattern = null;

  // Sprite animation properties
  this.animationDelay = 0;
  this.animationIndexCounter = 0;
  this.animationCurrentFrame = 0;

  this.drawAnimate = function(x, y, direction) {
    //
  };
  // Sprite animation properties end

  if (filename !== null && filename !== "" && filename !== undefined) {
    this.image = new Image();
    this.image.src = filename;

    if (isPattern === true) {
      this.image.onload = function() {
        that.pattern = GameWindow.context.createPattern(this, 'repeat');
      };
    }
  } else {
    console.log("Unable to load sprite.");
  }

  this.draw = function(x, y, w, h) {

    // if it's a pattern...
    if (this.pattern !== null) {
      // fills the canvas with pattern
      GameWindow.context.fillStyle = this.pattern;
      GameWindow.context.fillRect(x, y, w, h);

      // if it's not a pattern....
    } else {

      // if no width/height is passed...
      if (w !== undefined || h !== undefined) {
        // use default image width and height
        GameWindow.context.drawImage(this.image, x, y, this.image.width, this.image.height);
        // if width/height is passed...
      } else {
        // use custom width and height
        GameWindow.context.drawImage(this.image, x, y, w, h);
      }

    }

  };
} // end Sprite constructor



/*     ------------------------------     */


// Princess constructor
function Princess() {
  this.x = 0;
  this.y = 512;

  this.score = 0;
  this.lives = 3;

  this.getMario = false;
} // end Princess constructor


// Checks if game was won
Princess.prototype.gameWon = function() {
  if (this.x === 420 && this.y === 64) {
    $('#game-won').removeClass('game-won-block');
  }
  return;
};

// Checks if game was lost
Princess.prototype.gameLost = function() {
  if (this.lives <= 0) {
    $('#game-lost').removeClass('game-lost-block');
  }
  return;
};
