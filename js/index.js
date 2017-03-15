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







var game;

$(document).ready(function(){
  game = new Princess();

  var newDiv;

  for (x = 0; x < 19; x++) {
    for (i = 0; i < 20; i++) {
      newDiv = document.createElement('div');
      $(newDiv).addClass('grid-cell');
      $(newDiv).attr('id', 'cell-' + x + '-' + i);
      $('#grid').prepend(newDiv);
    }
  }




  $(document).on('keydown', function(e){
    // alert(e.keyCode);
    var validKeys = [32, 37, 38, 39, 40, 65, 87, 68, 83];
    console.log(typeof(e.keyCode));
    console.log(e.keyCode);
    console.log(validKeys);

    if (validKeys.indexOf(e.keyCode) < 0) {
      return;
    }

    if (e.keyCode === 40 || e.keyCode === 83) {
      $('#boxy').css('left', '128px');
    }
  });






});
