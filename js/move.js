// Keycode Variables
var space = 32,
    left = 37,
    up = 38,
    right = 39,
    down = 40,
    wasdLeft = 65,
    wasdUp = 87,
    wasdRight = 68,
    wasdDown = 83;


$(document).ready(function() {
  // MOVE FUNCTIONS


  // MOVE LEFT
  $(window).keydown(function(e) {
    if (e.keyCode === left || e.keyCode === wasdLeft) {
      peach.x -= 4;

      if (peach.y > 416 || peach.y < 256) {
        if (peach.x === 104 || peach.x === 232 || peach. x === 360 || peach.x === 488) {
          peach.y += 8;
        }
      }
      else if (peach.y < 416 || peach.y > 256) {
        if (peach.x === 120 || peach.x === 248 || peach. x === 376 || peach.x === 504) {
          peach.y -= 8;
        }
      }

      console.log("Peach X:");
      console.log(peach.x);
      console.log("Peach Y:");
      console.log(peach.y);
      return;
    }
  });


  // MOVE RIGHT
  $(window).keydown(function(e) {
    if (e.keyCode === right || e.keyCode === wasdRight) {
      peach.x += 8;

      if (peach.y > 416 || peach.y < 256) {
        if (peach.x === 104 || peach.x === 232 || peach. x === 360 || peach.x === 488) {
          peach.y -= 8;
        }
      }
      else if (peach.y < 416 || peach.y > 256) {
        if (peach.x === 120 || peach.x === 248 || peach. x === 376 || peach.x === 504) {
          peach.y += 8;
        }
      }

      console.log("Peach X:");
      console.log(peach.x);
      console.log("Peach Y:");
      console.log(peach.y);
      return;
    }
  });

  // CLIMB UP
  $(window).keydown(function(e) {
    if (e.keyCode === up || e.keyCode === wasdUp) {
      if ((peach.x >= 152 && peach.x <= 168) && (peach.y <= 504 && peach.y > 328) ||
          (peach.x >= 536 && peach.x <= 552) && (peach.y <= 480 && peach.y > 352) ||
          (peach.x >= 280 && peach.x <= 296) && (peach.y <= 336 && peach.y > 176) ||
          (peach.x >=  24 && peach.x <=  40) && (peach.y <= 320 && peach.y > 192) ||
          (peach.x >= 424 && peach.x <= 440) && (peach.y <= 168 && peach.y >  64)) {
        peach.y -= 4;
      }
    }
    return;
  });

  // CLIMB DOWN
  $(window).keydown(function(e) {
    if (e.keyCode === down || e.keyCode === wasdDown) {
      if ((peach.x >= 152 && peach.x <= 168) && (peach.y < 504 && peach.y >= 328) ||
          (peach.x >= 536 && peach.x <= 552) && (peach.y < 480 && peach.y >= 352) ||
          (peach.x >= 280 && peach.x <= 296) && (peach.y < 336 && peach.y >= 176) ||
          (peach.x >=  24 && peach.x <=  40) && (peach.y < 320 && peach.y >= 192) ||
          (peach.x >= 424 && peach.x <= 440) && (peach.y < 168 && peach.y >=  64)) {
        peach.y += 4;
      }
    }
    return;
  });

  // JUMP
  var count = 0;
  $(window).keydown(function(e) {
    if (e.keyCode === space) {
      count ++;
      if (count === 1) {
        peach.y -= 48;
      }else {
        return;
      }

    }
    return;
  });

  $(window).keyup(function(e) {
    if (e.keyCode === space) {
      count = 0;

      peach.y += 48;
    }
    return;
  });

});
