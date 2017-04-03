function changeLives() {
  $('#lives-span').html(peach.lives);
}

function changeScore() {
  $('#score-span').html(peach.score);
}

function changeHighScore() {
  $('#high-score-span').html(peach.highScore);
}

$('#begin-game').click(function() {
  $('.begin-game').addClass('game-won-block');
  startGame();
});

$('#win-game').click(function() {
  location.reload();
});

$('#lose-game').click(function() {
  location.reload();
});
