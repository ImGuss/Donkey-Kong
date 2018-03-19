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

var leftDown,
    upDown,
    rightDown,
    downDown,
    spaceDown;

const jumpAudio = new Audio('./sounds/jump.mp3');
jumpAudio.loop = false;


// Check if keys are being pressed
$(window).keydown(function(e) {
  if (e.keyCode === left || e.keyCode === wasdLeft) {
    leftDown = true;
  }
  if (e.keyCode === up || e.keyCode === wasdUp) {
    upDown = true;
  }
  if (e.keyCode === right || e.keyCode === wasdRight) {
    rightDown = true;
  }
  if (e.keyCode === down || e.keyCode === wasdDown) {
    downDown = true;
  }
  if (e.keyCode === space) {
    spaceDown = true;
  }
});

// Check if keys are let go
$(window).keyup(function(e) {
  if (e.keyCode === left || e.keyCode === wasdLeft) {
    leftDown = false;
  }
  if (e.keyCode === up || e.keyCode === wasdUp) {
    upDown = false;
  }
  if (e.keyCode === right || e.keyCode === wasdRight) {
    rightDown = false;
  }
  if (e.keyCode === down || e.keyCode === wasdDown) {
    downDown = false;
  }
  if (e.keyCode === space) {
    spaceDown = false;
  }
});


// Used for the jump function below. Needs to be global
var count = 0;
// Used for the fall function below. needs to be global
var gravity;
// Used to see if player already jumped and space bar isn't let go
var jumped = false;


// MOVE FUNCTIONS

setInterval(function(){

  // MOVE LEFT

  if (leftDown === true) {
    peach.x -= 4;

    // Checks if on first or third level
    if (peach.y > 416 || peach.y < 256) {
      // Checks if there's an incline
      if (peach.x === 104 || peach.x === 232 || peach. x === 360 || peach.x === 488) {
        peach.y += 8;
      }
    }
    // Checks if on second level
    else if (peach.y < 416 || peach.y > 256) {
      // Checks if there's an incline
      if (peach.x === 120 || peach.x === 248 || peach. x === 376 || peach.x === 504) {
        peach.y -= 8;
      }
    }
  }


  // MOVE RIGHT

  if (rightDown === true) {
    peach.x += 4;

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
  }


  // CLIMB UP

  if (upDown === true) {
    if ((peach.x >= 152 && peach.x <= 168) && (peach.y <= 504 && peach.y > 328) ||
        (peach.x >= 536 && peach.x <= 552) && (peach.y <= 480 && peach.y > 352) ||
        (peach.x >= 280 && peach.x <= 296) && (peach.y <= 336 && peach.y > 176) ||
        (peach.x >=  24 && peach.x <=  40) && (peach.y <= 320 && peach.y > 192) ||
        (peach.x >= 424 && peach.x <= 440) && (peach.y <= 168 && peach.y >  64)) {
      peach.y -= 4;
    }
  }


  // CLIMB DOWN

  if (downDown === true) {
    if ((peach.x >= 152 && peach.x <= 168) && (peach.y < 504 && peach.y >= 328) ||
        (peach.x >= 536 && peach.x <= 552) && (peach.y < 480 && peach.y >= 352) ||
        (peach.x >= 280 && peach.x <= 296) && (peach.y < 336 && peach.y >= 176) ||
        (peach.x >=  24 && peach.x <=  40) && (peach.y < 320 && peach.y >= 192) ||
        (peach.x >= 424 && peach.x <= 440) && (peach.y < 168 && peach.y >=  64)) {
      peach.y += 4;
    }
  }

  // JUMP

  if (spaceDown === true && count >= 5) {
    // if spacebar is pressed and count has reached 5 and gravity counter has reached 0
      // reset count to 0
      // make jumped variable equal true
        // i set jumped to true so that if the user continues holding space after peach reaches the floor the
        // else if statement below doesn't trigger and a peach doesn't start jumping again. only when space is
        // released will jumped be set back to false and the else if statement can trigger again
      // pause the jump sound
    if (gravity <= 0) {
      count = 0;
      jumped = true;
      jumpAudio.pause();

    }
    // if spacebar is pressed and the count has reached 5 and the gravity counter HASN'T reached 0
      // lower peach by 8 pixels
      // lower gravity counter by 1
    else {
      peach.y += 8;
      gravity --;
    }
  }

  else if (spaceDown === true && count < 5 && jumped === false) {
    // if spacebar is pressed:
      // add 1 to the counter
      // start a gravity counter
      // play the jump sound
      // do not jump yet
    count++;
    gravity = 6;
    jumpAudio.play();

    // if spacebar is pressed and count is equal to 1
      // jump
    if (count === 1) {
      peach.y -= 48;
    }
  }

  // FALL

if (spaceDown === false) {
  jumped = false;
  if (spaceDown === false && count > 0) {
    if (gravity <= 0) {
      count = 0;
      return;
    }
    else {
      peach.y += 8;
      gravity --;
    }
  }
}


}, 60);
