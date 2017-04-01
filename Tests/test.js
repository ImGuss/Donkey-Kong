var GameWindow = {
  canvas : null,
  context : null,
  create : function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    return this.context;
  },
};

// creates new canvas context in 2D
GameWindow.create('canvas');

var imageLoad = function() {
  console.log('imaged loaded');
};

var spriteSrc = 'images/princess-up';

var sprite = new Image();
sprite.onload = imageLoad;
sprite.src = spriteSrc;



var animate = function() {
  GameWindow.context.clearRect(0, 0, 640, 590);
  GameWindow.context.drawImage(sprite, 60, 60);
};


setInterval(animate, 1000/30);
