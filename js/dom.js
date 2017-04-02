function changeLives() {
  $('#lives-span').html(peach.lives);
}

function changeScore() {
  $('#score-span').html(peach.score);
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
